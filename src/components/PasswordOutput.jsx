import React from 'react';


const App = ({good})=>{
    {console.log(good)}
    return(
        
        <div>
            {good?
            <p>Text Long Enough</p>:<p>Text Too Short</p>}
        </div>
    )
}

export default App;