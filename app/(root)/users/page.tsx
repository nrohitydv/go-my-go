import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Users
        </h2>
        <ul className="mt-8 space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
