import React from 'react';
import Styled from 'styled-components';
import { COLORS } from '../constants/colors';

function Services() {
    const Container = Styled.div`
        display: flex;
        flex-direction: column;
        background-color: ${COLORS.primary};
        width: 100%;
        height: 300px;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 760px) {
            height: auto;
            padding-bottom: 20px;
        }
    `;

    const InnerContainer = Styled.div`
        display: flex;
        width: 900px;
        justify-content: space-evenly;

        @media screen and (max-width: 760px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    `;

    const IconContainer = Styled.div`
        display: flex;
        width: 150px;
        height: 150px;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        > p {
            color: white;
        }

        @media screen and (max-width: 760px) {
            margin-top: 20px;
            margin-botton: 20px;
        }
    `;

    return (
        <Container>
            <InnerContainer>
                <IconContainer>
                    {/* @ts-ignore */}
                    <i class='fas fa-hammer' style={{fontSize: '5rem', color: 'white'}}></i>
                    <p style={{fontSize: '1.5rem'}}>Carpentry</p>
                </IconContainer>
                <IconContainer>
                    {/* @ts-ignore */}
                    <i class='fas fa-wrench' style={{fontSize: '5rem', color: 'white'}}></i>
                    <p style={{fontSize: '1.5rem', textAlign: 'center'}}>Minor Plumbing</p>
                </IconContainer>
                <IconContainer>
                    {/* @ts-ignore */}
                    <i class='fas fa-screwdriver' style={{fontSize: '5rem', color: 'white'}}></i>
                    <p style={{fontSize: '1.5rem', textAlign: 'center'}}>Minor Electrical</p>
                </IconContainer>
                <IconContainer>
                    {/* @ts-ignore */}
                    <i class='fas fa-paint-roller' style={{fontSize: '5rem', color: 'white'}}></i>
                    <p style={{fontSize: '1.5rem'}}>Paint</p>
                </IconContainer>
                <IconContainer>
                    {/* @ts-ignore */}
                    <i class='fas fa-tools' style={{fontSize: '5rem', color: 'white'}}></i>
                    <p style={{fontSize: '1.5rem'}}>Maintenance</p>
                </IconContainer>
            </InnerContainer>
            <h2 style={{color: 'white', fontWeight: 600, marginTop: '25px', marginBottom: '10px'}}>Other Services</h2>
            <p style={{color: 'white', whiteSpace: 'pre-wrap'}}>Appliance  |  Drywall  |  Flooring</p>
            <p style={{color: 'white', whiteSpace: 'pre-wrap'}}>Pool & Spa  |  Renovation  |  Consulting</p>
        </Container>
    )
}

export default Services;