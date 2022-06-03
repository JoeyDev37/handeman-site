import styled from 'styled-components';
import { COLORS } from '../constants/colors';

function Intro() {
    const OuterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: ${COLORS.background}
    `;

    const Container = styled.div`
        display: flex;
        justify-self: center;
        flex-direction: column;
        align-items: center;
        width: 800px;

        @media screen and (max-width: 760px) {
            width: 90%;
        }
    `;

    const Header = styled.h1`
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        color: ${COLORS.headerText};
    `;

    const Description = styled.p`
        font-size: 1.25rem;
        text-align: center;
        line-height: 30px;
    `;

    return (
        <OuterContainer>
            <Container>
                <Header style={{color: COLORS.headerText}}>Need A Hand?</Header>
                <Description>Ethan specializes in home repairs, maintenance and remodels. No matter the size of the job, or the type of service you require, Ethan's understanding of quality home improvement will leave your project area in superb condition! <br></br> Call, text or email for information.</Description>
                <p style={{marginTop: '10px', fontWeight: 600, fontSize: '1.2rem', textAlign: 'center'}}>Licensed and insured.</p>
            </Container>
        </OuterContainer>
    )
}

export default Intro;