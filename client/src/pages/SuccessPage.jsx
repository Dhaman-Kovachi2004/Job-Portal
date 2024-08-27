// src/pages/SuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Success!</h1>
      <p className="text-lg mb-4">Your signup was successful. Thank you for applying!</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
