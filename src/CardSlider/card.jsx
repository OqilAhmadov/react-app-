import React from 'react';
import styled from 'styled-components';

import apartments from "../images/icons8-three-seater-sofa-50.svg";

const CardStyled = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;

const ContentStyled = styled.div`
margin: 0 0 0 10px;
`;

const ContentNumberStyled = styled.h2`
    font-size: 40px;
    color: #bf9410;
    font-weight: 700;
    font-family: 'Old Standard TT', serif;
    margin: 0;
    
`;
const ContentTitleStyled = styled.p`
    font-size: 18px;
    color: #7b7b7b;
    font-weight: 400;
    font-family: "Open Sans",sans-serif;
    margin: 0;
`;
function card() {
    return (
        <CardStyled>
            <img src={apartments} alt="img" />
            <ContentStyled>
                <ContentNumberStyled>1,500</ContentNumberStyled>
                <ContentTitleStyled>Apartments</ContentTitleStyled>
            </ContentStyled>
        </CardStyled>
    )
}

export default card;
