
// Refactor GroceryListItem to be a class component
class GroceryListItem extends React.Component {   //what's this React.component?
  //consgructor pass in props
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li>{this.props.groceryItem}</li>
    );
  }
}

var itemList = ['Apple', 'Banana', 'Tomato'];

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => <GroceryListItem groceryItem={groceryItem} />)}
  </ul>
);


//Render this component to the div tag in index.html with an id of app
// how do I add a title? like <h2>?
ReactDOM.render(<GroceryList groceryItems={itemList}/>, document.getElementById('app'));


