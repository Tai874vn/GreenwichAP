'use client';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store';
import { loginStart, loginSuccess, loginFailure } from '@/store/slices/authSlice';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  userType: z.enum(['student', 'teacher', 'staff', 'parent']),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userType: 'student',
    },
  });

  const userType = watch('userType');

  const onSubmit = async (data: LoginForm) => {
    try {
      dispatch(loginStart());
      
      // Mock successful login for demo
      const mockUser = {
        id: '1',
        email: data.email,
        name: 'John Doe',
        role: data.userType as any,
        studentId: data.userType === 'student' ? 'GCS12345' : undefined,
        campus: 'Ho Chi Minh City Campus',
      };
      
      const mockToken = 'mock-jwt-token-123';
      
      // Store token and user data
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      
      toast.success('Login successful!');
      
      // Redirect based on user role
      switch (mockUser.role) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'staff':
          navigate('/staff/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'parent':
          navigate('/parent/dashboard');
          break;
        default:
          navigate('/student/dashboard');
      }
    } catch (error: any) {
      const errorMessage = 'Login failed. Please try again.';
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your Greenwich account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* User Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'student', label: 'Student' },
              { value: 'teacher', label: 'Teacher' },
              { value: 'staff', label: 'Staff' },
              { value: 'parent', label: 'Parent' },
            ].map((type) => (
              <label
                key={type.value}
                className={`
                  relative flex items-center justify-center px-4 py-3 border rounded-lg cursor-pointer transition-all
                  ${userType === type.value
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-gray-300 hover:border-primary/50'
                  }
                `}
              >
                <input
                  {...register('userType')}
                  type="radio"
                  value={type.value}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Demo credentials: any email + password (6+ chars)
      </div>
    </div>
  );
}