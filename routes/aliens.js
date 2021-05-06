const express = require('express');
router = express.Router();
const Alien = require('../models/alien');
// Get
/**
 * @swagger
 *    tags: [Alien]
 *      description: This should return all users
 */
router.get('/', async(req, res) =>{
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (error) {
        res.send('Error: ' + error);
    }
});
// Get by Id 
router.get('/:id', async(req, res) =>{
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (error) {
        res.send('Error: ' + error);
    }
});
//Patch Request
router.patch('/:id', async(req, res) =>{
    try {
        const alien = await Alien.findById(req.params.id);

        alien.sub = req.body.sub;
        const a1 = await alien.save(alien);
        res.json(a1);
    } catch (error) {
        res.send('ErrorPatch: ' + error);
    }
});
//Delete by Id
router.delete('/:id', async(req, res) =>{
    try {
        const alien = await findById(req.params.id);

        const a1 = await alien.delete(alien);
        res.json("Alien with the Id:" + req.params.id + " Deleted.");
    } catch (error) {
        res.send('ErrorDelete: ' + error);
    }
});

// Post Request
router.post('/', async(req, res) =>{
    
        const alien = new Alien({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        });
        
    try {
        const a1 = await alien.save();
        res.json(a1);
    } catch (error) {
        res.send('ErrorPost: ' + error);
    }
});

module.exports = router;
