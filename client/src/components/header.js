import React from 'react'
import {
    Navbar,
    //    Nav,
    //    Container
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <>

                <Navbar>
                    <LinkContainer to="/">
                        <div className='header-bar'>
                            <img className='logo' class="logo" src="logo.png" alt="logo" />
                            <Navbar.Brand className='brand'> DATABASE</Navbar.Brand>
                        </div>
                    </LinkContainer>
                </Navbar>


            {/* <Nav>
                
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
                
            </Nav> */}
        </>
    )
}

export default Header
