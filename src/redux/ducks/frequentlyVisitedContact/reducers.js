import FrequentlyVisitedContactTypes from "./types";

export const initialStates = {
    list: []
}

const frequentlyVisitedContactReducers = (state = initialStates, action) => {
    switch (action.type) {
        case FrequentlyVisitedContactTypes.GET_FREQUENTLY_VISITED_CONTACT:
            return {
                ...state,
                list: action.payload.data
            }

        default:
            return {...state}
    }
}

export default frequentlyVisitedContactReducers
