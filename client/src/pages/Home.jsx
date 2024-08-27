import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Job Portal</h1>
      <p className="text-lg mb-8">Find your next opportunity and take the next step in your career.</p>
      <Link 
        to="/signup" 
        className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Apply Now
      </Link>
    </div>
  );
}

export default Home;
