import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent';
import Char from './CharComponent';

class App extends Component {

state = {
  inputLength: null,
  inputText: null
}

changeHandler = (event) => {
   const inputLength=event.target.value.length;
   const inputText=event.target.value;
  this.setState({
    inputLength:inputLength,
    inputText:inputText
  })
}

  deleteHandler = (event,chara) => {
    const txtArray = this.state.inputText.split('');
    const charIndex = txtArray.findIndex(ch => {return ch===chara ;});
  txtArray.splice(charIndex,1);
  this.setState({
    inputLength:txtArray.length,
    inputText:txtArray.join('')
  })
}
  render() {

    const style = {
      display: 'inline-block',
      padding: '16px', 
      textAlign: 'center',
      margin: '16px', 
      border: '1px solid black'
    }
    let char = null;
    if(this.state.inputLength) {
    const textArray=this.state.inputText.split('');
    char =  (<ul> {textArray.map((character,index)=> {
      return <li> <Char inputStyle = {style} inputCharacter= {character} key = {character} 
      handleClick ={(event,index) => {this.deleteHandler(event,character)}}> </Char> </li>
    }) }
  </ul> );
  }

    return (
      <div className="App">
       <input onChange= {this.changeHandler} value = {this.state.inputText} ></input>
       <Validation txtLength={this.state.inputLength}></Validation>
       {char}
      </div>
    );
  }
}

export default App;

