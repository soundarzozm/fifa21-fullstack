const express = require('express')
const Pool = require('pg').Pool
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

const pool = new Pool({
    user: config.username,
    host: 'localhost',
    database: 'fifa21',
    password: config.password,
    port: 5432,
  })

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/getplayer', async(req, res)=>{
    
    //playerName = req.body.name
    //console.log(`SELECT * FROM data WHERE name='${playerName}'`)
    pool.query(`SELECT * FROM data WHERE name='Iniesta'`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
})

const port = process.env.PORT || 8080
app.listen(port)
