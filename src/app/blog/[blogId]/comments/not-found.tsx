import React from 'react'

function notFound() {
  return (
    <div className="h-100 flex flex-col justify-center items-center h-screen shadow-md">
      <h1 className='font-bold text-red-500 p-2 text-xl'>Not Found | 404</h1>
      <p>The Comment you are looking for is not found</p>
    </div>
  )
}

export default notFound