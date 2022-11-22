import { createStore } from 'redux';
import { INC, RESET } from './counterActions';

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INC:
            return state + 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;
