import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Додати interceptor для автоматичного додавання token до headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// TODO: Додати interceptor для обробки 401 помилок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const authAPI = {
  // Реєстрація користувача
  register: async (name: string, email: string, password: string) => {
    const { data } = await api.post('/users/signup', { name, email, password });
    return data;
  },

  // Логін користувача
  login: async (email: string, password: string) => {
    const { data } = await api.post('/users/signin', { email, password });
    return data;
  },

  // Logout користувача
  logout: async () => {
    await api.post('/users/signout');
  },

  // Отримати поточного користувача
  getCurrentUser: async () => {
    const { data } = await api.get('/users/current');
    return data;
  },

  // Оновити токени
  refreshToken: async () => {
    const { data } = await api.get('/users/current/refresh');
    return data;
  },
};

export const booksAPI = {
  // Отримати рекомендовані книги
  getRecommended: async (
    page = 1,
    limit = 10,
    title?: string,
    author?: string,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (title) params.append('title', title);
    if (author) params.append('author', author);

    const { data } = await api.get(`/books/recommend?${params}`);
    return data;
  },

  // Отримати власну бібліотеку
  getOwnBooks: async () => {
    const { data } = await api.get('/books/own');
    return data;
  },

  // Отримати інформацію про книгу
  getBookById: async (bookId: string) => {
    const { data } = await api.get(`/books/${bookId}`);
    return data;
  },

  // Додати нову книгу
  addBook: async (title: string, author: string, totalPages: number) => {
    const { data } = await api.post('/books/add', {
      title,
      author,
      totalPages,
    });
    return data;
  },

  // Додати книгу з рекомендованих
  addRecommendedBook: async (bookId: string) => {
    const { data } = await api.post(`/books/add/${bookId}`);
    return data;
  },

  // Видалити книгу з бібліотеки
  deleteBook: async (bookId: string) => {
    await api.delete(`/books/remove/${bookId}`);
  },

  // Почати читання книги
  startReading: async (bookId: string, page: number) => {
    const { data } = await api.post('/books/reading/start', {
      id: bookId,
      page,
    });
    return data;
  },

  // Закінчити читання книги
  finishReading: async (bookId: string, page: number) => {
    const { data } = await api.post('/books/reading/finish', {
      id: bookId,
      page,
    });
    return data;
  },

  // Видалити запис про читання
  deleteReading: async (bookId: string, readingId: string) => {
    await api.delete('/books/reading', { data: { bookId, readingId } });
  },
};

export default api;
