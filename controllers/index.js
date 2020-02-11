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
    const hero= await SuperHero.create(req.body);
    console.log(hero)
    return res.status(201).json({
        hero,
    })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

const updateHeros= async(req, res)=>{
    try{
        console.log(req)
        const{id}= req.params;
        const updated= await SuperHero.update(req.body,{
            where: {id:id}
        });
        if(updated){
            const updatedHero = await SuperHero.findOne({
                where: {id:id}
            })
            return res.status(200).json({hero: updatedHero})
        }
    // throw new Error('Hero not found, check your spelling & try again.')
    }catch(error){
        return res.status(500).send(error.message);
    }
}

const deleteHeros = async(req, res)=>{
    const {id} = req.params
    try{
        const deleted= await SuperHero.destroy({
            where: {id: id}
        });
        if(deleted){
            return res.status(204).send("Hero deleted.");
        }
        throw new Error ("Hero not found");
    }catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports={
    findAllHeros,
    getHeroById,
    createHeros,
    updateHeros,
    deleteHeros
}