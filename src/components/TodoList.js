import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

import './todoList.css'
class TodoList extends React.Component {

    static propTypes = {
        todos: PropTypes.array,
        todoRemove: PropTypes.func,
        valueButton: PropTypes.string
    }

    render() {
        const {
            valueButton,
            todos,
            removeTodo
         } = this.props;
         return (
            <ul className="todoList-wrapper">
                {todos.map((key, value, id) => {
                    return (
                        <Todo
                            key={value}
                            title={key.title}
                            id={key.id}
                            valueButton={valueButton}
                            removeTodo={removeTodo}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;
