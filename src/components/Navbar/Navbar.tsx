import React, { useState }from 'react';
import { MenuItems } from './MenuItems';
import Styled from 'styled-components';
import { COLORS } from '../../constants/colors';

type NavMenuProps = {
    open: boolean;
}

const NavMenu = Styled.ul<NavMenuProps>`
        display: flex;
        flex-direction: row;
        list-style: none;
        text-align: center;
        justify-content: center;
        background: ${COLORS.primary};
        

        @media screen and (max-width: 760px) {
            position: absolute;
            top: 0;
            right: ${props => props.open ? 0 : '100%'};
            //transform: ${props => props.open ? 'translateX(0%)' : 'translateX(100%)'};
            flex-direction: column;
            justify-content: space-around;
            padding-top: 300px;
            padding-bottom: 300px;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-out;
        }
    `;

const StyledNavbar = Styled.nav`
    background-color: ${COLORS.primary};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    @media screen and (max-width: 760px) {
        height: 20px
    }
`;



const NavLink = Styled.a`
color: white;
text-decoration: none;
padding: 0.4rem 2rem;

&:hover {
    background-color: cornflowerblue;
    border-radius: 4px;
    transition: all 0.2s ease-out;
}

@media screen and (max-width: 760px) {
    font-size: 2rem;
}
`;

const NavMenuMobile = Styled.ul`

`;

const MenuIcon = Styled.div`
display: none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 18px;
    right: 25px;
    font-size: 1.25rem;
    cursor: pointer;
}
`;

function Navbar() {
    const [open, setOpen] = useState(false);

    

    

    return (
        <StyledNavbar>
            <NavMenu open={open}>
            {
                MenuItems.map((item, i) => (
                    <li key={i}>
                        <NavLink href={item.url}>
                            {item.title}
                        </NavLink>
                    </li>
                ))
            }
            </NavMenu>
            <MenuIcon onClick={() => setOpen(prev => !prev)}>
                <i 
                className={open ? 'fas fa-times' : 'fas fa-bars'}
                style={{fontSize: '4rem', color: 'white'}}
                />
            </MenuIcon>
        </StyledNavbar>
    )
}

export default Navbar;