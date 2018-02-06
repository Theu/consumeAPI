import reducer from './todoReducer';
import * as types from '../actions/actionTypes';

describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(
          reducer(undefined, {})
        ).toEqual(
        {
            isLoading: false,
            canLoad:true,
            todos: []
        }
      )// it should be equal to my initial state
    });

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: types.ADD_TODO,
                text: 'implement tests'
            })
        ).toEqual(
            {
                isLoading: false,
                todos: ['implement tests']
            }
        )
    });

})
