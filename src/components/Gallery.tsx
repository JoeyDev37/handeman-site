import React from 'react';
import { COLORS } from '../constants/colors';
import Styled from 'styled-components';

function Gallery() {
    const Container = Styled.div`
        display: flex;
        background-color: white;
        width: 100%;
        height: 300px;
        align-items: center;
        justify-content: center;
    `;

    const Header = Styled.h1`
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        color: ${COLORS.headerText};
    `;

    return (
        <Container>
            <Header>Gallery</Header>
        </Container>
    )
}

export default Gallery;