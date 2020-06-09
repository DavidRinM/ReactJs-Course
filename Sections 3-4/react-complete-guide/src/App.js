import React, { Component, useState } from "react";
import "./App.css";
import Person from './Person/Person';
import person from "./Person/Person";

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
        { name: 'David', age: 21 },
        { name: 'Karen', age: 23 },
        { name: 'Caro', age: 16 }
      ],
      otherState: 'some other value',
      showPersons: false
    };

    nameChangedHandler = event => {
      this.setState({
        persons: [
          { name: "David", age: 21 },
          { name: event.target.value, age: 23 },
          { name: 'Carito', age: 15 }
        ]
      });
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow}); //Changes True -> False; False -> True
    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice(); Copy the persons array
      const persons = [...this.state.persons]; //Copy array
      persons.splice(personIndex, 1);

      this.setState({persons: persons});
    }
  
    render() {

      const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
      }

      let persons = null;

      if(this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => { //Map Persons object for cleaner code
              return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} />
            })}

          </div>
        );
      }

      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
          style= {style} 
          onClick={() => this.togglePersonsHandler()}>Switch Name</button>
          {persons}
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
  }

export default App;
