import React from 'react';
import logo from '../assets/logo.png'
import Styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { Link } from 'react-router-dom';

function QuickContact() {
    const HeaderContainer = Styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    `;

    const ButtonContainer = Styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    `;

    const Button = Styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${COLORS.primary};
        margin: 15px;
        height: 75px;
        width: 150px;
        border-radius: 10px;
        font-size: 2.5rem;
        text-decoration: none;
        color: white;
        border-width: 2px;
        border-color: black;
        border-style: solid;
        cursor: default;
        user-select: none;
    `;

    return (
        <>
            <HeaderContainer>
                <img src={logo} style={{width: '90%', height: 'auto'}}></img>
            </HeaderContainer>
            <ButtonContainer>
                <Button href="mailto:handemanpc@gmail.com?Subject=Request A Quote">Email</Button>
                <Button href="tel:4355650680">Call</Button>
                <Button href="sms:4355650680">Text</Button>
                <Button><Link to="/">Site</Link></Button>
            </ButtonContainer>
        </>
    );
}

export default QuickContact;