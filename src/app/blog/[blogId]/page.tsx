import React from 'react'

function BlogDetail({params}:{
    params: {
      blogId: string
    }
  
}) {
  return (
    <div>
      <h1 className='text-center'>Detail of Blog {params.blogId} </h1>
    </div>
  )
}

export default BlogDetail
