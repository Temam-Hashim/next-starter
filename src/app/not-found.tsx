import React from 'react'

function NotFound() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen shadow-md">
        <h1 className="font-bold text-red-500 p-2 text-xl">Not Found | 404</h1>
        <p>The page you are looking for is not found</p>
      </div>

    
    </>
  );
}

export default NotFound;
