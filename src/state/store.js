import { createStore,applyMiddleware } from "redux"
// import { configureStore,applyMiddleware } from "redux"
import reducers from "./reducers";
import thunk from "redux-thunk"

export const store = createStore(reducers,{},applyMiddleware(thunk))
// export const store = configureStore(reducers,{},applyMiddleware(thunk))