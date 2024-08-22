/*
  Warnings:

  - Added the required column `about` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPreference" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "findmate" BOOLEAN NOT NULL DEFAULT false;
