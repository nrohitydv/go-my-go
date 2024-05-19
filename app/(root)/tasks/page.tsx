import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
}

const TasksPage: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Task One",
      description: "This is the first task description.",
    },
    {
      id: 2,
      title: "Task Two",
      description: "This is the second task description.",
    },
    {
      id: 3,
      title: "Task Three",
      description: "This is the third task description.",
    },
    {
      id: 4,
      title: "Task Four",
      description: "This is the fourth task description.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Tasks
        </h2>
        <ul className="mt-8 space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">
                {task.title}
              </h3>
              <p className="text-gray-600">{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
