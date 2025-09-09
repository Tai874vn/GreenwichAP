import axios, { AxiosResponse, AxiosError } from 'axios';
import { ApiResponse } from '@/types';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.greenwich.edu.vn';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      window.location.href = '/auth/login';
    }
    
    if (error.response?.status === 403) {
      console.error('Access forbidden:', error.response.data);
    }
    
    if (error.response?.status >= 500) {
      console.error('Server error:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials: { email: string; password: string; userType: string }) =>
    api.post<ApiResponse<{ user: any; token: string }>>('/auth/login', credentials),
    
  logout: () =>
    api.post<ApiResponse<void>>('/auth/logout'),
    
  refreshToken: () =>
    api.post<ApiResponse<{ token: string }>>('/auth/refresh'),
    
  forgotPassword: (email: string) =>
    api.post<ApiResponse<void>>('/auth/forgot-password', { email }),
    
  resetPassword: (token: string, password: string) =>
    api.post<ApiResponse<void>>('/auth/reset-password', { token, password }),
};

export const userAPI = {
  getProfile: () =>
    api.get<ApiResponse<any>>('/user/profile'),
    
  updateProfile: (data: any) =>
    api.put<ApiResponse<any>>('/user/profile', data),
    
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put<ApiResponse<void>>('/user/change-password', data),
};

export const scheduleAPI = {
  getClasses: (date?: string) =>
    api.get<ApiResponse<any[]>>('/schedule/classes', { params: { date } }),
    
  getTasks: () =>
    api.get<ApiResponse<any[]>>('/schedule/tasks'),
    
  updateAttendance: (classId: string, status: string) =>
    api.put<ApiResponse<void>>(`/schedule/classes/${classId}/attendance`, { status }),
};

export const gradesAPI = {
  getGrades: (semester?: string) =>
    api.get<ApiResponse<any[]>>('/grades', { params: { semester } }),
    
  getAttendance: () =>
    api.get<ApiResponse<any[]>>('/attendance'),
};

export const libraryAPI = {
  searchBooks: (query: string, filters?: any) =>
    api.get<ApiResponse<any[]>>('/library/search', { params: { query, ...filters } }),
    
  getBook: (id: string) =>
    api.get<ApiResponse<any>>(`/library/books/${id}`),
    
  borrowBook: (bookId: string) =>
    api.post<ApiResponse<void>>(`/library/books/${bookId}/borrow`),
};

export const roomBookingAPI = {
  getRooms: () =>
    api.get<ApiResponse<any[]>>('/rooms'),
    
  getAvailableSlots: (roomId: string, date: string) =>
    api.get<ApiResponse<string[]>>(`/rooms/${roomId}/available-slots`, { params: { date } }),
    
  createBooking: (data: any) =>
    api.post<ApiResponse<any>>('/bookings', data),
    
  getUserBookings: () =>
    api.get<ApiResponse<any[]>>('/bookings/user'),
};

export const notificationsAPI = {
  getNotifications: () =>
    api.get<ApiResponse<any[]>>('/notifications'),
    
  markAsRead: (notificationId: string) =>
    api.put<ApiResponse<void>>(`/notifications/${notificationId}/read`),
    
  markAllAsRead: () =>
    api.put<ApiResponse<void>>('/notifications/mark-all-read'),
    
  deleteNotification: (notificationId: string) =>
    api.delete<ApiResponse<void>>(`/notifications/${notificationId}`),
};

export default api;