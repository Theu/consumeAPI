import React from 'react';
import {connect} from 'react-redux';
import {
  getFetchTodos
} from './actions/selectors';

import {
  todosLoad,
  todoLoadStart,
  todoAdd,
  todoRemove
} from './actions/todoActions';

import TodoList from './components/TodoList';
import AdderField from './components/AdderField';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    this.props.todoLoadStart();
    this.props.todosLoad();
  }

  render() {
    const {isLoading} = this.props;

    const placeholder = 'add a todo';

    if(isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
            <p>Loading...</p>
        </div>
      )
    } else if (!isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
          <TodoList
            todoRemove={() => this.deleteTodo}
            valueButton={'delete to do'} />
          <AdderField
            placeholder={placeholder}
            onTitleChange={this.onTitleChange}
            addTodo={this.addTodo}
            ref={todoField => this.todoField = todoField} />
        </div>
      )
    } else {
      return null;
    }

  }

  onTitleChange = (event) => {
    event.preventDefault();
    const title = event.target.value;
    this.setState({title}) // rem {title:title} --> remeber reference of an object, here you have the string

  }

  addTodo = () => {
    const title = this.state.title;
    if (title.length > 0) {
      this.props.todoAdd({title});
    }
    this.todoField.clear();
  }

  deleteTodo = (event) => {
    const id = event.target.id
    this.props.todoRemove({id});
  }
}


function mapStateToProps(state, ownProps) {
  return {
      isLoading: getFetchTodos(state)
  };
}

const mapDispatchToProps = {
      todoLoadStart,
      todosLoad,
      todoAdd,
      todoRemove
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
