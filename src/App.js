import React from 'react';
import {connect} from 'react-redux';

import {
  getError,
  getErrorMessage,
  getErrorType,
  getPending
} from './redux/actions/selectors';

import {
  // todo_load_start,
  todo_load,
  // todo_load_error,

  todo_add_start,

  todo_delete
} from './redux/actions/todoActions';

import {
  LOAD_TODOS_ERROR,
  ADD_TODO_ERROR
} from './redux/actions/actionTypes'

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import AnimatedMessage from './components/AnimatedMessage';
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
      isPending,
      pendingStyle
    } = this.props;

    const isLoadError = errorType === LOAD_TODOS_ERROR;
    
    return (
        <div>
          <h1>Todo's List</h1>
            {isLoadError &&
              <ErrorHandler
                faillureReason={errorMessage} />
            }
              <TodoList
                todoRemove={() => this.deleteTodo}
                valueButton={'delete to do'}
                pendingStyle={pendingStyle} />
            {(errorType === ADD_TODO_ERROR) &&

              <h1>we cannot add your todo</h1>

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
    this.props.todo_delete(event.target.id);
  }
}


function mapStateToProps(state) {
  return {
      isError: getError(state),
      errorMessage: getErrorMessage(state),
      errorType: getErrorType(state),
      isPending: getPending(state)
  };
}

const mapDispatchToProps = {
    // todo_load_start,
    todo_load,
    // todo_load_error,
    todo_add_start,
    todo_delete
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
