import React from 'react'

function BlogLayout({children}:{
    children:{
        children:React.ReactNode;
    }
}) {
  return (
    <>
    {children}
    <h2 className='text-center text-info bg-blue p-2'>Blog Layout</h2>
      
    </>
  )
}

export default BlogLayout;
