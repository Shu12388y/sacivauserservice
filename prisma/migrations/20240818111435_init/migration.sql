-- CreateTable
CREATE TABLE "Survey" (
    "id" SERIAL NOT NULL,
    "UniversityExp" TEXT NOT NULL,
    "MajorExp" TEXT NOT NULL,
    "CityExp" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);
