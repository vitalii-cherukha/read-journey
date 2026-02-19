import { create } from 'zustand';
import type { User } from '../types/user';
import { devtools, persist } from 'zustand/middleware';
import { authAPI } from '../api/api';
import { AxiosError } from 'axios';

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  // Реєстрація користувача - створює новий акаунт та автоматично авторизує
  register: (name: string, email: string, password: string) => Promise<void>;

  // Логін користувача - авторизує існуючого користувача
  login: (email: string, password: string) => Promise<void>;

  // Logout користувача - видаляє сесію на сервері та очищає store
  logout: () => Promise<void>;

  // Встановити користувача вручну (для автоматичної авторизації після реєстрації)
  setUser: (user: User, token: string) => void;

  // Перевірити аутентифікацію при завантаженні додатку
  checkAuth: () => Promise<void>;

  // Очистити стан аутентифікації
  clearAuth: () => void;

  // Очистити помилку
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        // Початковий стан
        user: null,
        token: null,
        isLoading: false,
        error: null,

        // Реєстрація: відправляє дані на сервер, отримує token та дані користувача
        register: async (name: string, email: string, password: string) => {
          try {
            set({ isLoading: true, error: null });

            // Виклик API для реєстрації
            const response = await authAPI.register(name, email, password);

            // Зберігаємо token в localStorage для персистентності
            localStorage.setItem('token', response.token);

            // Оновлюємо store з даними користувача
            set({
              user: {
                id: response.id,
                name: response.name,
                email: response.email,
              },
              token: response.token,
              isLoading: false,
            });
          } catch (error) {
            // Обробка помилок: зберігаємо повідомлення для відображення користувачу
            const axiosError = error as AxiosError<{ message: string }>;
            set({
              isLoading: false,
              error:
                axiosError.response?.data?.message || 'Registration failed',
            });
            throw error;
          }
        },

        // Логін: авторизує користувача та отримує token
        login: async (email: string, password: string) => {
          try {
            set({ isLoading: true, error: null });

            // Виклик API для логіну
            const response = await authAPI.login(email, password);

            // Зберігаємо token в localStorage
            localStorage.setItem('token', response.token);

            // Оновлюємо store
            set({
              user: {
                id: response.id,
                name: response.name,
                email: response.email,
              },
              token: response.token,
              isLoading: false,
            });
          } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            set({
              isLoading: false,
              error: axiosError.response?.data?.message || 'Login failed',
            });
            throw error;
          }
        },

        // Logout: видаляє сесію на сервері та очищає локальний стан
        logout: async () => {
          try {
            // Відправляємо запит на сервер для видалення сесії
            await authAPI.logout();
          } catch (error) {
            console.error('Logout error:', error);
          } finally {
            // Незалежно від результату - очищаємо localStorage та store
            localStorage.removeItem('token');
            set({
              user: null,
              token: null,
              error: null,
            });
          }
        },

        // Встановити користувача: використовується для автоматичної авторизації після реєстрації
        setUser: (user: User, token: string) => {
          localStorage.setItem('token', token);
          set({
            user,
            token,
          });
        },

        // Перевірити аутентифікацію: використовується при завантаженні додатку
        checkAuth: async () => {
          const token = localStorage.getItem('token');

          // Якщо немає token - користувач не авторизований
          if (!token) {
            set({ user: null });
            return;
          }

          try {
            // Перевіряємо валідність token через API
            const user = await authAPI.getCurrentUser();

            // Token валідний - встановлюємо користувача
            set({
              user,
              token,
            });
          } catch {
            // Token невалідний - очищаємо store
            localStorage.removeItem('token');
            set({
              user: null,
              token: null,
            });
          }
        },

        // Очистити аутентифікацію: використовується для ручного очищення
        clearAuth: () => {
          localStorage.removeItem('token');
          set({
            user: null,
            token: null,
            error: null,
          });
        },

        // Очистити помилку: використовується після відображення notification
        clearError: () => {
          set({ error: null });
        },
      }),
      {
        name: 'auth-storage',
        // Зберігаємо тільки необхідні дані в localStorage
        partialize: (state) => ({
          user: state.user,
          token: state.token,
        }),
      },
    ),
  ),
);
