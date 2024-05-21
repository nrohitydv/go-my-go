import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900">About</h3>
          <p className="text-gray-600 mt-2">Hey, I am John</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
