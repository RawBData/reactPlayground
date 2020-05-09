import React from 'react';


const App = ({passwordCheck, currentPW}) => {

    console.log("in passwordinput")
    
    return(
        <div>
            <input type="text" 
            onChange={passwordCheck}
            value={currentPW}
            />
        </div>
    )
}

export default App;