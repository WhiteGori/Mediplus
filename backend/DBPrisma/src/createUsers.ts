// seed.ts or seed.js
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
  // Crear medicamentos
  const paracetamol = await prisma.medication.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Paracetamol',
      dosage: '500mg',
    },
  });

  const ibuprofeno = await prisma.medication.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Ibuprofeno',
      dosage: '400mg',
    },
  });

  // Crear usuario normal
  const normalUser = await prisma.user.upsert({
    where: { email: 'juan@gmail.com' },
    update: {},
    create: {
      email: 'juan@gmail.com',
      password: 'password',
      firstName: 'Juan',
      lastName: 'Blanco',
      birthDate: '1990-01-01',
      dni: '12345678',
      inventory: {
        create: [
          {
            medicationId: paracetamol.id,
            quantity: 5,
          },
          {
            medicationId: ibuprofeno.id,
            quantity: 3,
          },
        ],
      },
    },
  });

  // Crear farmacia
  const pharmacyUser = await prisma.pharmacy.upsert({
    where: { email: 'farmacity@gmail.com' },
    update: {},
    create: {
      email: 'farmacity@gmail.com',
      password: 'password',
      direccion: 'Calle Falsa 123',
      nombreFarmacia: 'Farmacity',
      razonSocial: 'Farmacity SRL',
      cuit: '30-12345678-9',
      inventory: {
        create: [
          {
            medicationId: paracetamol.id,
            quantity: 100,
          },
          {
            medicationId: ibuprofeno.id,
            quantity: 50,
          },
        ],
      },
    },
  });

  console.log('Usuarios creados:', {
    normalUser,
    pharmacyUser,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
