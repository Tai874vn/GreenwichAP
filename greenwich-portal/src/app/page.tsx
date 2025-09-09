export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/5 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">G</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Greenwich Academic Portal
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Welcome to FPT Greenwich University's comprehensive academic management system
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Ready to Get Started?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your routing system has been removed. You can now implement your own navigation structure.
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Technology Stack: Next.js 15, React 18, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query
          </div>
        </div>
      </div>
    </div>
  );
}