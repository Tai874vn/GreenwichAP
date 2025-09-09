import { Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/routing/ProtectedRoute";

// Template Components
import AuthTemplate from "@/pages/AuthTemplate";
import StudentTemplate from "@/pages/StudentTemplate";
import TeacherTemplate from "@/pages/TeacherTemplate";
import StaffTemplate from "@/pages/StaffTemplate";
import AdminTemplate from "@/pages/AdminTemplate";
import ParentTemplate from "@/pages/ParentTemplate";
import LibraryTemplate from "@/pages/LibraryTemplate";

// Auth Pages
import LoginPage from "@/pages/AuthTemplate/LoginPage";
import RegisterPage from "@/pages/AuthTemplate/RegisterPage";
import ForgotPasswordPage from "@/pages/AuthTemplate/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/AuthTemplate/ResetPasswordPage";

// Student Pages
import StudentDashboard from "@/pages/StudentTemplate/Dashboard";
import StudentSchedule from "@/pages/StudentTemplate/Schedule";
import StudentGrades from "@/pages/StudentTemplate/Grades";
import StudentAttendance from "@/pages/StudentTemplate/Attendance";
import StudentLibrary from "@/pages/StudentTemplate/Library";
import StudentRoomBooking from "@/pages/StudentTemplate/RoomBooking";
import StudentWallet from "@/pages/StudentTemplate/Wallet";
import StudentDocuments from "@/pages/StudentTemplate/Documents";
import StudentFeedback from "@/pages/StudentTemplate/Feedback";
import StudentProfile from "@/pages/StudentTemplate/Profile";

// Teacher Pages
import TeacherDashboard from "@/pages/TeacherTemplate/Dashboard";
import TeacherClasses from "@/pages/TeacherTemplate/Classes";
import TeacherAttendance from "@/pages/TeacherTemplate/Attendance";
import TeacherGrading from "@/pages/TeacherTemplate/Grading";
import TeacherSchedule from "@/pages/TeacherTemplate/Schedule";
import TeacherMessages from "@/pages/TeacherTemplate/Messages";
import TeacherMilestones from "@/pages/TeacherTemplate/Milestones";
import TeacherProfile from "@/pages/TeacherTemplate/Profile";

// Staff Pages
import StaffDashboard from "@/pages/StaffTemplate/Dashboard";
import StaffStudents from "@/pages/StaffTemplate/Students";
import StaffScheduleManagement from "@/pages/StaffTemplate/ScheduleManagement";
import StaffRoomManagement from "@/pages/StaffTemplate/RoomManagement";
import StaffReports from "@/pages/StaffTemplate/Reports";
import StaffAnnouncements from "@/pages/StaffTemplate/Announcements";
import StaffAssignments from "@/pages/StaffTemplate/Assignments";
import StaffProfile from "@/pages/StaffTemplate/Profile";

// Admin Pages
import AdminDashboard from "@/pages/AdminTemplate/Dashboard";
import AdminUserManagement from "@/pages/AdminTemplate/UserManagement";
import AdminAddUser from "@/pages/AdminTemplate/UserManagement/AddUser";
import AdminEditUser from "@/pages/AdminTemplate/UserManagement/EditUser";
import AdminSystemSettings from "@/pages/AdminTemplate/SystemSettings";
import AdminReports from "@/pages/AdminTemplate/Reports";
import AdminLogs from "@/pages/AdminTemplate/Logs";
import AdminProfile from "@/pages/AdminTemplate/Profile";
import AdminAuthPage from "@/pages/AdminTemplate/AuthPage";

// Parent Pages
import ParentDashboard from "@/pages/ParentTemplate/Dashboard";
import ParentStudentProgress from "@/pages/ParentTemplate/StudentProgress";
import ParentAttendance from "@/pages/ParentTemplate/Attendance";
import ParentGrades from "@/pages/ParentTemplate/Grades";
import ParentCommunications from "@/pages/ParentTemplate/Communications";
import ParentContactAdmin from "@/pages/ParentTemplate/ContactAdmin";
import ParentProfile from "@/pages/ParentTemplate/Profile";

// Library Pages
import LibraryHome from "@/pages/LibraryTemplate/Home";
import LibrarySearch from "@/pages/LibraryTemplate/Search";
import LibraryBookDetails from "@/pages/LibraryTemplate/BookDetails";
import LibraryAcademicBooks from "@/pages/LibraryTemplate/AcademicBooks";
import LibraryBorrowedBooks from "@/pages/LibraryTemplate/BorrowedBooks";

// Common Pages
import NotificationsPage from "@/pages/Common/NotificationsPage";

// Error Pages
import NotFoundPage from "@/pages/Errors/NotFoundPage";
import UnauthorizedPage from "@/pages/Errors/UnauthorizedPage";
import ForbiddenPage from "@/pages/Errors/ForbiddenPage";
import ServerErrorPage from "@/pages/Errors/ServerErrorPage";

export const routes = [
  {
    path: "auth",
    element: AuthTemplate,
    nested: [
      {
        path: "login",
        element: LoginPage,
      },
      {
        path: "register", 
        element: RegisterPage,
      },
      {
        path: "forgot-password",
        element: ForgotPasswordPage,
      },
      {
        path: "reset-password",
        element: ResetPasswordPage,
      },
    ],
  },

  {
    path: "student",
    element: StudentTemplate,
    protected: true,
    requiredRole: "student",
    nested: [
      {
        path: "",
        element: StudentDashboard,
      },
      {
        path: "dashboard",
        element: StudentDashboard,
      },
      {
        path: "schedule",
        element: StudentSchedule,
      },
      {
        path: "grades",
        element: StudentGrades,
      },
      {
        path: "attendance",
        element: StudentAttendance,
      },
      {
        path: "library",
        element: StudentLibrary,
      },
      {
        path: "room-booking",
        element: StudentRoomBooking,
      },
      {
        path: "wallet",
        element: StudentWallet,
      },
      {
        path: "documents",
        element: StudentDocuments,
      },
      {
        path: "feedback",
        element: StudentFeedback,
      },
      {
        path: "profile",
        element: StudentProfile,
      },
    ],
  },

  {
    path: "teacher",
    element: TeacherTemplate,
    protected: true,
    requiredRole: "teacher",
    nested: [
      {
        path: "",
        element: TeacherDashboard,
      },
      {
        path: "dashboard",
        element: TeacherDashboard,
      },
      {
        path: "classes",
        element: TeacherClasses,
      },
      {
        path: "classes/:id",
        element: TeacherClasses,
      },
      {
        path: "attendance",
        element: TeacherAttendance,
      },
      {
        path: "grading",
        element: TeacherGrading,
      },
      {
        path: "schedule",
        element: TeacherSchedule,
      },
      {
        path: "messages",
        element: TeacherMessages,
      },
      {
        path: "milestones",
        element: TeacherMilestones,
      },
      {
        path: "profile",
        element: TeacherProfile,
      },
    ],
  },

  {
    path: "staff",
    element: StaffTemplate,
    protected: true,
    requiredRole: "staff",
    nested: [
      {
        path: "",
        element: StaffDashboard,
      },
      {
        path: "dashboard",
        element: StaffDashboard,
      },
      {
        path: "students",
        element: StaffStudents,
      },
      {
        path: "students/:id",
        element: StaffStudents,
      },
      {
        path: "schedule-management",
        element: StaffScheduleManagement,
      },
      {
        path: "rooms",
        element: StaffRoomManagement,
      },
      {
        path: "reports",
        element: StaffReports,
      },
      {
        path: "announcements",
        element: StaffAnnouncements,
      },
      {
        path: "assignments",
        element: StaffAssignments,
      },
      {
        path: "profile",
        element: StaffProfile,
      },
    ],
  },

  {
    path: "admin",
    element: AdminTemplate,
    protected: true,
    requiredRole: "admin",
    nested: [
      {
        path: "",
        element: AdminDashboard,
      },
      {
        path: "dashboard",
        element: AdminDashboard,
      },
      {
        path: "users",
        element: AdminUserManagement,
      },
      {
        path: "users/add",
        element: AdminAddUser,
      },
      {
        path: "users/edit/:id",
        element: AdminEditUser,
      },
      {
        path: "settings",
        element: AdminSystemSettings,
      },
      {
        path: "reports",
        element: AdminReports,
      },
      {
        path: "logs",
        element: AdminLogs,
      },
      {
        path: "profile",
        element: AdminProfile,
      },
    ],
  },

  {
    path: "parent",
    element: ParentTemplate,
    protected: true,
    requiredRole: "parent",
    nested: [
      {
        path: "",
        element: ParentDashboard,
      },
      {
        path: "dashboard",
        element: ParentDashboard,
      },
      {
        path: "student-progress",
        element: ParentStudentProgress,
      },
      {
        path: "attendance",
        element: ParentAttendance,
      },
      {
        path: "grades",
        element: ParentGrades,
      },
      {
        path: "communications",
        element: ParentCommunications,
      },
      {
        path: "contact-admin",
        element: ParentContactAdmin,
      },
      {
        path: "profile",
        element: ParentProfile,
      },
    ],
  },

  {
    path: "library",
    element: LibraryTemplate,
    protected: true,
    allowedRoles: ["student", "teacher", "staff"],
    nested: [
      {
        path: "",
        element: LibraryHome,
      },
      {
        path: "search",
        element: LibrarySearch,
      },
      {
        path: "book/:id",
        element: LibraryBookDetails,
      },
      {
        path: "academic-books",
        element: LibraryAcademicBooks,
      },
      {
        path: "borrowed-books",
        element: LibraryBorrowedBooks,
        requiredRole: "student",
      },
    ],
  },

  {
    path: "admin/auth",
    element: AdminAuthPage,
  },

  {
    path: "notifications",
    element: NotificationsPage,
    protected: true,
  },

  {
    path: "404",
    element: NotFoundPage,
  },
  {
    path: "401",
    element: UnauthorizedPage,
  },
  {
    path: "403",
    element: ForbiddenPage,
  },
  {
    path: "500",
    element: ServerErrorPage,
  },
];

export const generateRoutes = () => {
  return routes.map((route) => {
    const routeElement = route.protected ? (
      <ProtectedRoute 
        requiredRole={route.requiredRole}
        allowedRoles={route.allowedRoles}
      >
        <route.element />
      </ProtectedRoute>
    ) : (
      <route.element />
    );

    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={routeElement}>
          {route.nested.map((item) => {
            const nestedElement = item.protected || item.requiredRole || item.allowedRoles ? (
              <ProtectedRoute
                requiredRole={item.requiredRole}
                allowedRoles={item.allowedRoles}
              >
                <item.element />
              </ProtectedRoute>
            ) : (
              <item.element />
            );

            return (
              <Route
                key={item.path}
                path={item.path}
                element={nestedElement}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={routeElement} />
      );
    }
  });
};