import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Player = () => {
    let [playerDetails, setPlayerDetails] = useState({})

    useEffect(() => {
        axios.get('/getplayer').then((response) => {
            setPlayerDetails({
                ...response.data[0],
            })
        })
    }, [])

    return (
        <div className="container">
            <h3>{playerDetails.name}</h3>
            <ul>
                <li>
                    <span>
                        Overall: <strong>{playerDetails.overall}</strong>
                    </span>
                </li>

                <li>
                    <span>
                        Potential: <strong>{playerDetails.potential}</strong>
                    </span>
                </li>

                <li>
                    <span>Age: </span>
                    <span>{playerDetails.age}</span>
                </li>

                <li>
                    <span>Nationality: </span>
                    <span>{playerDetails.nationality}</span>
                </li>

                <li>
                    <span>Club: </span>
                    <span>{playerDetails.team}</span>
                </li>

                <li>
                    <span>Positions: </span>
                    <span>{playerDetails.position}</span>
                </li>
                <li>
                    <span>Hits: </span>
                    <span>{playerDetails.hits}</span>
                </li>
            </ul>
        </div>
    )
}

export default Player
