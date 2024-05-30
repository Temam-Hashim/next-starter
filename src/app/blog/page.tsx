import React from "react";

function Blog({params}:{params:{blogId:string}}) {
  return (
    <div>
      <h1 className="text-center">Blog Page</h1>
      <ul>
        <li>
          <a href={"/blog/"}>Blog 1</a>
        </li>
        <li>
          <a href="/blog/">Blog 2</a>
        </li>
        <li>
          <a href="/blog/">Blog 3</a>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
