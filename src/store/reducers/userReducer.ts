import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types/auth.type';

const userInitialState: { userInfo: IUser | null } = { userInfo: null };

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        resetUserInfo(state) {
            state.userInfo = null;
        },
    },
});

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
