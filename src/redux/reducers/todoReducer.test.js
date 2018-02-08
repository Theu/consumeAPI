import reducer from './todoReducer';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/todoActions';


describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(
          reducer(undefined, {})
        ).toEqual(
        {
            isLoading: false,
            todos: []
        }
      )// it should be equal to my initial state
    });


})
