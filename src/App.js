import React from 'react';
import {connect} from 'react-redux';

import {
  getTodos,
  isLoading,

  hasError,
  getErrorType

} from './redux/actions/selectors';

import {
  loadTodos,
  deleteTodo
} from './redux/actions/actionsCreators';

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

      hasError,
      errorType
    } = this.props;

    return (
        <div>
          <h1>Todos List</h1>

          {hasError &&
            <ErrorHandler
              failureReason={errorType} />
          }

          {isLoading &&
            <LoadingMessage
              message={'Loading'} />
          }

            <TodoList
            todos={todoList}
            removeTodo={this.toRemoveTodo}
            valueButton={'delete to do'} />
        </div>
      );
    }

    toRemoveTodo = (event) => {
      this.props.deleteTodo(event.target.id);
    }
}


function mapStateToProps(state) {
  return {
    isLoading: isLoading(state),
    todoList: getTodos(state),

    hasError: hasError(state),
    errorType: getErrorType(state)
  }
};

const mapDispatchToProps = {
  loadTodos,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
