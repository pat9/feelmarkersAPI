const router = require('express').Router();
const Marker = require('../models/marker');

router.get('/', async (req, res)=>{
    const markers = await Marker.find();
    res.json(markers)
})

module.exports = router;  