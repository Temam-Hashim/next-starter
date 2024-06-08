"use client"

import React from 'react'

function ErrorBoundary({error,reset}:{error:Error,reset:()=>void}) {
  return (
    <div className='p-2 bg-gray-100 flex justify-center items-center'>
      {error.message}
      <button onClick={reset} className='text-white-500 bg-blue-300 rounded-md p-2 ml-4'>Try Again</button>
    </div>
  )
}

export default ErrorBoundary;
