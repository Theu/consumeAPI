import React from 'react';
import {connect} from 'react-redux';
import {
  getFetchTodos,
  getFailedLoad
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
    const {
      isLoading,
      canLoad
    } = this.props;

    const placeholder = 'add a todo';

    if(isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
            <p>Loading...</p>
        </div>
      )
    } else if (!canLoad) {
      return (
        <div>
          <h1>Todo's List</h1>
          <p>The server can't answer, check if it is running</p>
          <h6>net::ERR_CONNECTION_REFUSED</h6>
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
    this.props.todoRemove(event.target.id);
  }
}


function mapStateToProps(state, ownProps) {
  return {
      isLoading: getFetchTodos(state),
      canLoad: getFailedLoad(state),
  };
}

const mapDispatchToProps = {
      todoLoadStart,
      todosLoad,
      todoAdd,
      todoRemove
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
