import {put, takeLatest} from "redux-saga/effects"
import FrequentlyVisitedContactTypes from "./types";
import {getFrequentlyVisitedContact} from "./actions";

export function* setFrequentlyVisitedContact(action) {
    yield put(getFrequentlyVisitedContact({
        data: action.payload
    }))
}


const frequentlyVisitedContactSaga = [
    takeLatest(FrequentlyVisitedContactTypes.SET_FREQUENTLY_VISITED_CONTACT, setFrequentlyVisitedContact)
]


export default frequentlyVisitedContactSaga
