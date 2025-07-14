import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient()
  .$extends(withAccelerate());

async function main() {
  // Medicamentos
  const paracetamol = await prisma.medication.create({
    data: {
      id: 1,
      name: 'Paracetamol',
      dosage: '500mg'
    },
  });

  const ibuprofeno = await prisma.medication.create({
    data: {
      id: 2,
      name: 'Ibuprofeno',
      dosage: '400mg'
    },
  });

  // Usuario normal
  const normalUser = await prisma.user.create({
    data: {
      username: 'juan123',
      email: 'juan@gmail.com',
      password: 'password',
      name: 'Juan Blanco',
      dni: '12345678',
      inventory: {
        create: [
          {
            medicationId: paracetamol.id,
            quantity: 5
          },
          {
            medicationId: ibuprofeno.id,
            quantity: 3
          }
        ]
      }
    }
  });

  // Usuario farmacia
  const pharmacyUser = await prisma.pharmacy.create({
    data: {
      username: 'farmacity',
      email: 'farmacity@gmail.com',
      password: 'password',
      name: 'Farmacity',
      address: 'Calle Falsa 123',
      inventory: {
        create: [
          {
            medicationId: paracetamol.id,
            quantity: 100
          },
          {
            medicationId: ibuprofeno.id,
            quantity: 50
          }
        ]
      }
    }
  });

  console.log('Usuarios creados:', { normalUser, pharmacyUser });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
