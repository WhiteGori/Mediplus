/*
  Warnings:

  - You are about to drop the column `address` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cuit]` on the table `Pharmacy` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Pharmacy_username_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Pharmacy" DROP COLUMN "address",
DROP COLUMN "name",
DROP COLUMN "username",
ADD COLUMN     "cuit" TEXT,
ADD COLUMN     "direccion" TEXT,
ADD COLUMN     "nombreFarmacia" TEXT,
ADD COLUMN     "razonSocial" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
DROP COLUMN "username",
ADD COLUMN     "birthDate" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ALTER COLUMN "dni" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacy_cuit_key" ON "Pharmacy"("cuit");
