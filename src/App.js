import React from 'react';
import {connect} from 'react-redux';

import {
  getError,
  getErrorMessage,
  getErrorType,
  getPending,
  getLoading
} from './redux/actions/selectors';

import {
  todo_load_success,

  todo_add_start,

  todo_delete_start
} from './redux/actions/todoActions';

import {
  LOAD_TODOS_ERROR,
  ADD_TODO_ERROR,
  DELETE_TODO_ERROR
} from './redux/actions/actionTypes'

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import AnimatedMessage from './components/AnimatedMessage';
import ErrorHandler from './components/ErrorHandler';
import ErrorMessage from './components/ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    this.props.todo_load_success();
  }
  render() {
    const {
      errorMessage,
      errorType,
      isPending,
      isLoading
    } = this.props;

    const isLoadError = errorType === LOAD_TODOS_ERROR;
    const isAddError = errorType === ADD_TODO_ERROR;
    const isDeleteError = errorType === DELETE_TODO_ERROR

    return (
        <div>
          <h1>Todo's List</h1>
          {isLoading &&
            <AnimatedMessage
              message={'We are loading the todo list'} />
          }

          {isLoadError &&
            <ErrorHandler
              faillureReason={errorMessage} />
          }

          <TodoList
            todoRemove={() => this.deleteTodo}
            valueButton={'delete to do'} />



          {isAddError &&
            <ErrorMessage
              errorMessage={'we cannot add your todo'} />
          }

          {isDeleteError &&
            <ErrorMessage
              errorMessage={'we cannot remove your todo'} />
          }

          {isPending ?
            <AnimatedMessage
              message={'Storing todo to the server'}
            />
            :
            <InputField
                placeholder={'add todo'}
                onTitleChange={this.listenInputFieldChange}
                handleClick={this.createTodo}
                ref={addTodoField => this.addTodoField = addTodoField}
            />
          }
        </div>
      );
    }


  listenInputFieldChange = (event) => {
    this.setState({title:event.target.value})
  }

  keepInputFieldValue = () => {
    if((this.props.isPending === false) && (this.props.isError === true)) {
      this.addTodoField.input.value = this.state.title
    }
  }

  createTodo = async () => {
    if (this.state.title.length > 0) { //todo: add check for input validty
      await this.props.todo_add_start({title:this.state.title});
      this.keepInputFieldValue();
    }
  }

  deleteTodo = (event) => {
    this.props.todo_delete_start(event.target.id);
  }
}


function mapStateToProps(state) {
  return {
      isError: getError(state),
      errorMessage: getErrorMessage(state),
      errorType: getErrorType(state),
      isPending: getPending(state),
      isLoading: getLoading(state)
  };
}

const mapDispatchToProps = {
    todo_load_success,
    todo_add_start,
    todo_delete_start
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
