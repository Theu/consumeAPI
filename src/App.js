import React from 'react';
import { connect } from 'react-redux';

import {
  getTodos,
  isLoading,
  hasError,
  getErrorType
} from './redux/actions/selectors';

import {
  loadTodos,
  addTodo
 } from './redux/actions/actionsCreators';

import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
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
          <ErrorHandler failureReason={errorType} />
        }

        {isLoading &&
          <LoadingMessage message={'Loading'} />
        }

        <TodoList
          todos={todoList}
          todoRemove={() => this.deleteTodo}
          valueButton={'delete to do'}
        />
        {!isLoading &&
          <AddTodoForm
            placeholder={'add a todo'}
            toAddTodo={this.addTodoToServer}
            readInsertedTodo={this.readInsertedTodo} />
        }

      </div>
    );
  }

  readInsertedTodo = event => {
    this.setState({ title: event.target.value });
  };

  addTodoToServer = () => {
    if(this.state.title.length > 0) {
      this.props.addTodo(this.state);
    }
  };
}

function mapStateToProps(state) {
  return {
    isLoading: isLoading(state),
    todoList: getTodos(state),

    hasError: hasError(state),
    errorType: getErrorType(state)
  };
}

const mapDispatchToProps = {
  loadTodos,
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
