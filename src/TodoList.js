import React, { Component } from 'react';
import './TodoList.css';
import TodoItems from './TodoItems';

class TodoList extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {
        items: []
      };
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    let itemArray = this.state.items;

    if(this._inputElement.value !== ''){
      itemArray.unshift({
        text : this._inputElement.value,
        key : Date.now()
      });

      this.setState({
        items : itemArray
      });

      this._inputElement.value = '';
      e.preventDefault();
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => (item.key !== key));
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder='Enter task'/>
            <button type='submit'>Add</button>
          </form>
        </div>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
