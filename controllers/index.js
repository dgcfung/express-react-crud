const {SuperHero} = require('../models');

const findAllHeros= async(req, res)=>{
    console.log(req.body)
    try{
        const hero= await SuperHero.findAll();
        res.json(hero)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
    console.log(hero)
}

const getHeroById= async(req, res)=>{
    console.log(req.body)
    const {id}= req.params;
    try{
        const hero= await SuperHero.findOne({
            where: {id: id},
        })
        res.json(hero)
    }catch (error){
        return res.status(500).json({error: error.message})
    }
}

const createHeros= async(req, res)=>{
    try{
    const hero= SuperHero.create(req.body);
    return res.status(201).json({
        hero,
    })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

module.exports={
    findAllHeros,
    getHeroById,
    createHeros
}