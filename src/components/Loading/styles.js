import React from 'react';
import Styled from 'styled-components';

export const Loader = Styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    position:absolute;
    bottom: 19%;
    left: 50%;
 
`;
