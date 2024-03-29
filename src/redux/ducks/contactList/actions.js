import {createAction} from "../../reduxHelpers";
import ContactListTypes from "./types";

const getContactList = createAction(ContactListTypes.GET_CONTACT_LIST);
const getContactListSuccess = createAction(ContactListTypes.GET_CONTACT_LIST_SUCCESS);
const getContactListFailure = createAction(ContactListTypes.GET_CONTACT_LIST_FAILURE);
const resetContactList = createAction(ContactListTypes.RESET_CONTACT_LIST);

export {
    getContactList,
    getContactListSuccess,
    getContactListFailure,
    resetContactList
};
