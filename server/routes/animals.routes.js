const express = require('express');
const router = express.Router();
const animalCtrl = require('../controllers/animal.controller');

router.get('/', animalCtrl.getAnimals);
router.get('/:id', animalCtrl.getAnimal);
router.post('/', animalCtrl.addAnimal);
router.put('/:id', animalCtrl.updateAnimal);
router.delete('/:id', animalCtrl.removeAnimal);

module.exports = router;