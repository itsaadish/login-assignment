import loginReducer from "./posts/reducer"
import {configureStore} from "@reduxjs/toolkit"
import {logger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import loginManagerSaga from "./rootSaga"
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        login:loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false,serializableCheck: false}).concat(logger,sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(loginManagerSaga);


export default store;
