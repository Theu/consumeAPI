import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  loadTodos,
  startLoad,
  storeNewTodo,
  todoRemove,
  selectorGetTodo,
  selectorIsFetching,
  selectorFailedLoad
} from './actions/todoActions';

import './ShowTodos.css';

class ShowTodos extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: ''
    }
  }

  static propTypes = {
    addTodo: PropTypes.func,
    loadTodos: PropTypes.func
  }

  componentWillMount() {
    this.props.startLoad();
    this.props.loadTodos();
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
      console.log('client', todos.todos);
      return (
        <div>
          <h1>Todo's List</h1>
          <ul>
            commento
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
    this.props.storeNewTodo({title})
  }

  deleteTodo = (todoId) => {
    this.props.todoRemove(todoId);
  }
}


function mapStateToProps(state, ownProps) {
  return {
      todos: selectorGetTodo(state),
      isLoading: selectorIsFetching(state),
      canLoad: selectorFailedLoad(state)
  };
}

const mapDispatchToProps = {
      startLoad,
      loadTodos,
      storeNewTodo,
      todoRemove
  }



export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
