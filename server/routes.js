const router = require('express').Router();
const controller = require('./controller');

// ROUTES
router.get('/', controller.root)
router.get('/getplayers/:metric/:order', controller.getPlayers)
router.get('/player/:id', controller.getPlayerByID)

router.post('/createplayer', controller.createPlayer)

router.put('/updateplayer/:id', controller.updatePlayer)

router.delete('/player/:id', controller.deletePlayer)


module.exports = router
