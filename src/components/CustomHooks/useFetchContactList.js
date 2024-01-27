import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getContactList} from "../../redux/ducks/contactList/actions";
import {debounce, isNumeric} from "../../utils/utils";

function useFetchContactList() {
    const [isSearch, setIsSearch] = useState(false)
    const dispatch = useDispatch();

    const fetchList = (searchValue, skip) => {
        setIsSearch(false)
        dispatch(getContactList(makeDto(searchValue, skip)))
    };

    const debounceSearch = useCallback(debounce((searchValue) => {
        setIsSearch(true)
        dispatch(getContactList(makeDto(searchValue)))
    }, 500), []);


    const makeDto = (searchValue, skip=0) => {
        let dto = {};
        if (isNumeric(searchValue)) {
            dto = {"phone": searchValue, "first_name": "", "skip": skip}
        } else {
            dto = {"phone": "", "first_name": searchValue, "skip": skip}

        }
        return dto;
    }

    return {fetchList, debounceSearch, isSearch};
};

export default useFetchContactList ;
