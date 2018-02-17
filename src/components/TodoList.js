import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
    getTodos,
    getPending,
    getErrorMessage,
    getErrorType
} from '../redux/actions/selectors';

import { ADD_TODO_ERROR } from '../redux/actions/actionTypes';

import Todo from './Todo';
import ErrorHandler from './ErrorHandler';

import './todoList.css'
class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          todos: this.props.todos
        }
    }

    static propTypes = {
        todoRemove: PropTypes.func,
        valueButton: PropTypes.string
    }

    render() {
        const {
            todoRemove,
            valueButton,
            todos,
            errorType
         } = this.props;

         const addFailedMessage = 'We are sorry but we cannot add your entry'
         return (
            <ul className="todoList-wrapper">
                {todos.map((key, value, id) => {
                    const todoValue = ((todos.length - 1 === value) && errorType === ADD_TODO_ERROR ) ? addFailedMessage : key.title

                    return (
                        <Todo
                            key={value}
                            title={value}
                            id={key.id}
                            valueButton={valueButton}
                            todoRemove={todoRemove(key.id)}
                            // pendingStyle={pendingTodo}
                            // failingButtonStyle={hideDeleteButton}
                             />
                    )
                })}



            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: getTodos(state),
        isPending: getPending(state),
        errorType: getErrorType(state),
        errorMessage: getErrorMessage(state)
    }
}



export default connect(mapStateToProps)(TodoList);
