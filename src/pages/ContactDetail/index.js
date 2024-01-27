import React from "react";
import {useLocation} from "react-router";
import {AvatarStyle, CardContainer, CardStyle, FlexColumnCenter} from "../../components/SharedStyles/styles";
import defaultavatar from "../../../public/image/avatar.png";

function ContactDetail(){
    const { state } = useLocation();
    return(
        <CardContainer>
            <h2>
                Info
            </h2>
                    <CardStyle>
                        <AvatarStyle size={"large"} src={state.contact.avatar || defaultavatar} alt={state.contact.first_name}/>
                        <FlexColumnCenter>
                            <span>{state.contact.first_name || "Not Found"} {state.contact.last_name || "Not Found"}</span>
                            <span>Phone : {state.contact.phone || "Not Found"}</span>
                            <span>Company : {state.contact.company || "Not Found"}</span>
                            <span>Email : {state.contact.email || "Not Found"}</span>
                            <span>Telegram : {state.contact.telegram || "Not Found"}</span>
                        </FlexColumnCenter>
                    </CardStyle>

        </CardContainer>
    )
}
export default ContactDetail
