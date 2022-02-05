const router = require('express').Router();
const controller = require('./controller');

// ROUTES
router.get('/', controller.root)
router.get('/getplayers/:metric/:order/:searchTerm', controller.getPlayers)
router.get('/playerid/:id', controller.getPlayerByID)

router.post('/createplayer', controller.createPlayer)

router.put('/updateplayer/:id', controller.updatePlayer)

router.delete('/playerid/:id', controller.deletePlayer)


module.exports = router
