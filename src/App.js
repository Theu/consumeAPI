import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  getTodo,
  getFetchTodos,
  getFailedLoad
} from './actions/selectors';

import {
  todosLoad,
  todoLoadStart,
  todoAdd,
  todoRemove
} from './actions/todoActions';

import './App.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: ''
    }
  }

  static propTypes = {
    addTodo: PropTypes.func,
    todosLoad: PropTypes.func
  }

  componentDidMount() {
    this.props.todoLoadStart();
    this.props.todosLoad();
  }


  render() {
    const {
      todos,
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
          <ul>
            {todos.todos.map((key, value, id) => {
              return (
                <div
                  key={value}>
                  <li>
                    {key.title}
                  </li>
                  <input
                    type='submit'
                    value='delete todo'
                    onClick={() => this.deleteTodo(key.id)} />
                </div>
              )
            })}
          </ul>
          <input
            type='text'
            placeholder={placeholder}
            onChange={this.onTitleChange} />
          <input
            type='submit'
            value='add todo'
            onClick={this.addTodo} />
        </div>
      )
    }

  }

  onTitleChange = (event) => {
    const title = event.target.value;
    this.setState({title}) // rem {title:title} --> remeber reference of an object, here you have the string
  }

  addTodo = () => {
    const title = this.state.title;
    this.props.todoAdd({title});
  }

  deleteTodo = (todoId) => {
    console.log('todoId', todoId);
    this.props.todoRemove(todoId);
    this.props.todosLoad();
  }
}


function mapStateToProps(state, ownProps) {
  return {
      todos: getTodo(state),
      isLoading: getFetchTodos(state),
      canLoad: getFailedLoad(state)
  };
}

const mapDispatchToProps = {
      todoLoadStart,
      todosLoad,
      todoAdd,
      todoRemove
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
