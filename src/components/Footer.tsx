import React from 'react';
import { COLORS } from '../constants/colors';
import Styled from 'styled-components';

function Footer() {
    const Container = Styled.div`
        display: flex;
        height: 75px;
        background-color: ${COLORS.headerText};
        justify-content: center;
        align-items: center;
    `;

    return (
        <Container>
            <p style={{color: 'white'}}>© 2022 HandEman LLC</p>
        </Container>
    )
}

export default Footer;