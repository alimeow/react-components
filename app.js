// import React from 'react';  //what's with this line? ***

//Right! The order matters. Before you want to use the component,
//you got to define it first.
//Create React components for the 2 items in your grocery list.
var Kale = () => (
  <li>Kale</li>
)
var Cucumbers = () => (
  <li>Cucumbers</li>
)

//Create a reusable GroceryListItem component that dynamically renders a given grocery item.    ***??? what is dynamically render ???***
// what is it asking us to do ???
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
  )

  // Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component
  var GroceryList = () => (   //what para to take in ?
    <div>
      {/* if add below line to <ul> element the page will show empty circle instead of black dot. Why??? */}
      <GroceryListItem groceryItems={['apple', 'pineapple', 'kiwi']}/>
    </div>
  );

// //create a GroceryList component that contains an unordered list of 2 grocery items.
// var GroceryList = () => (   //what para to take in ?
//   <div>
//     <ul>
//     {/* <Kale />
//     <Cucumbers /> */}

//     </ul>
//   </div>
// );







//---------------------------------------------------------
// example component:
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     {/* <TodoList />   not yet defined */}
//   </div>
// );

// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     {/* // Here we are creating an instance of the `TodoList` component */}
//     {/* so todos = {} , and [...] in {} will be props? since we can assess items by index number  */}
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//   </div>
// );
//---------------------------------------------------------



//Render this component to the div tag in index.html with an id of app
ReactDOM.render(<GroceryList />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));


//Use these two new components inside your GroceryList component instead of the hardcoded <li>s












// ------------------- ----------------------- ---------------------
// import React from 'react';

// import ReactDOM from 'react-dom';
// import './styles/reset.css';
// import './styles/style.css';
// import { create, readAll } from './helpers/api';

// const App = () => {
//   return (<h1>Chatterbox</h1>);
// }

// // same as: const App = () => (<h1>Chatterbox</h1>)

// ReactDOM.render(<App />, document.getElementById('root'));  // (what we want to render, component render into)


// // TODO
// //create component
// //render it to the page

// // var App = () => (
// //   <div>Some cliche salutation</div>
// // );

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList />
//   </div>
// );

// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );


