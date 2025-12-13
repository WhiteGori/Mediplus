-- CreateTable
CREATE TABLE "MedicationSchedule" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "medicationId" INTEGER NOT NULL,
    "times" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicationSchedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MedicationSchedule" ADD CONSTRAINT "MedicationSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicationSchedule" ADD CONSTRAINT "MedicationSchedule_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
