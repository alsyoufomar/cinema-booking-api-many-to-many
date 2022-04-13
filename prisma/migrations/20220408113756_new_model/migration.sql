-- CreateTable
CREATE TABLE "Seat" (
    "id" SERIAL NOT NULL,
    "row" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "screenId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SeatToTicket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SeatToTicket_AB_unique" ON "_SeatToTicket"("A", "B");

-- CreateIndex
CREATE INDEX "_SeatToTicket_B_index" ON "_SeatToTicket"("B");

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeatToTicket" ADD FOREIGN KEY ("A") REFERENCES "Seat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeatToTicket" ADD FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
