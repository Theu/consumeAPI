import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  loadTodos,
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

  render() {
    const {
      todos,
      isLoading,
      hasLoaded
    } = this.props;

    const resultStringify = JSON.stringify(Object.entries(todos.todos));
    const preparedTodos = JSON.parse(resultStringify)
                              .map(([key, value]) => {
                                  return [value.doc.title, value.id]
                              });
    const placeholder = 'add a todo';

    if(isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
            <p>Loading...</p>
        </div>
      )
    } else if (!isLoading && !hasLoaded) {
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
             {preparedTodos.map(([todo, id]) => {
              return (
                <li key={id}>
                  {todo}
                </li>
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
            placeholder={placeholder}
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
      hasLoaded: selectorFailedLoad(state)
  };
}

const mapDispatchToProps = {
      loadTodos,
      storeNewTodo
  }



export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
