'use client';

import { Outlet } from 'react-router-dom';

export default function StudentTemplate() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Student Portal</h1>
              <p className="text-xs text-gray-500">Greenwich University</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}