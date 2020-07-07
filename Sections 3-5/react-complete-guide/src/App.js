import React, { Component, useState } from "react";
import "./App.css";
import Radium from 'radium';
import Person from "./Person/Person";


// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name: "David", age : 21},
//       {name: "Karen", age : 23},
//       {name: "Caro", age : 16}
//     ]
//   });

//   const [otherState, setOtherState] = useState("Some other value");

//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//     //console.log("Button Was Clicked");
//     // DO NOT DO THIS: this.state.persons[0].name = "Deivis";
//     setPersonsState({
//       persons: [
//       {name: "Deivis", age : 21},
//       {name: "Karen", age : 23},
//       {name: "Caro", age : 15}
//     ]
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I´m a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>MyHobbies: Work</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
//     // return React.createElement('div', {className:"App"}, React.createElement('h1', null, "does this work now"));
// }

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "David", age: 21 },
      { id: "2", name: "Karen", age: 23 },
      { id: "3", name: "Caro", age: 16 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    //user id

    const personIndex = this.state.persons.findIndex((p) => {
      //Finds user Index in the array
      return p.id === id;
    });

    const person = {
      //Copies persons array and selects person based on index
      ...this.state.persons[personIndex],
    };

    //Old way
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value; //Sets person´s name based on value in text field

    const persons = [...this.state.persons];

    persons[personIndex] = person; //Updates persons state

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //Changes True -> False; False -> True
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); Copy the persons array
    const persons = [...this.state.persons]; //Copy array
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //Map Persons object for cleaner code
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";//change btn color dynamically
      style[':hover'] = { 
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); //classes = ["red"]
    }
    if(this.state.persons.length <=1){
      classes.push('bold');//classes = ["red", 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
