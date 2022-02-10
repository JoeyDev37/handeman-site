import React from 'react';
import logo from '../assets/logo.png'
import Styled from 'styled-components';

function QuickContact() {
    const HeaderContainer = Styled.div`
        display: flex;
        height: 200px;
        position: relative;
        justify-content: center;
        align-items: center;
    `;

    return (
        <>
            <HeaderContainer>
                <img src={logo} style={{width: '90%', height: 'auto'}}></img>
            </HeaderContainer>
        </>
    );
}

export default QuickContact;