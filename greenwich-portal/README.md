# Greenwich Academic Portal

A modern, responsive academic management system built for FPT Greenwich University. This portal provides comprehensive functionality for students, teachers, staff, parents, and administrators to manage academic activities, schedules, grades, and more.

## Features

### 🎓 Student Features
- **Dashboard**: Personalized overview with quick access to grades, attendance, and assignments
- **Schedule Management**: View daily classes, upcoming tasks, and deadlines
- **Grade Tracking**: Real-time access to grades, GPA, and academic performance
- **Attendance Monitoring**: Track attendance records and percentages
- **Library System**: Browse, search, and manage book borrowing
- **Room Booking**: Reserve study rooms and meeting spaces
- **Profile Management**: Update personal information and preferences

### 👨‍🏫 Teacher Features
- **Class Management**: Manage courses and student rosters
- **Attendance Tracking**: Mark and monitor student attendance
- **Grade Management**: Input grades and provide student feedback
- **Communication Tools**: Message students and parents
- **Schedule Management**: View teaching schedule and room assignments

### 👨‍💼 Staff Features
- **Student Management**: Oversee student records and academic progress
- **Schedule Coordination**: Manage timetables and room allocations
- **Report Generation**: Create academic and administrative reports
- **System Administration**: Handle user accounts and permissions

### 👨‍👩‍👧‍👦 Parent Features
- **Student Progress**: Monitor child's academic performance
- **Attendance Overview**: View attendance records and patterns
- **Communication**: Connect with teachers and school staff
- **Notifications**: Receive important updates and alerts

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI component library
- **Flowbite** - Additional UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### State Management
- **Redux Toolkit** - Predictable state container
- **Zustand** - Lightweight state management (for specific use cases)
- **React Query** - Server state management and caching

### Data Fetching
- **Axios** - HTTP client for API requests
- **TanStack Query** - Powerful data synchronization for React

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd greenwich-portal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── schedule/          # Schedule management
│   ├── library/           # Library system
│   └── admin/             # Admin panels
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── forms/            # Form components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── store/                # Redux store and slices
├── types/                # TypeScript type definitions
├── utils/                # Helper functions
├── constants/            # Application constants
├── services/             # API services
└── styles/               # Global styles
```

## API Integration

The application integrates with the Greenwich Academic API for:
- User authentication and authorization
- Student records and academic data
- Schedule and timetable information
- Library catalog and borrowing
- Room booking and availability
- Notifications and announcements

## Authentication

- JWT-based authentication
- Role-based access control
- Secure token management
- Session persistence

## Responsive Design

The portal is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Touch interfaces

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary to FPT Greenwich University.

## Support

For support and questions, please contact:
- Technical Support: support@greenwich.edu.vn
- Academic Support: academic@greenwich.edu.vn