import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import {contactListReducers,frequentlyVisitedContactReducers} from "./ducks";


const topVisitedConfig = {
    key: 'topVisited',
    storage,
};

const rootReducers = {
    contactList: contactListReducers,
    frequentlyVisitedContact: persistReducer(topVisitedConfig, frequentlyVisitedContactReducers)
};

export default rootReducers;
