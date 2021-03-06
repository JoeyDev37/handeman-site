import React from 'react';
import { COLORS } from '../constants/colors';
import Styled from 'styled-components';

function Contact() {
    const Container = Styled.div`
        display: flex;
        background-color: white;
        width: 100%;
        height: 150px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: ${COLORS.primary};

        @media screen and (max-width: 760px) {
            height: auto;
        }
    `;

    const InnerContainer = Styled.div`
        display: flex;
        flex-direction: row;

        @media screen and (max-width: 760px) {
            flex-direction: column;
        }
    `

    const ContactContainer = Styled.div`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;

        @media screen and (max-width: 760px) {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    `;

    return (
        <Container>
            <InnerContainer>
                <ContactContainer>
                    <h3 style={{marginBottom: '5px', color: 'white'}}>CALL</h3>
                    <p style={{color: 'white'}}>435-565-0680</p>
                </ContactContainer>
                <ContactContainer>
                    <h3 style={{marginBottom: '5px', color: 'white'}}>EMAIL</h3>
                    <p style={{color: 'white'}}>handemanpc@gmail.com</p>
                </ContactContainer>
                <ContactContainer>
                    <h3 style={{marginBottom: '5px', color: 'white'}}>AREA</h3>
                    <p style={{color: 'white'}}>Park City, UT</p>
                </ContactContainer>
            </InnerContainer>
        </Container>
    )
}

/*
<ContactContainer>
                    <h3 style={{marginBottom: '5px'}}>AREA</h3>
                    <p>Park City | Heber</p>
                    <p>Midway | Kamas</p>
                </ContactContainer>

*/

export default Contact;