import { createStore } from 'redux';
import user from './reducer/user.js';

export default createStore(user);