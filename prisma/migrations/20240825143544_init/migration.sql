/*
  Warnings:

  - Added the required column `cluster` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cluster` to the `Vacancy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "cluster" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vacancy" ADD COLUMN     "cluster" TEXT NOT NULL;
