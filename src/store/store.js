import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(function(){
    console.log(store.getState());
})

export default store;
