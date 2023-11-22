import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { getLocalStorage } from '../utils/localStorage';

const userInfoFromStorage =
    getLocalStorage('account') && getLocalStorage('account') !== 'undefined'
        ? JSON.parse(getLocalStorage('account'))
        : null;

const initialState = {
    user: { userInfo: userInfoFromStorage },
};

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: initialState,
});

//export
export default store;
