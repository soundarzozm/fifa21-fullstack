import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './components/home'
import Header from './components/header'
import Player from './components/player'

const RoutesComponent = () => (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/player/:id" element={<Player/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
    </BrowserRouter>
)

export default RoutesComponent
