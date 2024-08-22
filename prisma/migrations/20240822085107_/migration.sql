/*
  Warnings:

  - Added the required column `gender` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPreference" ADD COLUMN     "gender" TEXT NOT NULL;
