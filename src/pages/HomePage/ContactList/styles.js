import React from 'react';
import Styled from 'styled-components';

export const ContactListWrapper = Styled.div`
   border: 1px solid #dfdfdf;
   border-radius:8px;
   height:calc(100% - ${props=>props.topSectionOfPageHeight}px);
   overflow: hidden;
   
`;
export const ContactItem = Styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   border-bottom: 1px solid #dfdfdf;
   cursor:pointer;
`;
export const FlexAlignCenter = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const HeaderWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
     padding: 0 50px;
    border-bottom: 1px solid #dfdfdf;
`;
export const SearchBarInput = Styled.input`
    width: 100%;
    padding: 5px 5px 5px 25px;
    border-radius: 8px;
    border: 1px solid #dfdfdf;
`;
export const ItemStyle = Styled.div`
    width:150px;
    text-align:center;
`;
export const SearchBarContainer = Styled.div`
    position:relative;
`;
