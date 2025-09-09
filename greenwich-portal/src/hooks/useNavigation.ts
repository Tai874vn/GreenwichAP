'use client';

import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { ROUTES, generateRoute } from '@/constants/routes';

export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  const goTo = (path: string, options?: { replace?: boolean; state?: any }) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  const goToDashboard = () => {
    if (!user) {
      navigate(ROUTES.AUTH.LOGIN);
      return;
    }

    switch (user.role) {
      case 'student':
        navigate(ROUTES.STUDENT.DASHBOARD);
        break;
      case 'teacher':
        navigate(ROUTES.TEACHER.DASHBOARD);
        break;
      case 'staff':
        navigate(ROUTES.STAFF.DASHBOARD);
        break;
      case 'admin':
        navigate(ROUTES.ADMIN.DASHBOARD);
        break;
      case 'parent':
        navigate(ROUTES.PARENT.DASHBOARD);
        break;
      default:
        navigate(ROUTES.DASHBOARD);
    }
  };

  const goToProfile = () => {
    if (!user) return;

    switch (user.role) {
      case 'student':
        navigate(ROUTES.STUDENT.PROFILE);
        break;
      case 'teacher':
        navigate(ROUTES.TEACHER.PROFILE);
        break;
      case 'staff':
        navigate(ROUTES.STAFF.PROFILE);
        break;
      case 'parent':
        navigate(ROUTES.PARENT.PROFILE);
        break;
      default:
        navigate(ROUTES.PROFILE);
    }
  };

  const isCurrentRoute = (path: string) => {
    return location.pathname === path;
  };

  const isActiveRoute = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const getCurrentRoute = () => {
    return location.pathname;
  };

  const getRouteParams = () => {
    return location.state;
  };

  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  // Helper functions for common navigations
  const navigations = {
    // Auth
    login: () => goTo(ROUTES.AUTH.LOGIN),
    register: () => goTo(ROUTES.AUTH.REGISTER),
    forgotPassword: () => goTo(ROUTES.AUTH.FORGOT_PASSWORD),
    
    // Common
    notifications: () => goTo(ROUTES.NOTIFICATIONS),
    
    // Student
    studentDashboard: () => goTo(ROUTES.STUDENT.DASHBOARD),
    studentSchedule: () => goTo(ROUTES.STUDENT.SCHEDULE),
    studentGrades: () => goTo(ROUTES.STUDENT.GRADES),
    studentAttendance: () => goTo(ROUTES.STUDENT.ATTENDANCE),
    studentLibrary: () => goTo(ROUTES.STUDENT.LIBRARY),
    studentRoomBooking: () => goTo(ROUTES.STUDENT.ROOM_BOOKING),
    studentWallet: () => goTo(ROUTES.STUDENT.WALLET),
    
    // Teacher
    teacherDashboard: () => goTo(ROUTES.TEACHER.DASHBOARD),
    teacherClasses: () => goTo(ROUTES.TEACHER.CLASSES),
    teacherAttendance: () => goTo(ROUTES.TEACHER.ATTENDANCE),
    teacherGrading: () => goTo(ROUTES.TEACHER.GRADING),
    
    // Staff
    staffDashboard: () => goTo(ROUTES.STAFF.DASHBOARD),
    staffStudents: () => goTo(ROUTES.STAFF.STUDENTS),
    staffReports: () => goTo(ROUTES.STAFF.REPORTS),
    
    // Admin
    adminDashboard: () => goTo(ROUTES.ADMIN.DASHBOARD),
    adminUsers: () => goTo(ROUTES.ADMIN.USER_MANAGEMENT),
    adminSettings: () => goTo(ROUTES.ADMIN.SYSTEM_SETTINGS),
    
    // Parent
    parentDashboard: () => goTo(ROUTES.PARENT.DASHBOARD),
    parentProgress: () => goTo(ROUTES.PARENT.STUDENT_PROGRESS),
    
    // Library
    library: () => goTo(ROUTES.LIBRARY.HOME),
    librarySearch: () => goTo(ROUTES.LIBRARY.SEARCH),
    bookDetails: (id: string) => goTo(generateRoute.bookDetails(id)),
    
    // Dynamic routes
    userDetail: (id: string) => goTo(generateRoute.userDetail(id)),
    studentDetail: (id: string) => goTo(generateRoute.studentDetail(id)),
    classDetail: (id: string) => goTo(generateRoute.classDetail(id)),
  };

  return {
    // Basic navigation
    goTo,
    goBack,
    goForward,
    goToDashboard,
    goToProfile,
    
    // Route checking
    isCurrentRoute,
    isActiveRoute,
    getCurrentRoute,
    getRouteParams,
    getQueryParams,
    
    // Pre-defined navigations
    ...navigations,
    
    // Location and navigate hooks
    location,
    navigate,
  };
}