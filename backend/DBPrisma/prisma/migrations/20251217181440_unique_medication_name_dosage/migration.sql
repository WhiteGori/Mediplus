/*
  Warnings:

  - A unique constraint covering the columns `[name,dosage]` on the table `Medication` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Medication_name_dosage_key" ON "Medication"("name", "dosage");
