import {applyMiddleware, combineReducers, createStore} from "redux";
import { counterReducer } from "./counter-reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    counter: counterReducer,
})


let preloaderState;
const persistedTodoString = localStorage.getItem('app-state')
if (persistedTodoString) {
    preloaderState = JSON.parse(persistedTodoString)
}

export const store = createStore(rootReducer,preloaderState ,applyMiddleware(thunk))

store.subscribe(()=> {
localStorage.setItem('app-state',  JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>

