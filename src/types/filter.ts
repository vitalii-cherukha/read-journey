export type FilterData = {
  title: string;
  author: string;
};

export type AddBookData = {
  title: string;
  author: string;
  totalPages: number;
};

export type StatusFilterBooks = {
  status: '' | 'unread' | 'in-progress' | 'done';
};
