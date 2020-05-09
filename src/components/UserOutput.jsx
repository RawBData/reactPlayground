import React from 'react';


const App = ({paragraphs})=>{
    {console.log("user output rendered")}
    return(
        
        <div>
            {Object.keys(paragraphs).map((key)=>(
                <p>{paragraphs[`${key}`]}</p>
            ))}
        </div>
    )
}

export default App;