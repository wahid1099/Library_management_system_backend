export type TBook = {
  bookId: string;
  title: string;
  genre: string;
  publishedYear: number;
  totalCopies: number;
  availableCopies: number;
};

export type TBookUpdate = {
  title?: string;
  genre?: string;
  publishedYear?: number;
  totalCopies?: number;
  availableCopies?: number;
};
