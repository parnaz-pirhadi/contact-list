import Styled from "styled-components";

export const FlexWrapper = Styled.div`
    display: flex;
  
`;
export const CardContainer = Styled(FlexWrapper)`
    border: 1px solid #dfdfdf;
    padding: 10px;
    border-radius: 8px;
    flex-direction: column;
   
`;
export const FlexColumnCenter = Styled.div`
   display:flex;
   flex-direction:column;
   justify-content: center;
`;

export const CardStyle = Styled.div`
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    background-color: #f3f3f3;
    padding: 10px 10px 10px 0;
    display:flex;
    min-width:260px;

`
export const AvatarStyle = Styled.img`
   vertical-align: middle;
   width: ${props=>props.size==="large" ? "150px":props.size==="small" ? "50px":"80px"};
   height: ${props=>props.size==="large" ? "150px":props.size==="small" ? "50px":"80px"};
   border-radius: 50%;
`;
