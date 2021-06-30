import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import  { actionLog } from './middlewares/actionLog'

import { productDetailSlice } from './productDetail/slice'
import { combineReducers,configureStore } from "@reduxjs/toolkit";


const rootReducer =  combineReducers({
    language:  languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail:productDetailSlice.reducer
})

// const store = createStore(rootReducer,applyMiddleware(thunk,actionLog))
const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store


// redux 公式

// const middleware = (store) => (next) => (action) => {} 