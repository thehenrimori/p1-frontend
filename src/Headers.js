import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar color= "dark" dark expand="md">
                <NavbarBrand href="/">MyFy</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/artistas/">Artistas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/albuns/">Albuns</NavLink>
                        </NavItem>   
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );
}


export default Headers;