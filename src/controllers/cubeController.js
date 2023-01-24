const { save } = require("../models/Cube");
const Cube = require("../models/Cube");
const db = require('../db.json');



exports.getCreateCube = (req,res) => {
    res.render('create')
}


exports.postCreateCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;    
    let cube = new Cube(name, description, imageUrl, difficultyLevel);

    Cube.save(cube);
    
    res.redirect('/')
} 

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId); 
    if(!cubeId){
        res.render("/404")
    }   
    let cube = db.cubes.find(x => x.id == req.params.cubeId);
    
    if(!cube){
        res.render('/404')
    }
    
    res.render("details", {cube})
}