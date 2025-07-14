import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';


const prisma = new PrismaClient()
  .$extends(withAccelerate());

// A `main` function so that we can use async/await
async function main() {
    const result = await prisma.$queryRaw'SELECT * FROM User';
}