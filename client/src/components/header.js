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
                            <img className='logo' src="logo.png" alt="logo" />
                            <Navbar.Brand className='brand'> DATABASE</Navbar.Brand>
                        </div>
                    </LinkContainer>
                </Navbar>
        </>
    )
}

export default Header
