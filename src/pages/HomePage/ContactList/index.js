import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useContactList from "../../../components/CustomHooks/useFetchContactList";
import usePrevious from "../../../components/CustomHooks/usePrevious";
import {resetContactList} from "../../../redux/ducks/contactList/actions";
import SearchBar from "./SearchBar";
import ContactListItem from "./ContactListItem";


const ContactList = ({frequentlyVisitedContactHeight}) => {
    const [list, setList] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [skip, setSkip] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();
    const contactList = useSelector((state) => state.contactList.list);
    const loading = useSelector((state) => state.contactList.loading);
    const totalItems = useSelector((state) => state.contactList.totalItems);
    const {fetchList, debounceSearch, isSearch} = useContactList();
    let prevList = usePrevious(contactList)


    useEffect(() => {
        dispatch(resetContactList())
        fetchList(searchValue, 0);
    }, []);

    useEffect(() => {
        if (prevList && JSON.stringify(prevList) !== JSON.stringify(contactList) && contactList?.length > 0) {
            if (isSearch) {
                setList(contactList)
            } else {
                setList(prevList => [...prevList, ...contactList]);
            }
            setHasMoreData(true)
        } else {
            setList(contactList)
        }
    }, [contactList]);

    useEffect(() => {
        if (list.length === totalItems) {
            setHasMoreData(false)
        }
    }, [list]);


    const handleSearchValue = (e) => {
        const {value} = e.target;
        setSearchValue(value);
        setSkip(0)
        debounceSearch(value);
    }

    return (
        <>
            <SearchBar
                handleSearchValue={handleSearchValue}
            />
                <ContactListItem
                    topSectionOfPageHeight={frequentlyVisitedContactHeight + 70}
                    list={list}
                    skip={skip}
                    setSkip={setSkip}
                    hasMoreData={hasMoreData}
                    searchValue={searchValue}
                    fetchList={fetchList}
                    loading={loading}
                />

        </>
    )
};

export default ContactList;
