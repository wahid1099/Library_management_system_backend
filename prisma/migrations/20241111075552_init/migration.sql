-- CreateTable
CREATE TABLE "book" (
    "bookId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "member" (
    "memberId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "membershipDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "borrow_record" (
    "borrowId" UUID NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),
    "bookId" UUID NOT NULL,
    "memberId" UUID NOT NULL,

    CONSTRAINT "borrow_record_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- CreateIndex
CREATE INDEX "borrow_record_bookId_idx" ON "borrow_record"("bookId");

-- CreateIndex
CREATE INDEX "borrow_record_memberId_idx" ON "borrow_record"("memberId");

-- AddForeignKey
ALTER TABLE "borrow_record" ADD CONSTRAINT "borrow_record_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_record" ADD CONSTRAINT "borrow_record_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
