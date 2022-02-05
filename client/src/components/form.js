import React from 'react'
import {useFormik} from 'formik'
import apis from '../api'


const PlayerForm = (props) => {
    
    const formik = useFormik({
        initialValues: {
            player_id: props.exist ? props.playerData.player_id : '',
            name: props.exist ? props.playerData.name : '',
            nationality: props.exist ? props.playerData.nationality : '',
            overall: props.exist ? props.playerData.overall : '',
            age: props.exist ? props.playerData.age : '',
            hits: props.exist ? props.playerData.hits : '',
            potential: props.exist ? props.playerData.potential : '',
            team: props.exist ? props.playerData.team : '',

            positions: props.exist ? props.playerData.positions : ''
        },
        
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            props.exist ? 
            apis.updatePlayerById(props.playerData.player_id, values).then((response) => {
                console.log(response.data)
            })
            : apis.insertPlayer(values).then((response) => {
                console.log(response.data)
            })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="player_id">Player ID</label>
                <input
                    id="player_id"
                    name="player_id"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.player_id}
                /> 

            <label htmlFor="name">Player Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

            <label htmlFor="nationality">Country</label>
                <input
                    id="nationality"
                    name="nationality"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                />

            <label htmlFor="positions">Positions</label>
                <input
                    id="positions"
                    name="positions"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.positions}
                    
                />

            <label htmlFor="overall">Overall</label>
                <input
                    id="overall"
                    name="overall"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.overall}
                />

            <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />

            <label htmlFor="hits">Hits</label>
                <input
                    id="hits"
                    name="hits"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.hits}
                />

            <label htmlFor="potential">Potential</label>
                <input
                    id="potential"
                    name="potential"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.potential}
                />

            <label htmlFor="team">Team</label>
                <input
                    id="team"
                    name="team"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.team}
                />

            <button type="submit">Submit</button>
        </form>
    )
}

export default PlayerForm
