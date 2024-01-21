import ContactListTypes from "./types";

export const initialStates = {
    getContactList: [],
    getContactListErrorType: null
}

const contactListReducers = (state = initialStates, action) => {
    switch (action.type) {
        case ContactListTypes.GET_CONTACT_LIST:
            return {
                ...state,
                getContactListErrorType: null
            }
        case ContactListTypes.GET_CONTACT_LIST_SUCCESS:
            return {
                ...state,
                getContactList: action.payload.data,
                getContactListErrorType: action.payload.errorType
            }
        case ContactListTypes.GET_CONTACT_LIST_FAILURE:
            return {
                ...state,
                getContactList: null,
                getContactListErrorType: action.payload.errorType
            }

        default:
            return {...state}
    }
}

export default contactListReducers
