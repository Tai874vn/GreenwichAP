'use client';

import { Outlet } from 'react-router-dom';

export default function AuthTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/5">
      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-2/5 bg-gradient-to-br from-primary to-primary/80 flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">G</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">
                Greenwich Academic Portal
              </h1>
              <p className="text-primary-100">
                FPT Greenwich University
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="text-left space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Access your academic records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Manage your schedule and classes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Connect with your academic community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Track your academic progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Greenwich Portal
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                FPT Greenwich University
              </p>
            </div>

            {/* Auth Form Content */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              <Outlet />
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© 2024 FPT Greenwich University</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}