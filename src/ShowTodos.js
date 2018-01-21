import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { 
  loadTodos,
  selectorGetTodo,
  selectorIsFetching 
} from './actions/todoActions';

import './ShowTodos.css';

class ShowTodos extends React.Component {

  static propTypes = {
    todos: PropTypes.object,
    isFetched: PropTypes.bool,
    fetchTodo: PropTypes.func
  }
  
  componentWillMount() {
    this.props.loadTodos();
  }


  render() {
    const {
      todos,
      isFetching
    } = this.props;

    if(!isFetching) {
      return <p>Loading...</p>
    } else if (isFetching) {
      const resultStringify = JSON.stringify(todos.todos) 
      const preparedTodos = JSON.parse(resultStringify).map(([key, value]) => {
        return [value.doc.title, value.id]
      })
      
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
        </div>
      )
    }
    
  }    
}


function mapStateToProps(state, ownProps) {
  return {
      todos: selectorGetTodo(state),
      isFetching: selectorIsFetching(state.todos)
  };
}


export default connect(mapStateToProps, {loadTodos})(ShowTodos);
