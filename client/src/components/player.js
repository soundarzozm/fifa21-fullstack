import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Player = () => {
    let [playerDetails, setPlayerDetails] = useState({})

    useEffect(() => {
        axios.get('/getplayer').then((response) => {
            setPlayerDetails({
                ...response.data[0]
            })
        })
    }, [])

    return (
        <div className="player-details">
            <div className="mx-3 pt-3">
                <h3>{playerDetails.name}</h3>
                <ul>
                    <li className="player_highlights-all">
                        <span className="player_highlights">
                            Overall: <strong>{playerDetails.overall}</strong>
                        </span>
                    </li>

                    <li className="player_highlights-all">
                        <span className="player_highlights">
                            Potential:{' '}
                            <strong>{playerDetails.potential}</strong>
                        </span>
                    </li>

                    <li>
                        <span>Age: </span>
                        <span className="player-detail_value">
                            {playerDetails.age}
                        </span>
                    </li>

                    <li>
                        <span>Nationality: </span>
                        <span className="player-detail_value">
                            {playerDetails.nationality}
                        </span>
                    </li>

                    <li>
                        <span>Club: </span>
                        <span className="player-detail_value">
                            {playerDetails.team}
                        </span>
                    </li>

                    <li>
                        <span>Positions: </span>
                        <span className="player-detail_value">
                            {playerDetails.position}
                        </span>
                    </li>
                    <li>
                        <span>Hits: </span>
                        <span className="player-detail_value">
                            {playerDetails.hits}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Player
