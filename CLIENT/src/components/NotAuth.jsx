import React from 'react';

export const NotAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-4xl font-bold mb-2">Not Authorized</h1>
      <p className="text-lg">You do not have permission to view this page.</p>
    </div>
  );
};


