import React from "react";
import {AutoSizer, InfiniteLoader, List} from "react-virtualized";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setFrequentlyVisitedContact} from "../../../redux/ducks/frequentlyVisitedContact/actions";
import {AvatarStyle} from "../../../components/SharedStyles/styles";
import {ContactItem, ContactListWrapper, FlexAlignCenter, ItemStyle} from "./styles";
import defaultAvatar from "../../../../public/image/avatar.png";
import ConditionedComponent from "../../../components/ConditionedComponent";
import Loading from "../../../components/Loading";
import Header from "./Header";
import EmptyList from "./EmptyList";


function ContactListItem({topSectionOfPageHeight, list=[], skip, setSkip, hasMoreData, searchValue, fetchList, loading}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const topVisited = useSelector(state => state.frequentlyVisitedContact.list)

    const loadMoreRows = ({stopIndex}) => {
        const newSkip = skip + 30;
        if (hasMoreData && stopIndex === newSkip) {
            setSkip(newSkip)
            fetchList(searchValue, newSkip);
        }
    }

    const rowRenderer = ({ index, key, style }) => {
        if (index === list.length) {
            return null
        } else {

                const item = list[index];
                return(
                    <ContactItem key={key} style={style} onClick={() => navigateToDetailPage(item)}>
                        <FlexAlignCenter>
                            <AvatarStyle size={"small"} src={item.avatar || defaultAvatar} alt={item.first_name} />
                            <div>{item.first_name}</div>
                        </FlexAlignCenter>
                        <ItemStyle>{item.phone || "Not Found"}</ItemStyle>
                        <ItemStyle>{item.company || "Not Found"}</ItemStyle>
                    </ContactItem>
                );
        }
    };

    const isRowLoaded = ({index}) => {
        return !!list[index];
    };

    const calculateRowCount=()=>{
        return list?.length + (hasMoreData ? 1 : 0)
    }

    const navigateToDetailPage = (contact) => {
        handleTopVisited(contact)
        navigate(`/id=${contact.id}`, {state: {contact}})
    }
    const handleTopVisited = (contact) => {
        let cloneTopVisited = structuredClone(topVisited);
        let index = cloneTopVisited.findIndex((item) => item.id === contact.id);

        if (index === -1) {
            if (cloneTopVisited.length < 4) {
                cloneTopVisited.unshift(contact);
            } else {
                cloneTopVisited.pop();
                cloneTopVisited.unshift(contact)
            }
        }
        dispatch(setFrequentlyVisitedContact(cloneTopVisited))
    }
    const calculateListHeight = () => {
        return window.innerHeight - topSectionOfPageHeight - 80;
    }

    return (
        <ContactListWrapper topSectionOfPageHeight={topSectionOfPageHeight}>
            <Header/>
            <ConditionedComponent condition={list.length>0}>
                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    rowCount={calculateRowCount()}
                    threshold={1}
                >
                    {({onRowsRendered, registerChild}) => (
                        <AutoSizer>
                            {({width}) => (
                                <List
                                    ref={registerChild}
                                    height={calculateListHeight()}
                                    width={width}
                                    rowCount={calculateRowCount()}
                                    rowHeight={60}
                                    rowRenderer={rowRenderer}
                                    onRowsRendered={onRowsRendered}
                                />
                            )}
                        </AutoSizer>
                    )}
                </InfiniteLoader>
            </ConditionedComponent>
            <ConditionedComponent condition={!loading && list.length===0}>
                <EmptyList/>
            </ConditionedComponent>
            <ConditionedComponent condition={loading}>
                <Loading/>
            </ConditionedComponent>
        </ContactListWrapper>
    )
}

export default React.memo(ContactListItem);
