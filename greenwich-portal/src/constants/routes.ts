export const ROUTES = {
  // Auth routes
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // Common routes (all users)
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',

  // Student routes
  STUDENT: {
    DASHBOARD: '/student/dashboard',
    SCHEDULE: '/student/schedule',
    GRADES: '/student/grades',
    ATTENDANCE: '/student/attendance',
    LIBRARY: '/student/library',
    ROOM_BOOKING: '/student/room-booking',
    WALLET: '/student/wallet',
    DOCUMENTS: '/student/documents',
    FEEDBACK: '/student/feedback',
    PROFILE: '/student/profile',
  },

  // Teacher routes
  TEACHER: {
    DASHBOARD: '/teacher/dashboard',
    CLASSES: '/teacher/classes',
    ATTENDANCE: '/teacher/attendance',
    GRADING: '/teacher/grading',
    SCHEDULE: '/teacher/schedule',
    MESSAGES: '/teacher/messages',
    MILESTONES: '/teacher/milestones',
    PROFILE: '/teacher/profile',
  },

  // Staff routes
  STAFF: {
    DASHBOARD: '/staff/dashboard',
    STUDENTS: '/staff/students',
    SCHEDULE_MANAGEMENT: '/staff/schedule-management',
    ROOM_MANAGEMENT: '/staff/rooms',
    REPORTS: '/staff/reports',
    ANNOUNCEMENTS: '/staff/announcements',
    ASSIGNMENTS: '/staff/assignments',
    PROFILE: '/staff/profile',
  },

  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USER_MANAGEMENT: '/admin/users',
    SYSTEM_SETTINGS: '/admin/settings',
    REPORTS: '/admin/reports',
    LOGS: '/admin/logs',
    CMS: '/admin/cms',
  },

  // Parent routes
  PARENT: {
    DASHBOARD: '/parent/dashboard',
    STUDENT_PROGRESS: '/parent/student-progress',
    ATTENDANCE: '/parent/attendance',
    GRADES: '/parent/grades',
    COMMUNICATIONS: '/parent/communications',
    CONTACT_ADMIN: '/parent/contact-admin',
    PROFILE: '/parent/profile',
  },

  // Library routes
  LIBRARY: {
    HOME: '/library',
    SEARCH: '/library/search',
    BOOK_DETAILS: '/library/book/:id',
    ACADEMIC_BOOKS: '/library/academic-books',
    BORROWED_BOOKS: '/library/borrowed-books',
  },

  // Error routes
  ERROR: {
    NOT_FOUND: '/404',
    UNAUTHORIZED: '/401',
    FORBIDDEN: '/403',
    SERVER_ERROR: '/500',
  },
} as const;

// Helper function to generate dynamic routes
export const generateRoute = {
  bookDetails: (id: string) => `/library/book/${id}`,
  studentDetail: (id: string) => `/staff/students/${id}`,
  classDetail: (id: string) => `/teacher/classes/${id}`,
  userDetail: (id: string) => `/admin/users/${id}`,
  resetPassword: (token: string) => `/auth/reset-password?token=${token}`,
};

// Route groups by user role
export const ROLE_ROUTES = {
  student: [
    ROUTES.STUDENT.DASHBOARD,
    ROUTES.STUDENT.SCHEDULE,
    ROUTES.STUDENT.GRADES,
    ROUTES.STUDENT.ATTENDANCE,
    ROUTES.STUDENT.LIBRARY,
    ROUTES.STUDENT.ROOM_BOOKING,
    ROUTES.STUDENT.WALLET,
    ROUTES.STUDENT.DOCUMENTS,
    ROUTES.STUDENT.FEEDBACK,
    ROUTES.STUDENT.PROFILE,
    ROUTES.LIBRARY.HOME,
    ROUTES.LIBRARY.SEARCH,
    ROUTES.LIBRARY.ACADEMIC_BOOKS,
    ROUTES.LIBRARY.BORROWED_BOOKS,
  ],
  teacher: [
    ROUTES.TEACHER.DASHBOARD,
    ROUTES.TEACHER.CLASSES,
    ROUTES.TEACHER.ATTENDANCE,
    ROUTES.TEACHER.GRADING,
    ROUTES.TEACHER.SCHEDULE,
    ROUTES.TEACHER.MESSAGES,
    ROUTES.TEACHER.MILESTONES,
    ROUTES.TEACHER.PROFILE,
    ROUTES.LIBRARY.HOME,
    ROUTES.LIBRARY.SEARCH,
  ],
  staff: [
    ROUTES.STAFF.DASHBOARD,
    ROUTES.STAFF.STUDENTS,
    ROUTES.STAFF.SCHEDULE_MANAGEMENT,
    ROUTES.STAFF.ROOM_MANAGEMENT,
    ROUTES.STAFF.REPORTS,
    ROUTES.STAFF.ANNOUNCEMENTS,
    ROUTES.STAFF.ASSIGNMENTS,
    ROUTES.STAFF.PROFILE,
    ROUTES.LIBRARY.HOME,
  ],
  admin: [
    ROUTES.ADMIN.DASHBOARD,
    ROUTES.ADMIN.USER_MANAGEMENT,
    ROUTES.ADMIN.SYSTEM_SETTINGS,
    ROUTES.ADMIN.REPORTS,
    ROUTES.ADMIN.LOGS,
    ROUTES.ADMIN.CMS,
  ],
  parent: [
    ROUTES.PARENT.DASHBOARD,
    ROUTES.PARENT.STUDENT_PROGRESS,
    ROUTES.PARENT.ATTENDANCE,
    ROUTES.PARENT.GRADES,
    ROUTES.PARENT.COMMUNICATIONS,
    ROUTES.PARENT.CONTACT_ADMIN,
    ROUTES.PARENT.PROFILE,
  ],
};

// Public routes (no authentication required)
export const PUBLIC_ROUTES = [
  ROUTES.AUTH.LOGIN,
  ROUTES.AUTH.REGISTER,
  ROUTES.AUTH.FORGOT_PASSWORD,
  ROUTES.AUTH.RESET_PASSWORD,
  ROUTES.ERROR.NOT_FOUND,
  ROUTES.ERROR.UNAUTHORIZED,
  ROUTES.ERROR.FORBIDDEN,
  ROUTES.ERROR.SERVER_ERROR,
];