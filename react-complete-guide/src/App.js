import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I´m a React App</h1>
        <p>This is really working!</p>
        <Person name="David" age="21" />
        <Person name="Karen" age="23">MyHobbies: Work</Person>
        <Person name="Caro" age="16" />
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, "does this work now"));
  }
}

export default App;
