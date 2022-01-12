const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
	//will use post request but for now
	res.send("User List")
})

router.get('/new', (req, res) => {
	//will use post request but for now
	res.send("User New Form")
})

module.exports = router