import storage from 'redux-persist/lib/storage/session';
import {persistReducer} from "redux-persist";
import {contactListReducers} from "./ducks";

const contactListConfig = {
    key: 'products',
    storage,
    // blacklist:'showLoginModal'
};


const rootReducers = {
    contactList: persistReducer(contactListConfig, contactListReducers)
};

export default rootReducers;
