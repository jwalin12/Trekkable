const Hike = require('../models/hike.model');


router.route('/').get((req,res) => {
    Hike.find()
    .then(hikes => res.json(hikes))
    .catch(err => res.status(400).json('Error:' +err));
})

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const location = req.body.location;
    const trailStatus = req.body.trailStatus;
    const newHike = new Hike({name, location, trailStatus});
    
    newHike.save()
    .then(() => res.json('New hike added!'))
    .catch(err => res.status(400).json('Error: '+err));

})

router.route('/:name').post((req,res) => {
    const hikeName = req.body.name;
    Hike.find({name : {hikeName}})
    .then(hike => res.json(hike))
    .catch(err => res.status(400).json('Error: '+err));

})


module.exports = router;