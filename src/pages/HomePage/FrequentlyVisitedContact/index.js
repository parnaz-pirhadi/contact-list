import React from 'react';
import { FlexSpaceBetween} from "./styles";
import {AvatarStyle, CardContainer, CardStyle, FlexColumnCenter} from "../../../components/SharedStyles/styles";
import defaultavatar from "../../../../public/image/avatar.png"
import {useNavigate} from "react-router-dom";

const FrequentlyVisitedContact = React.forwardRef((props, ref) => {
    const {frequentlyVisitedContact}=props;
    const navigate = useNavigate();

    const navigateToDetailPage = (contact) => {
        navigate(`/id=${contact.id}`, {state: {contact}})
    }
    return (
        <CardContainer ref={ref}>
            <h2>
                Frequently Visited Contact
            </h2>
            <FlexSpaceBetween>
                {frequentlyVisitedContact.length > 0 && frequentlyVisitedContact.map((item, index) => {
                    return (
                        <CardStyle key={index} onClick={()=>navigateToDetailPage(item)}>
                            <AvatarStyle src={item.avatar || defaultavatar} alt={item.first_name}/>
                            <FlexColumnCenter>
                                <span>{item.first_name || "NotFound"}</span>
                                <span>Phone : {item.phone || "Not Found"}</span>
                                <span>Company : {item.company || "NotFound"}</span>
                            </FlexColumnCenter>
                        </CardStyle>
                    )
                })}
            </FlexSpaceBetween>

        </CardContainer>
    )
})

export default FrequentlyVisitedContact
