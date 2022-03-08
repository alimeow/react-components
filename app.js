
// Refactor GroceryListItem to be a class component
class GroceryListItem extends React.Component {   //what's this React.component?
  //consgructor pass in props
  constructor(props){
    super(props);

    this.state = {
      done: false
    };
  }


  //function(or property seemingly) of the class
  onGoroceryItemHoover() {
    //setState expression... curly brackets inside brackets to use JS?
    this.setState({
      done: !this.state.done
    });
  }


  render() {

    var liStyle = {
      //when mouse leave it's still bold? ***
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return(
      <li style={liStyle} onMouseOver={this.onGoroceryItemHoover.bind(this)}>{this.props.groceryItem}</li>
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
