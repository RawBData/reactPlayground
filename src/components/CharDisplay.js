import React from 'react';
import Radium from 'radium';


const App = ({currentPW, charDelete}) => {

    const style = {
        backgroundColor:'red',
        color:'white',
        fontSize:15,
        cursor:'pointer',
        ':hover':{
            backgroundColor:'pink',
            color:'black'
        }
    }
    
    console.log(currentPW)
    return(
       <div>
           {currentPW.split("").map((char,idx)=>(
               <div key={idx} style={style} onClick={()=>charDelete(idx)}>
                    <h1>{char}</h1>
               </div>
           ))}
       </div>
    )
}

export default Radium(App);