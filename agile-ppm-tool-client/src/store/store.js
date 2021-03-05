import {compose, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";

const initState = {};


let store;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        initState,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} else {
    store = createStore(
        rootReducer,
        initState
    );
}
export default store;