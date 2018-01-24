import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  loadTodos,
  startLoad,
  storeNewTodo,
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
    onClick: PropTypes.func,
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
    // const todoList = (todos.todos).map(([value]) => {return value})

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
      console.log('sopra', todos.todos);
      console.log('qui', (todos.todos).map((value) => value.title));
      return (
        <div>
          <h1>Todo's List</h1>
          <ul>
            {(todos.todos).map((key, value, id) => {
              return (
                <div key={value}>
                  <li>
                    {key.title}
                  </li>
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
            onClick={this.onClick} />
        </div>
      )
    }

  }

  onTitleChange = (event) => {
    const title = event.target.value;
    this.setState({title}) // rem {title:title} --> remeber reference of an object, here you have the string
  }

  onClick = () => {
    const title = this.state.title;
    this.props.storeNewTodo({title})
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
      storeNewTodo
  }



export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
