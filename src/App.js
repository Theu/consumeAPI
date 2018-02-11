import React from 'react';
import {connect} from 'react-redux';
import {
  getFetchTodos,
  getFailedLoad,
  getTodos
} from './redux/actions/selectors';

import {
  loadTodo,
  addTodoToServer
} from './redux/actions/todoActions';

import TodoList from './components/TodoList';
import AdderField from './components/AdderField';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    this.props.loadTodo();
  }
 
  render() {
    const {
      isLoading,
      responseFromServer
    } = this.props;

    const placeholder = 'add a todo';
    const loadingNotPossible = (responseFromServer !== '200');
    if(isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
            <p>Loading...</p>
        </div>
      )
    } else if (!isLoading) {
      return (
        <div>
          <h1>Todo's List</h1>
          {!loadingNotPossible &&
            <div>
              <TodoList
                todoRemove={() => this.deleteTodo}
                valueButton={'delete to do'} />
              <AdderField
                placeholder={placeholder}
                onTitleChange={this.onTitleChange}
                addTodo={this.addTodo}
                ref={todoField => this.todoField = todoField} />
            </div>
          }
          {loadingNotPossible &&
          <div>
            I am sorry but you can't use this app because the server send a {responseFromServer} response.
          </div>
        }
        </div>
      )
    }

  }

  onTitleChange = (event) => {
    event.preventDefault();
    const title = event.target.value;
    this.setState({title}) // rem {title:title} --> remeber reference of an object, here you have the string

  }

  addTodo = () => {
    const title = this.state.title;
    if (title.length > 0) { //todo: add check for input validty
      this.props.addTodoToServer({title});
    }
    this.todoField.clear();
  }

  deleteTodo = (event) => {
    const id = event.target.id
    this.props.todoRemove(id);
  }
}


function mapStateToProps(state, ownProps) {
  return {
      isLoading: getFetchTodos(state),
      responseFromServer: getFailedLoad(state), // change this name
      todos: getTodos(state)
  };
}

const mapDispatchToProps = {
    loadTodo,
    addTodoToServer
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
