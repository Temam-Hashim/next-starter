import React from "react";

function BlogComment({
  params,
}: {
  params: {
    blogId: string;
    commentId: string;
  };
}) {
    
  return (
    <div>
      Comment {params.commentId} for Blog {params.blogId}
    </div>
  );
}

export default BlogComment;
