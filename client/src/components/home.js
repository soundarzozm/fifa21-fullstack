import React, {useEffect, useState} from 'react'
import apis from '../api'
import {LinkContainer} from 'react-router-bootstrap'
import PlayerForm from './form'

const Home = () => {
    const [homeState, setHomeState] = useState({
        data: [], 
        loading: false, 
        metric: 'overall', 
        order:'DESC',
        searchTerm: '--',
        toggleCreate: false
    })

    const handleSort = (value) => {
        setHomeState({...homeState, metric: value.target.value})
    }

    const handleOrder = (value) => {
        setHomeState({...homeState, order: value.target.value})
    }

    const handleSearch = (value) => {
        if (value.target.value !== ''){
            setHomeState({...homeState, searchTerm: value.target.value})
        } else {
            setHomeState({...homeState, searchTerm: '--'})
        }
        
    }

    const handleCreate = () => {
        setHomeState({...homeState, toggleCreate: !homeState.toggleCreate})
    }

    useEffect(() => {
        setHomeState({...homeState, loading: true})
        apis.getPlayers(homeState.metric, homeState.order, homeState.searchTerm).then((response) => {
            setHomeState({...homeState, data: response.data, loading: false})
        })
    }, [])

    useEffect(() => {
        setHomeState({...homeState, loading: true})
        apis.getPlayers(homeState.metric, homeState.order, homeState.searchTerm).then((response) => {
            setHomeState({...homeState, data: response.data, loading: false})
        })
    }, [homeState.metric, homeState.order, homeState.searchTerm, homeState.toggleCreate])

    return (
        <>
            <select id="metric" onChange={handleSort}>
                <option value="overall" defaultValue={true}>Overall</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
            </select>

            <select id="order" onChange={handleOrder}>
                <option value="DESC" defaultValue={true}>Descending</option>
                <option value="ASC">Ascending</option>
            </select>

            <input type="text" placeholder="Search" onChange={handleSearch}/>

            {homeState.data ?
            homeState.data.map((player) => (
                <div key={player.player_id}>
                    <LinkContainer
                        to={`/player/${player.player_id}`}
                    >
                        <div>
                            {player.name}
                        </div>
                    </LinkContainer>
                </div>
            )):null}
            
            <button onClick={handleCreate}>Create New Player</button>
            
            {
                homeState.toggleCreate ? 
                <PlayerForm exist={false}/>
                : null
            }

        </>
    )
}

export default Home
