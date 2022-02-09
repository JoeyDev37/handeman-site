import styled from 'styled-components';
import { COLORS } from '../constants/colors';

function Intro() {
    const OuterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 50px;
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
                <Header style={{color: COLORS.headerText}}>Need A Fix?</Header>
                <Description>Ethan specializes in home repairs, maintenance and remodels. No matter what room needs work or even a facelift, this Hand"E"man will get the job done. There is no task too small and his attention to detail will leave your next project area clean, like-new or brand new! Call, text or email for information or to schedule a consultation. Licensed and insured.</Description>
                <p style={{marginTop: '10px', fontWeight: 600, fontSize: '1.2rem', textAlign: 'center'}}>Serving Park City, UT and surrounding areas</p>
            </Container>
        </OuterContainer>
    )
}

export default Intro;