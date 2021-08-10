// import express
const express = require('express')
// instantiate a new instance of express.Router
const router = express.Router()
// import the 'fruits' model
const fruits = require('../models/fruits.js')

// create the /fruits GET route..aka INDEX route
// remove the reference to the base controllers url
// in this case /fruits

// index - returns all things
router.get('/', (req, res) => {
    console.log('fruits GET route')
    res.json({
        status: 200,
        fruits: fruits
    })
})

// create the /fruits/:id GET route...aka SHOW route
// we want to SHOW a specific item from the DB

// show - returns a single thing
router.get('/:index', (req, res) => {
    // req.params = { index: 2 }
    // req.params.index => 2
   res.json({
			status: 200,
			fruit: fruits[req.params.index], // fruits[2]
		});
})

// create - create a single thing
// .post is HTTP method used to send data to the server
router.post('/', (req, res) => {
    console.log('POST - req.body', req.body)
    const fruit = req.body
    fruits.push(fruit)
    res.json({
        status: 200,
        msg: 'data received'
    })
})

// destroy - remove a single thing
router.delete('/:index', (req, res) => {
    // .splice(starting pos, how many)
    // .splice mutates the original array
    fruits.splice(req.params.index, 1)
    // slice, splice
     res.json({
        status: 200,
        msg: 'item deleted',
	 });
})
// put - update a single thing
router.put('/:index', (req, res) => {
    fruits[req.params.index] = req.body
     res.json({
        status: 200,
        msg: 'item update',
        fruit: fruits[req.params.index],
    });
})


// export router
module.exports = router