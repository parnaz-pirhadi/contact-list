import {createAction} from "../../reduxHelpers";
import FrequentlyVisitedContactTypes from "./types";

const setFrequentlyVisitedContact = createAction(FrequentlyVisitedContactTypes.SET_FREQUENTLY_VISITED_CONTACT);
const getFrequentlyVisitedContact = createAction(FrequentlyVisitedContactTypes.GET_FREQUENTLY_VISITED_CONTACT);

export {
    setFrequentlyVisitedContact,
    getFrequentlyVisitedContact
};
