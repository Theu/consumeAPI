import {
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosBaseURL';
import { EROFS } from 'constants';

const {
    getTodosFromService
} = consumeApi(axiosInstance)

function fetchLoadTodos(todosFetched) {
    return {
        type: LOAD_TODOS,
        payload: todosFetched
    }
}

export function loadTodos(todos) {
    return dispatch => {
        getTodosFromService()
        .then(response => {
            dispatch(fetchLoadTodos(response.data))
        });
    }
}
