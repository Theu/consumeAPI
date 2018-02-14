import React from 'react';
import {connect} from 'react-redux';

import {
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
  LOAD_TODOS_ERROR
} from './redux/actions/actionTypes'

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import ErrorHandler from './components/ErrorHandler';

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
      isPending
    } = this.props;

    const isLoadError = errorType === LOAD_TODOS_ERROR;
    const todoPending = isPending

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
            {isPending ?
              <h1>we are sending your todo to the server</h1>
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
    }
    console.log('isPending', this.props.isPending);
    this.addTodoField.clear();
  }

  deleteTodo = (event) => {
    this.props.todo_delete(event.target.id);
  }
}


function mapStateToProps(state) {
  return {
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
