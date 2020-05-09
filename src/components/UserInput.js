import React, { useState } from 'react';


const App = (props) => {

  const [inputValue, inputValueSet] = useState(0);
    
    
    return(
        <div>
            <input type="text" 
            onChange={props.changeParagraphs}
            value={props.currentName}
            />
            <button onClick={props.pushNames}>Add Me</button>
        </div>
    )
}

export default App;