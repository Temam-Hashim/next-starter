import React from 'react'

function Card({children}:{children:React.ReactNode}) {
    const cardStyle ={
        padding:"100px",
        margin:"10px",
        boxShadow:"0 4px 8px 0px rgba(0,0,0,0.2)",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // width:"300px",
        // height:"300px",
        borderRadius:"10px",
    }
  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}

export default Card
