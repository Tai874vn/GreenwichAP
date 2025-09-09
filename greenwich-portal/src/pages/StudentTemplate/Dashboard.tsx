export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-2">Current GPA</h3>
          <p className="text-3xl font-bold text-primary">3.85</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-2">Classes Today</h3>
          <p className="text-3xl font-bold text-blue-600">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-2">Pending Tasks</h3>
          <p className="text-3xl font-bold text-orange-600">7</p>
        </div>
      </div>
    </div>
  );
}