const {Router}= require('express')
const router= Router();
const {findAllHeros, getHeroById, createHeros}= require('../controllers')

router.get('/myname', (req, res)=> res.send('Donald!'))
router.get('/heros', findAllHeros)
router.get('/heros/:id', getHeroById)
router.post('/createHeros', createHeros)



module.exports = router;
