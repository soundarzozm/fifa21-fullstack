const pool = require('./dbconfig')



exports.root = async (req, res) => {
    return res.json('Hello World')
}



exports.getPlayers = async (req, res) => {
    pool.query(`SELECT * FROM data`, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        res.status(200).json(results.rows)
    })
}



exports.createPlayer = async (req, res) => {
    let body = req.body

    pool.query(
        `INSERT INTO data ("player_id", "name", "nationality", "position", "overall", "age", "hits", "potential", "team") 
          VALUES(
          '${body.player_id}', 
          '${body.name}', 
          '${body.nationality}', 
          '${body.position}', 
          '${body.overall}', 
          '${body.age}', 
          '${body.hits}', 
          '${body.potential}', 
          '${body.team}'
        )`,

        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200)
        }
    )
}



exports.getPlayerByID = async (req, res) => {
    console.log(req.params)
    let ID = req.params.id

    pool.query(`SELECT * FROM data WHERE player_id=${ID}`, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        res.status(200).json(results.rows)
    })
}



exports.updatePlayer = async (req, res) => {
    let body = req.body

    pool.query(`
      UPDATE data SET 
        name = '${body.name}', 
        nationality = '${body.nationality}', 
        position = '${body.position}', 
        overall = '${body.overall}', 
        age = '${body.age}', 
        hits = '${body.hits}', 
        potential = '${body.potential}', 
        team = '${body.team}' 
        where player_id = '${req.params.id}'`,

        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200)
        }
    )
}



exports.deletePlayer = async (req, res) => {
  console.log(req.params)
    let ID = req.params.id

    pool.query(`DELETE FROM data WHERE player_id = '${ID}'`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200)
    })
}
