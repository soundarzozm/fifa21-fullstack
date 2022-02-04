import React from 'react'
import ReactDOM from 'react-dom'
import RoutesComponent from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

ReactDOM.render(
    <React.StrictMode>
        <RoutesComponent/>
    </React.StrictMode>,
    document.getElementById('root')
)
