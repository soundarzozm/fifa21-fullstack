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
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className='form-component'>
            <label htmlFor="player_id">Player ID</label>
                <input
                    className='input-box'
                    id="player_id"
                    name="player_id"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.player_id}
                /> 
            </div>

            <div className='form-component'>
            <label htmlFor="name">Player Name</label>
                <input
                    className='input-box'
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="nationality">Country</label>
                <input
                    className='input-box'
                    id="nationality"
                    name="nationality"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nationality}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="positions">Positions</label>
                <input
                    className='input-box'
                    id="positions"
                    name="positions"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.positions}
                    
                />
            </div>

            <div className='form-component'>
            <label htmlFor="overall">Overall</label>
                <input
                    className='input-box'
                    id="overall"
                    name="overall"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.overall}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="age">Age</label>
                <input
                    className='input-box'
                    id="age"
                    name="age"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="hits">Hits</label>
                <input
                    className='input-box'
                    id="hits"
                    name="hits"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.hits}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="potential">Potential</label>
                <input
                    className='input-box'
                    id="potential"
                    name="potential"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.potential}
                />
            </div>

            <div className='form-component'>
            <label htmlFor="team">Team</label>
                <input
                    className='input-box'
                    id="team"
                    name="team"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.team}
                />
            </div>

            <button className='button' type="submit">Submit</button>
        </form>
    )
}

export default PlayerForm
