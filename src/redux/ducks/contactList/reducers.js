import ContactListTypes from "./types";

export const initialStates = {
    list: [],
    loading:false,
    totalItems:0
}

const contactListReducers = (state = initialStates, action) => {
    switch (action.type) {
        case ContactListTypes.GET_CONTACT_LIST:
            return {
                ...state,
                loading: true
            }
        case ContactListTypes.GET_CONTACT_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.data.items,
                totalItems:action.payload.data.meta.total,
                loading: false
            }
        case ContactListTypes.GET_CONTACT_LIST_FAILURE:
            return {
                ...state,
                list: [],
                loading: false
            }
            case ContactListTypes.RESET_CONTACT_LIST:
            return initialStates

        default:
            return {...state}
    }
}

export default contactListReducers
