require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Mail y contraseña obligatorios' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Datos invalidos' });
    }

    res.json({ id: user.id, email: user.email, name: user.name, birthDate: user.birthDate, dni: user.dni, address: user.address, firstName: user.firstName, lastName: user.lastName });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/signup', async (req, res) => {
  const { email, password, userType, ...rest } = req.body;

  if (!email || !password || !userType) {
    return res.status(400).json({ error: 'Email, password, and userType are required' });
  }

  try {
    // Check if email exists in either table
    const existingUser = await prisma.user.findUnique({ where: { email } });
    const existingPharmacy = await prisma.pharmacy.findUnique({ where: { email } });

    if (existingUser || existingPharmacy) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    let newUser;

    if (userType === 'user') {
      newUser = await prisma.user.create({
        data: {
          email,
          password,
          dni: rest.dni,
          birthDate: rest.birthDate,
          firstName: rest.firstName,
          lastName: rest.lastName,
          address: rest.direccionUser,
        },
      });
    } else if (userType === 'pharmacy') {
      newUser = await prisma.pharmacy.create({
        data: {
          email,
          password,
          name: rest.nombreFarmacia,
          address: rest.direccion,
          cuit: rest.cuit,
          razonSocial: rest.razonSocial,
        },
      });
    } else {
      return res.status(400).json({ error: 'Invalid userType' });
    }

    res.json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/medication-schedules', async (req, res) => {
  const { userId, medicineName, dosage, times } = req.body;

  if (
    !userId ||
    !medicineName ||
    !Array.isArray(times) ||
    times.length === 0
  ) {
    return res.status(400).json({
      error: 'userId, medicineName y al menos un horario son requeridos',
    });
  }

  try {
    // 1️⃣ Buscar medicamento por (name, dosage)
    let medication = await prisma.medication.findUnique({
      where: {
        name_dosage: {
          name: medicineName,
          dosage: dosage || '',
        },
      },
    });

    // 2️⃣ Crear medicamento si no existe
    if (!medication) {
      medication = await prisma.medication.create({
        data: {
          name: medicineName,
          dosage: dosage || '',
        },
      });
    }

    // 3️⃣ Crear el schedule
    const schedule = await prisma.medicationSchedule.create({
      data: {
        userId,
        medicationId: medication.id,
        times,
      },
    });

    res.status(201).json(schedule);
  } catch (err) {
    console.error('Error creando MedicationSchedule:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/medication-schedules/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    await prisma.medicationSchedule.delete({
      where: { id },
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Error eliminando schedule:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/medication-schedules/:userId', async (req, res) => {
  const userId = Number(req.params.userId);

  if (!userId) {
    return res.status(400).json({ error: 'userId inválido' });
  }

  try {
    const schedules = await prisma.medicationSchedule.findMany({
      where: { userId },
      include: {
        medication: true, // ← traemos nombre y dosis
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(schedules);
  } catch (err) {
    console.error('Error trayendo schedules:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://172.29.132.74:4000`);
});
