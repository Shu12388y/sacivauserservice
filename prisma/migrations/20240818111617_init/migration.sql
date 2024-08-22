/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Survey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Survey_email_key" ON "Survey"("email");
