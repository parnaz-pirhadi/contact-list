import React,{Suspense} from 'react';
import {Container} from "./styles";
import {useSelector} from "react-redux";
import ConditionedComponent from "../../components/ConditionedComponent";
import useResizeObserver from "../../components/CustomHooks/useResizeObserver";
const ContactList = React.lazy(() => import('./ContactList'));
const FrequentlyVisitedContact = React.lazy(() => import('./FrequentlyVisitedContact'));


function HomePage() {
    const frequentlyVisitedContact = useSelector(state => state.frequentlyVisitedContact.list)
    const { headerRef, frequentlyVisitedContactHeight } = useResizeObserver();


    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
            <ConditionedComponent condition={frequentlyVisitedContact.length>0}>
                <FrequentlyVisitedContact ref={headerRef} frequentlyVisitedContact={frequentlyVisitedContact}/>
            </ConditionedComponent>
            <ContactList frequentlyVisitedContactHeight={frequentlyVisitedContactHeight}/>
            </Suspense>
        </Container>
    )
}

export default HomePage;
