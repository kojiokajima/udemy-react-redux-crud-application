// import logo from './logo.svg';
// import React, {Component} from 'react';


// function App() {
//   return <h1>Hello World!</h1>
// }

// class App extends Component {
//   render() {
//     return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked")}} />;
//     </React.Fragment>

//     );
//   }
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
const Cat = () => {
  return <div>Meow!</div>
}


export default App;
