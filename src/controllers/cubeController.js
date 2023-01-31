const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');



exports.getCreateCube = (req,res) => {
    res.render('create')
}


exports.postCreateCube = async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;    
    let cube = new Cube({name, description, imageUrl, difficultyLevel});

    await cube.save();
    
    res.redirect('/')
} 

exports.getDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();      
    
    if(!cube){
        res.render('/404')
    }
    
    res.render("details", {cube})
}

exports.getAttchAccessory = async (req, res) => {
    const accessories = await Accessory.find({_id:{$nin: cube.accessories}}).lean()
    const cube = await Cube.findById(req.params.cubeId).lean()
    res.render('cube/attach', {cube, accessories})
}


exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accesssoryId = req.body.accessory;
    cube.accessories.push(accesssoryId);
     await cube.save();

    res.redirect(`/cubes/${cube._id}/details`)
}