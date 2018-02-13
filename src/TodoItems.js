import React , { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);
    // this.delete = this.delete.bind(this);

  }

  createTasks(item) {
    const { deleteItem } = this.props ;
    return <li onClick={() => deleteItem(item.key)} key={item.key}>{item.text}</li>;
    }

  // delete(key){
  //   this.props.delete(key);
  // }
  render() {
    const { items } = this.props;
    const listItems = items.map(this.createTasks);
    return (
      <ul className='theList'>
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
