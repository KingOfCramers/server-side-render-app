/// This is where we combine all of the reducers...
import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

export default combineReducers({
    users: usersReducer
});