import React, {useEffect, useState} from 'react'
import apis from '../api'

const Home = () => {
    const [homeState, setHomeState] = useState({data: [], loading: false, metric: 'overall', order:'DESC'})

    const handleSort = (value) => {
        setHomeState({...homeState, metric: value.target.value})
    }

    const handleOrder = (value) => {
        setHomeState({...homeState, order: value.target.value})
    }

    useEffect(() => {
        setHomeState({...homeState, loading: true})
        apis.getPlayers(homeState.metric, homeState.order).then((response) => {
            setHomeState({...homeState, data: response.data, loading: false})
        })
    }, [homeState.metric, homeState.order])

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

            {homeState.data ?
            homeState.data.map((player) => (
                <div key={player.player_id}>{player.name}</div>
            )):null}
        </>
    )
}

export default Home
