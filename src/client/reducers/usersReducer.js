import { FETCH_USERS } from "../actions";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload.data; // Here, action.payload gets you the res from your request. You then must access the data property...
        default:
            return state;
    }
};