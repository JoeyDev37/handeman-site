import React from 'react';
import { COLORS } from '../constants/colors';
import Styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../assets/slide-1.png'
import slideTwo from '../assets/slide-2.png'
import slideThree from '../assets/slide-3.png'

function Gallery() {
    const Container = Styled.div`
        display: flex;
        padding-top: 50px;
        padding-bottom: 50px;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.background};
    `;
    
    const InnerContainer = Styled.div`
        display: flex;
        align-self: center;
        width: 50%;
    `

    const Header = Styled.h1`
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        color: ${COLORS.headerText};
    `;

    return (
        <Container>
            <InnerContainer>
            <Carousel>
                    <div>
                        <img src={slideOne} />
                    </div>
                    <div>
                        <img src={slideTwo} />
                    </div>
                    <div>
                        <img src={slideThree} />
                    </div>
                </Carousel> 
            </InnerContainer>
        </Container>
    )
}

/*
<Carousel>
                    <div>
                        <img src={slideOne} />
                    </div>
                    <div>
                        <img src={slideTwo} />
                    </div>
                    <div>
                        <img src={slideThree} />
                    </div>
                </Carousel>
*/

export default Gallery;