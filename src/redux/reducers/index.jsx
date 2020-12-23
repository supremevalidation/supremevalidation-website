import { combineReducers } from "redux";

import language from "./language";
import visibility from "./visibility";

const rootReducer = combineReducers({
    language,
    visibility
});

export default rootReducer;