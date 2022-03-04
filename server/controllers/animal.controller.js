const animalCtrl = {};
const animalSchema = require('../models/animal');

animalCtrl.getAnimals = async (req, res) => {
    const animals = await animalSchema.find();
    res.json(animals);
}

animalCtrl.getAnimal = async (req, res) => {
    try{
        const animal = await animalSchema.findById(req.params.id);
        res.json(animal);
    }
    catch(e){
        res.json({
            status: "Error for getting data, please retry later"
        });
        console.error(e);
    }
}

animalCtrl.addAnimal = async (req, res) => {
    try{
        const animal = new animalSchema(req.body);
        await animal.save();
        res.json({
            pet: {
                _id: animal.id,
                name: animal.name,
                type: animal.type,
                age: animal.age,
                color: animal.color
            },
            status: "Pet saved"
        });
    }
    catch(e){
        res.json({
            status: "Error for updating data, please retry later"
        });
        console.error(e);
    }
}

animalCtrl.updateAnimal = async (req, res) => {
    try{
        const id = req.params.id;
        const animal = {
            name: req.body.name,
            type: req.body.type,
            color: req.body.color,
            age: req.body.age
        }
        await animalSchema.findByIdAndUpdate(id, {$set: animal}, {new: true})
        res.json({
            pet: {
                _id: id,
                name: animal.name,
                type: animal.type,
                age: animal.age,
                color: animal.color
            },
            status: "Pet updated"
        });
    }
    catch(e){
        res.json({
            status: "Error for updating data, please retry later"
        });
        console.error(e);
    }
}

animalCtrl.removeAnimal = async (req, res) => {
    try{
        await animalSchema.findByIdAndRemove(req.params.id);
        res.json({ status: "Pet removed" });
    }
    catch(e){
        res.json({ status: "Connection to database failed, please retry later"});
        console.log(e);
    }
}

module.exports = animalCtrl;