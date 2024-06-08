import { notFound } from "next/navigation";
import React from "react";

function BlogComment({
  params,
}: {
  params: {
    blogId: string;
    commentId: string;
  };
}) {
  if (parseInt(params.commentId) > 1000) {
    notFound();
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black border border-white">
      <div className="flex flex-col bg-gray-50 w-1/3 h-1/4 text-black p-2 justify-center items-center">
        <h1 className="p-3 font-bold text-xl">
          {" "}
          Comment {params.commentId} for Blog {params.blogId}
        
        </h1>
      </div>
    </div>
  );
}

export default BlogComment;
