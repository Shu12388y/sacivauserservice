-- CreateTable
CREATE TABLE "UserPreference" (
    "Id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ImageUrl" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "university" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "foodPrefernce" TEXT NOT NULL,
    "smoking" TEXT NOT NULL,
    "drinking" TEXT NOT NULL,
    "expenditure" TEXT NOT NULL,
    "ambiance" TEXT NOT NULL,
    "tidiness" TEXT NOT NULL,
    "socializing" TEXT NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_email_key" ON "UserPreference"("email");
