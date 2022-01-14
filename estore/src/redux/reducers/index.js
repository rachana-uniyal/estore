import { combineReducers } from "redux";
import { topMenu } from "./topMenu";
import { product } from "./product";
import { login } from "./login"
import * as cart from "./cart";

const rootReducer = combineReducers({
    topMenu,
    product,
    ...cart,
    ...login
})

export default rootReducer