import contactListSaga from "./ducks/contactList/sagas";
import frequentlyVisitedContactSaga from "./ducks/frequentlyVisitedContact/sagas";

const rootSagas = [
    ...contactListSaga,
    ...frequentlyVisitedContactSaga
];

export default rootSagas;
