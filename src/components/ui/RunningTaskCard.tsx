
const RunningTaskCard = () => {
  const totalTasks = 100;
  const completedTasks = 65;
  const remainingTasks = totalTasks - completedTasks;
  const progressPercentage = (remainingTasks/ totalTasks) * 100;

  return (
    <div className="bg-[#111] text-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-lg font-bold mb-4">Running Task</h2>
      <p className="text-2xl font-bold mb-3">{completedTasks}</p>

      <div className="flex justify-between items-center">
        {/* Left Side - Progress Circle */}
        <div className="relative flex items-center justify-center">
          <svg className="w-18 h-18 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-gray-700"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="40"
            />
            <circle
              className="text-blue-500"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="8"
              strokeDasharray="251.2" 
              strokeDashoffset={251.2 - (progressPercentage / 100) * 251.2}
              cx="50"
              cy="50"
              r="40"
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <span className="absolute text-lg font-semibold">{progressPercentage}%</span>
        </div>

        {/* Right Side - Task Count */}
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-400">
            <span className="text-white font-semibold mr-1">{totalTasks}</span>
            <span>Task</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningTaskCard;