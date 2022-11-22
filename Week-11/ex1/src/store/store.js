import { createStore } from 'redux';
import switchReducer from './switchReducer';

export const store = createStore(switchReducer);
