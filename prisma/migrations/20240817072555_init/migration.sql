/*
  Warnings:

  - Added the required column `ending` to the `UserPreference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starting` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPreference" ADD COLUMN     "ending" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "starting" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timstamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
