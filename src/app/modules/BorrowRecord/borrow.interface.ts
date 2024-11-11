export type BorrowRecord = {
  borrowId: string;
  borrowDate: Date;
  returnDate?: Date | null;
  bookId: string;
  memberId: string;
};
