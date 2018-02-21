import React from "react";
import { connect } from "react-redux";

import {
  getTodos,
  isLoading,
  hasError,
  getErrorType
} from "./redux/actions/selectors";

import { loadTodos } from "./redux/actions/actionsCreators";

import TodoList from "./components/TodoList";
import AddTodoField from "./components/AddTodoField";
import LoadingMessage from "./components/LoadingMessage";
import ErrorHandler from "./components/ErrorHandler";

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

        {hasError && <ErrorHandler failureReason={errorType} />}

        {isLoading && <LoadingMessage message={"Loading"} />}

        <TodoList
          todos={todoList}
          todoRemove={() => this.deleteTodo}
          valueButton={"delete to do"}
        />
        <AddTodoField placeholder={"add a todo"} todoAdded={this.todoAdded} />
      </div>
    );
  }
  todoAdded = title => {
    console.log("------------------------------------");
    console.log(title);
    console.log("------------------------------------");
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
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
