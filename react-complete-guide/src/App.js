import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "David", age : 21},
      {name: "Karen", age : 23},
      {name: "Caro", age : 16}
    ],
    otherState: "Some other value"
  };

  switchNameHandler = () => {
    //console.log("Button Was Clicked");
    // DO NOT DO THIS: this.state.persons[0].name = "Deivis";
    this.setState({
      persons: [
      {name: "Deivis", age : 21},
      {name: "Karen", age : 23},
      {name: "Caro", age : 15}
    ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I´m a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>MyHobbies: Work</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, "does this work now"));
  }
}

export default App;
