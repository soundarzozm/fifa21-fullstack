import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return(
        <>
            
            <Navbar>
                <LinkContainer to="/">
                    <Navbar.Brand>FIFA 21 Database</Navbar.Brand>
                </LinkContainer>
            </Navbar>

            
            <Nav>
                
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                
                <Nav.Item>
                    <LinkContainer to="/player">
                        <Nav.Link>Player Analysis</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                
            </Nav>
            
        </>
    )
}

export default Header
