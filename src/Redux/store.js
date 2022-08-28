import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import { productReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";
const rootReducer=combineReducers({
productReducer,
CartReducer
})
export const store= createStore(rootReducer,applyMiddleware(thunk))