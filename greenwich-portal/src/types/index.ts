export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  studentId?: string;
  campus: string;
  avatar?: string;
}

export type UserRole = 'student' | 'teacher' | 'staff' | 'admin' | 'parent';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'student' | 'staff' | 'parent';
}

export interface Class {
  id: string;
  subject: string;
  subjectCode: string;
  lecturer: string;
  room: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  attendanceStatus?: 'present' | 'absent' | 'not-marked';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'assignment' | 'project' | 'exam' | 'presentation';
  subject: string;
  deadline: string;
  status: 'new' | 'in-progress' | 'submitted' | 'graded';
  priority: 'low' | 'medium' | 'high';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface Grade {
  id: string;
  subject: string;
  subjectCode: string;
  assignments: {
    name: string;
    score: number;
    maxScore: number;
    weight: number;
  }[];
  finalGrade?: number;
  gpa?: number;
  semester: string;
}

export interface AttendanceRecord {
  id: string;
  subject: string;
  subjectCode: string;
  totalSessions: number;
  attendedSessions: number;
  absentSessions: number;
  percentage: number;
  sessions: {
    date: string;
    status: 'present' | 'absent' | 'late';
  }[];
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  type: 'classroom' | 'lab' | 'library' | 'meeting';
  available: boolean;
  equipment: string[];
}

export interface BookingRequest {
  roomId: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  attendees: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  year: number;
  category: string;
  available: boolean;
  coverImage?: string;
  description?: string;
}

export interface LibrarySearchFilters {
  category?: string;
  author?: string;
  publisher?: string;
  year?: number;
  available?: boolean;
}