import React from 'react'
import { Metadata } from 'next'

type Props = {
  params:{
    blogId:string
  };
};

export const generateMetadata = ({params}:Props):Metadata=>{

  // const title = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(`product ${params.blogId}`)
  //   }, 100)
  // })

  return {
    title: `Blog ${params.blogId}`,
  };
}



function BlogDetail({params}:Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black border border-white">
      <div className="flex flex-col bg-gray-50 w-1/3 h-1/4 text-black p-2 justify-center items-center">
        <h1 className="p-3 font-bold text-xl">
          Details of Blog {params.blogId}
        </h1>
      </div>
    </div>
  );
}

export default BlogDetail
