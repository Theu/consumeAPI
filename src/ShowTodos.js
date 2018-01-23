import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  loadTodos,
  selectorGetTodo,
  selectorIsFetching,
  storeNewTodo
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
    isFetched: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const {
      todos,
      isFetching
    } = this.props;
    if(!isFetching) {
      return <p>Loading...</p>
    } else if (isFetching) {
      const resultStringify = JSON.stringify(Object.entries(todos.todos));
      const preparedTodos = JSON.parse(resultStringify).map(([key, value]) => {
        return [value.doc.title, value.id]
      });
      const placeholder = 'add a todo';

      return (
        <div>
          <h1>Todos</h1>
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
      isFetching: selectorIsFetching(state)
  };
}

const mapDispatchToProps = {
      loadTodos,
      storeNewTodo
  }



export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
