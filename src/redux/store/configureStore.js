import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/todoReducer';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {

    const devTools = window && window.devToolsExtension ?
        window.devToolsExtension() : f => f;

    const middlewares = applyMiddleware(
        thunk
    );

    const finalMiddlewares = compose(
        middlewares,
        devTools
    )
    return createStore(
        rootReducer,
        initialState,
        finalMiddlewares
    )
}
