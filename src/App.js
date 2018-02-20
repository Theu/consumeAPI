import React from 'react';
import {connect} from 'react-redux';

import {
  getTodos,
  isLoading,

  isError,
  getError
  
} from './redux/actions/selectors';

import {loadTodos} from './redux/actions/actionsCreators';

import TodoList from './components/TodoList';
import LoadingMessage from './components/LoadingMessage';
import ErrorHandler from './components/ErrorHandler';

class App extends React.Component {

  componentWillMount() {
    this.props.loadTodos();
  }

  render() {
    const {
      isLoading,
      todoList,

      isError,
      errorType
    } = this.props;

    return (
        <div>
          <h1>Todos List</h1>

          {isError &&
            <ErrorHandler
              failureReason={errorType} />
          }

          {isLoading &&
            <LoadingMessage
              message={'Loading'} />
          }

            <TodoList
            todos={todoList}
            todoRemove={() => this.deleteTodo}
            valueButton={'delete to do'} />
        </div>
      );
    }
}


function mapStateToProps(state) {
  return {
    isLoading: isLoading(state),
    todoList: getTodos(state),

    isError: isError(state),
    errorType: getError(state)
  }
};

const mapDispatchToProps = {
  loadTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
