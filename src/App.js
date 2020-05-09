import React from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import PasswordInput from "./components/PasswordInput";
import PasswordOutput from "./components/PasswordOutput";
import CharDisplay from "./components/CharDisplay";

//two new compoenents userInput and userOutput
//userInput holds an input and output holds two paragraph elements
//output multiple useroutput components

function App() {
  //Username Setup
  const [paragraphValues, paragraphValuesSet] = React.useState(
    {p1:"test",p2:"testing"})

  const changeParagraphs = (event) => {
    // console.log("Event: ", event.target.value)
    paragraphValuesSet(Object.assign({},paragraphValues,{p1:event.target.value}))
  }

  const pushNames = (event) => {
    // console.log("Event: ", event.target.value)
    paragraphValuesSet(Object.assign({},{p1:" ",p2:paragraphValues["p1"]}))
  }

  //password setup
  const [password,passwordChange] = React.useState("")

  const passwordCheck = (event) => {
    console.log("password check")
    passwordChange(event.target.value);
  }

  const charDelete = (idx) => {
    console.log("Event: ", idx)
    const newPW = password.split("")
    newPW.splice(idx,1);
    passwordChange(newPW.join(""))
  }

  return (
    <StyleRoot>
    <div className="App">
        <UserInput
          changeParagraphs={changeParagraphs}
          currentName={paragraphValues["p1"]}
          pushNames={pushNames} 
        />
        <UserOutput 
          paragraphs={paragraphValues}    
        />
        <PasswordInput
          passwordCheck={passwordCheck}
          currentPW={password}
        />
        <PasswordOutput 
          good={password.length>5}
        />
        <CharDisplay 
          charDelete={charDelete}
          currentPW={password}
        />
    </div>
    </StyleRoot>

  );
}


export default App;
