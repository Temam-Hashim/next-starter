import React from 'react'

function Docs({params}:{
    params: {
      slug: string[]
    }
}) {
    if(params.slug?.length == 2){ 
        return (
          <div className="text-center p-24 font-bold">
            <h1>Docs of feature {params.slug[0]} and concept {params.slug[1]}</h1>
          </div>
        );
    }
     else if(params.slug?.length == 1){
            return (
              <div className="text-center p-24 font-bold">
                <h1>Docs of feature {params.slug[0]}</h1>
              </div>
            );
        }
        else{
             return (
             <div className="text-center p-24 font-bold">
               <h1>Docs Home Page</h1>
             </div>
             );
        }

    }

export default Docs;
