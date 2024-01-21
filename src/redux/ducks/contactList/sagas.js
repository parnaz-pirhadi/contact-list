import axios from "axios"
import {put, takeLatest} from "redux-saga/effects"
import {getContactListFailure, getContactListSuccess
} from "./actions"
import ContactListTypes from "./types";

export function* getContactList(action) {
    try {
        const response = yield axios.get(`/terminal/getTerminals?${action.payload}`)

        yield put(getContactListSuccess({
            statusCode: response.status,
            errorType: response?.data?.errorType || null,
            data: response.data
        }))
    } catch (err) {
        console.log("err: ", err)
        yield put(getContactListFailure({
            statusCode: err?.response.status,
            errorType: err?.response?.data?.errorType || null
        }))
    }
}


const contactListSaga = [
    takeLatest(ContactListTypes.GET_CONTACT_LIST, getContactList)
]


export default contactListSaga
