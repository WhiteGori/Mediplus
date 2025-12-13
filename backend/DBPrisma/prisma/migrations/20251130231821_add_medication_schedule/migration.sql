/*
  Warnings:

  - The `times` column on the `MedicationSchedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "MedicationSchedule" DROP COLUMN "times",
ADD COLUMN     "times" TEXT[];
