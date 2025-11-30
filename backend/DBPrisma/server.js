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

    res.json({ id: user.id, email: user.email, name: user.name });
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
          dni: rest.dni || '00000000',
          birthDate: rest.birthDate,
          firstName: rest.firstName,
          lastName: rest.lastName,
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


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://172.29.132.74:4000`);
});
