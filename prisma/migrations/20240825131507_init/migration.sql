-- CreateTable
CREATE TABLE "Rooms" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "amenities" TEXT NOT NULL,
    "store" TEXT NOT NULL,
    "totalRent" INTEGER NOT NULL,
    "geolocation" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "roomMates" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacancy" (
    "id" SERIAL NOT NULL,
    "duration" TEXT NOT NULL,
    "vacancyType" TEXT NOT NULL,
    "sharingType" TEXT NOT NULL,
    "rent" INTEGER NOT NULL,
    "preferences" TEXT NOT NULL,
    "moveIn" TIMESTAMP(3) NOT NULL,
    "moveOut" TIMESTAMP(3) NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_email_key" ON "Rooms"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_address_key" ON "Rooms"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Vacancy_roomId_key" ON "Vacancy"("roomId");

-- AddForeignKey
ALTER TABLE "Vacancy" ADD CONSTRAINT "Vacancy_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
