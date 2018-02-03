import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getTodo} from '../actions/selectors';

import Todo from './Todo';

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
            todos
         } = this.props;
        if(todos.todos.rows !== undefined){

            return (
                <ul className="todoList-wrapper">
                    {todos.todos.rows.map((key, value, id) => {
                        return (
                            <Todo
                                key={value}
                                title={key.doc.title}
                                id={key.id}
                                valueButton={valueButton}
                                todoRemove={todoRemove(key.id)} />
                        )
                    })}
                </ul>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todos: getTodo(state)
    }
}



export default connect(mapStateToProps)(TodoList);
