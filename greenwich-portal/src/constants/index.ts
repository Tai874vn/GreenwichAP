export const USER_ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  STAFF: 'staff',
  ADMIN: 'admin',
  PARENT: 'parent',
} as const;

export const CAMPUS_LOCATIONS = [
  'FPT Greenwich - Ho Chi Minh City',
  'FPT Greenwich - Ha Noi',
  'FPT Greenwich - Da Nang',
  'FPT Greenwich - Can Tho',
] as const;

export const NAVIGATION_ITEMS = {
  STUDENT: [
    { name: 'Dashboard', href: '/dashboard', icon: 'Home' },
    { name: 'Schedule', href: '/schedule', icon: 'Calendar' },
    { name: 'Grades', href: '/grades', icon: 'GraduationCap' },
    { name: 'Attendance', href: '/attendance', icon: 'CheckCircle' },
    { name: 'Library', href: '/library', icon: 'BookOpen' },
    { name: 'Room Booking', href: '/room-booking', icon: 'MapPin' },
    { name: 'Profile', href: '/profile', icon: 'User' },
  ],
  TEACHER: [
    { name: 'Dashboard', href: '/dashboard', icon: 'Home' },
    { name: 'Classes', href: '/classes', icon: 'Users' },
    { name: 'Attendance', href: '/attendance', icon: 'CheckCircle' },
    { name: 'Grading', href: '/grading', icon: 'FileText' },
    { name: 'Schedule', href: '/schedule', icon: 'Calendar' },
    { name: 'Messages', href: '/messages', icon: 'MessageCircle' },
    { name: 'Profile', href: '/profile', icon: 'User' },
  ],
  STAFF: [
    { name: 'Dashboard', href: '/dashboard', icon: 'Home' },
    { name: 'Students', href: '/students', icon: 'Users' },
    { name: 'Schedule Management', href: '/schedule-management', icon: 'Calendar' },
    { name: 'Room Management', href: '/rooms', icon: 'Building' },
    { name: 'Reports', href: '/reports', icon: 'BarChart3' },
    { name: 'Announcements', href: '/announcements', icon: 'Megaphone' },
  ],
  ADMIN: [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'Home' },
    { name: 'User Management', href: '/admin/users', icon: 'Users' },
    { name: 'System Settings', href: '/admin/settings', icon: 'Settings' },
    { name: 'Reports', href: '/admin/reports', icon: 'BarChart3' },
    { name: 'Logs', href: '/admin/logs', icon: 'FileText' },
  ],
  PARENT: [
    { name: 'Dashboard', href: '/dashboard', icon: 'Home' },
    { name: 'Student Progress', href: '/student-progress', icon: 'TrendingUp' },
    { name: 'Attendance', href: '/attendance', icon: 'CheckCircle' },
    { name: 'Grades', href: '/grades', icon: 'GraduationCap' },
    { name: 'Communications', href: '/communications', icon: 'MessageCircle' },
    { name: 'Profile', href: '/profile', icon: 'User' },
  ],
} as const;

export const TASK_TYPES = {
  ASSIGNMENT: 'assignment',
  PROJECT: 'project',
  EXAM: 'exam',
  PRESENTATION: 'presentation',
} as const;

export const TASK_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

export const TASK_STATUSES = {
  NEW: 'new',
  IN_PROGRESS: 'in-progress',
  SUBMITTED: 'submitted',
  GRADED: 'graded',
} as const;

export const ATTENDANCE_STATUSES = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LATE: 'late',
  NOT_MARKED: 'not-marked',
} as const;

export const CLASS_STATUSES = {
  SCHEDULED: 'scheduled',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export const ROOM_TYPES = {
  CLASSROOM: 'classroom',
  LAB: 'lab',
  LIBRARY: 'library',
  MEETING: 'meeting',
} as const;

export const TIME_SLOTS = [
  { slot: 1, time: '8:00 - 9:30' },
  { slot: 2, time: '9:45 - 11:15' },
  { slot: 3, time: '11:30 - 13:00' },
  { slot: 4, time: '13:45 - 15:15' },
  { slot: 5, time: '15:30 - 17:00' },
  { slot: 6, time: '17:15 - 18:45' },
  { slot: 7, time: '19:00 - 20:30' },
  { slot: 8, time: '20:45 - 22:15' },
] as const;

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const SEMESTER_OPTIONS = [
  { value: 'spring2024', label: 'Spring 2024' },
  { value: 'summer2024', label: 'Summer 2024' },
  { value: 'fall2024', label: 'Fall 2024' },
  { value: 'spring2025', label: 'Spring 2025' },
] as const;

export const THEME_OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
] as const;

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' },
] as const;