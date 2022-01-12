const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
	//will use post request but for now
	res.send("User List")
})

//new user form
router.get('/new', (req, res) => {
	//will use post request but for now
	res.send("User New Form")
})

//new user form
router.get('/old', (req, res) => {
	res.send("Old User Form")
})

//post request
router.post('/', (req, res) => {
    res.send("Create User")
})

//for getting individual user
router.get('/:id', (req, res) => {
    req.params.id
	res.send(`User Get with ID ${req.params.id}`)
})

module.exports = router