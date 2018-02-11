import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
    getTodos
} from '../redux/actions/selectors';


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

         return (
            <ul className="todoList-wrapper">
                {todos.map((key, value, id) => {
                    console.log('key', key);
                    return (
                        <Todo
                            key={value}
                            title={key.title}
                            id={key.id}
                            valueButton={valueButton}
                            todoRemove={todoRemove(key.id)} />
                    )
                })}
            </ul>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todos: getTodos(state),
    }
}



export default connect(mapStateToProps)(TodoList);
