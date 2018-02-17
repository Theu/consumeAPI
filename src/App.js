import React from 'react';
import {connect} from 'react-redux';

import {
  getError,
  getErrorMessage,
  getErrorType,
  getPending
} from './redux/actions/selectors';

import {
  todo_load_start,
  todo_load,
  todo_load_error,

  todo_add,
  todo_add_start,

  todo_delete
} from './redux/actions/todoActions';

import {
  LOAD_TODOS_ERROR,
  ADD_TODO_ERROR
} from './redux/actions/actionTypes'

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import ErrorHandler from './components/ErrorHandler';
import { isError } from 'util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    this.props.todo_load();
  }
  render() {
    const {
      errorMessage,
      errorType,
      isPending,
      isError
    } = this.props;

    const isLoadError = errorType === LOAD_TODOS_ERROR;
    const todoPending = isPending
    const displayError = (errorType === ADD_TODO_ERROR) ? 'we cannot add your todo' : 'we are processing your request'
    console.log('errorType', errorType);
    return (
        <div>
          <h1>Todo's List</h1>
            {isLoadError &&
              <ErrorHandler
                faillureReason={errorMessage} />
            }
              <TodoList
                todoRemove={() => this.deleteTodo}
                valueButton={'delete to do'} />
            {(errorType === ADD_TODO_ERROR) &&

              <h1>we cannot add your todo</h1>

            }
            {isPending ?
              <h1>we are processing your request</h1>
              :
              <InputField
                  placeholder={'add todo'}
                  onTitleChange={this.onTitleChange}
                  handleClick={this.addTodo}
                  ref={addTodoField => this.addTodoField = addTodoField} />
            }

            </div>
      );
    }


  onTitleChange = (event) => {
    this.setState({title:event.target.value})
  }

  addTodo = () => {
    if (this.state.title.length > 0) { //todo: add check for input validty
      this.props.todo_add_start({title:this.state.title});
      if((this.props.isPending === false) && (this.props.isError === false)) {
        console.log("ortica");
        this.addTodoField.clear();
      }
    }
    console.log("object", this.props.isError);

  }

  deleteTodo = (event) => {
    this.props.todo_delete(event.target.id);
  }
}


function mapStateToProps(state) {
  console.log("STATE", state);
  return {
      isError: getError(state),
      errorMessage: getErrorMessage(state),
      errorType: getErrorType(state),
      isPending: getPending(state)
  };
}

const mapDispatchToProps = {
    todo_load_start,
    todo_load,
    todo_load_error,
    todo_add_start,
    todo_delete
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
