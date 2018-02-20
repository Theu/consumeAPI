import React from 'react';
import {connect} from 'react-redux';

import {
  getTodos,
  isLoading,

  hasError,
  getError
  
} from './redux/actions/selectors';

import {loadTodos} from './redux/actions/actionsCreators';

import TodoList from './components/TodoList';
import Loadingmessage from './components/LoadingMessage';
import ErrorHandler from './components/ErrorHandler';

class App extends React.Component {

  componentWillMount() {
    this.props.loadTodos();
  }

  render() {
    const {
      todos,
      isLoading,

      error,
      isError
    } = this.props;

    return (
        <div>
          <h1>Todo's List</h1>
          {isError &&
            <ErrorHandler
            faillureReason={error[0]} />
          }
          {isLoading ?
            <Loadingmessage
              message={'Loading'} />
          :  
            <TodoList
            todos={todos}
            todoRemove={() => this.deleteTodo}
            valueButton={'delete to do'} />
          }
        </div>
      );
    }
}


function mapStateToProps(state) {
  return {
    isLoading: isLoading(state),
    todos: getTodos(state),

    isError: hasError(state),
    error: getError(state)
  }
};

const mapDispatchToProps = {
  loadTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
