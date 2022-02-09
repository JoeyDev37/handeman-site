import React from 'react';
import { Navbar, Intro, Services, Gallery, Contact, Footer } from './components';
import header from './assets/header.png'
import logoWhite from './assets/logo-white.png'
import './App.css';
import Styled from 'styled-components';
import { COLORS } from './constants/colors';

function App() {
    const Header = Styled.div`
        height: 400px;
        position: relative;

        @media screen and (max-width: 760px) {
            height: 250px;
        }
    `;

    const HeaderImg = Styled.img`
        object-fit: cover;
        width: 100%;
        height: 100%;
    `;

    const Logo = Styled.div`
        width: 1000px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        > img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 1100px) {
            width: 700px;
        }

        @media screen and (max-width: 760px) {
            padding-top: 50px;
            width: 85%;
        }
    `;

    const Subtitle = Styled.p`
        color: white;
        font-size: 1.85rem;
        text-align: center;

        @media screen and (max-width: 1100px) {
            font-size: 1.5rem;
        }

        @media screen and (max-width: 760px) {
            font-size: 1.25rem;
        }
    `;

    return (
        <>
            <Header>
                <HeaderImg src={header} />
                <Logo>
                    <img src={logoWhite} />
                    <Subtitle>Exceptional Home Improvements</Subtitle>
                </Logo>
            </Header>
            <div style={{height: '20px', backgroundColor: COLORS.primary}} />
            <Intro />
            <Services />
            <Contact />
            <Footer />
        </>
  );
}

export default App;
