import {
    loadTodoStart,
    loadTodoSuccess,
    loadTodoFailed,
    addTodo,
    removeTodo
} from './actionsCreators';

import {
    url,
    baseURL
} from '../tools/axiosBaseURL'

export function todoLoadStart() {
    return function(dispatch) {
        dispatch(loadTodoStart())
    }
}

export function todosLoad() {
    return function(dispatch) {
        return baseURL.get(url)
            .then((todos) => {
                dispatch(loadTodoSuccess(todos))
                }
            )
            .catch(error => {
                dispatch(loadTodoFailed())
            })
    }
}

export function todoAdd(todo) {
    return function(dispatch) {
        dispatch(addTodo(todo))
        return baseURL.post(url, todo)
            .then(() => {
                baseURL.get(url)
                .then((todos) => {
                    dispatch(loadTodoSuccess(todos))
                    }
                )
                .catch(error => {
                    dispatch(loadTodoFailed())
                })
            })
            .catch((error) => {console.log(error)})
    }
}

export function todoRemove(todoId) {
    console.log('todoId', todoId);
    return function(dispatch) {
        return baseURL.delete(`todos/${todoId.id}`)
                // .then(() => {
                //     dispatch(removeTodo(todoId))
                // })
                .then(() => {
                    baseURL.get(url)
                    .then((todos) => {
                        dispatch(loadTodoSuccess(todos))
                        }
                    )
                    .catch(error => {
                        dispatch(loadTodoFailed())
                    })
                })
                .catch((error) => {
                    console.log('DEL ERROR', error);
                })
    }
}

