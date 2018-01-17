import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShowTodos.css';
import {connect} from 'react-redux';
import {
  fetchTodo,
  selectorGetTodo,
  selectorIsFetching
} from './actions/index'


class ShowTodos extends Component {

  static propTypes = {
    todos: PropTypes.array,
    isFetched: PropTypes.bool,
    fetchTodo: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchTodo();
  }

  render() {
    const {
      todos,
      isFetching
    } = this.props;
    console.log('------------------------------------');
    console.log("QUI", todos);
    console.log("todos.lenght", todos);
    console.log("isFetched", isFetching);
    console.log('------------------------------------');
    if(isFetching) {
      return <p>Loading...</p>
    } else if (!isFetching) {
    const useThis = JSON.stringify(todos);
    console.log('/',useThis);
    return (
      <div className="ShowTodos">
        <header className="ShowTodos-header">
          <h1 className="ShowTodos-title">Some HEADER</h1>
        </header>
        <ul className="ShowTodos-intro">
          {JSON.parse(useThis).map(([key, value]) => value.doc.title)}
        </ul>
      </div>
    );
  } else {
    return <p>what ever</p>
  }
  }
}


const mapStateToProps = (state) => ({
  todos: selectorGetTodo(state),
  isFetching: selectorIsFetching(state)
})

export default connect(mapStateToProps, {fetchTodo})(ShowTodos);
