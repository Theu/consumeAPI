import React from 'react';
import {connect} from 'react-redux';

import {getServerResponse} from './redux/actions/selectors';
import {
  todo_load,
  todo_add_ToServer
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
    this.props.todo_load();
  }

  render() {
    const {
      responseFromServer
    } = this.props;

    const isLoadingPossible = (responseFromServer === '200');

    return (
        <div>
          <h1>Todo's List</h1>
          {isLoadingPossible &&
            <div>
              <TodoList
                todoRemove={() => this.deleteTodo}
                valueButton={'delete to do'} />
              <AdderField
                placeholder={'add a todo'}
                onTitleChange={this.onTitleChange}
                addTodo={this.addTodo}
                ref={todoField => this.todoField = todoField} />
            </div>
          }
          {!isLoadingPossible &&
          <div>
            I am sorry but you can't use this app because the server send a {responseFromServer} response.
          </div>
          }
        </div>
      )
    }


  onTitleChange = (event) => {
    event.preventDefault();
    this.setState({title:event.target.value}) // rem {title:title} --> remeber reference of an object, here you have the string
  }

  addTodo = () => {
    if (this.state.title.length > 0) { //todo: add check for input validty
      this.props.todo_add_ToServer({title:this.state.title});
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
      responseFromServer: getServerResponse(state)
  };
}

const mapDispatchToProps = {
    todo_load,
    todo_add_ToServer
  }



export default connect(mapStateToProps, mapDispatchToProps)(App);
