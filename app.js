const GroceryList = () => {
  return (
    <div>
    <ul>
      <GroceryListItems items={['Cucumber', 'Kale', 'Papaya', 'Carrot']}/>
    </ul>
    </div>
  )
}

const GroceryListItems = ({items}) => {
  return (
    <ul>
      {items.map((todo) => {
        return (
          <ToDoListItem todo ={todo}/>
        )
      })
      }
    </ul>
  );
}

const ToDoListItem = (props) => {
  const [isStriked, setIsStriked] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const style = {
    textDecoration: isStriked ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal'
  }
  return (
    <li style={style} onClick={
      () => setIsStriked(!isStriked)
    }
    onMouseEnter={
      () => setIsHovered(!isHovered)
    } onMouseLeave={
      () => setIsHovered(!isHovered)
    }>
    {props.todo}
    </li>
  )
}

ReactDOM.render(<GroceryList/>, document.getElementById('app'));