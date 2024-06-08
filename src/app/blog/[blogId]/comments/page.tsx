"use client"
import React from 'react'


const getRandom = (count:number) =>{
  return Math.floor(Math.random()*count);
}

function Comments() {
  const rand = getRandom(3);
  console.log(rand)
  if(rand===1){
    throw new Error('can not find comment Id');
  }
  return (
  
    <div>
        <h1>List of Comments</h1>
      <ul>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </ul>
    </div>
  );
}

export default Comments;
