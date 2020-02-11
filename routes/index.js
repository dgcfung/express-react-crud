const {Router}= require('express')
const router= Router();
const {findAllHeros, getHeroById, createHeros, updateHeros, deleteHeros}= require('../controllers')

router.get('/myname', (req, res)=> res.send('Donald!'))
router.get('/heros', findAllHeros)
router.get('/heros/:id', getHeroById)
router.post('/createHeros', createHeros)
router.put('/heros/:id', updateHeros)
router.delete('/heros/:id', deleteHeros)


module.exports = router;
