export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommended: boolean;
}
export interface FetchBooksResponse {
  books: Book[];
  total: number;
  page: number;
  perPage: number;
}
