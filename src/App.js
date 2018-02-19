import React from 'react';
import {connect} from 'react-redux';

import {
  getTodos
} from './redux/actions/selectors';

import {loadTodos} from './redux/actions/actionsCreators';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    this.props.loadTodos();
  }
  render() {
    const {
      todos
    } = this.props;
    return (
        <div>
          <h1>Todo's List</h1>

          <TodoList
            todos={todos}
            todoRemove={() => this.deleteTodo}
            valueButton={'delete to do'} />

        </div>
      );
    }
}


function mapStateToProps(state) {
  console.log('state', state);
  return {
    todos: getTodos(state)
  };
}

const mapDispatchToProps = {
  loadTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
