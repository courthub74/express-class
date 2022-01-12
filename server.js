//Require express library that was downloaded
const express = require("express")

//set up the server with app variable calling express as a function
const app = express()

//Tell app to use view engine
app.set('view engine', 'ejs')

//set the engine and the callback
// app.engine('ejs', )

//set up routes ("/" - root path)
app.get("/", (req, res) => {
    res.render("index", { text: "Your Life will surely change"})
})

//Importing the users.js
const userRouter = require('./routes/users')

//links the userRouter to the /users path
app.use('/users', userRouter)

//YOU CAN PUT THE USERS HERE TOO
// app.get('/users', (req, res) => {
// 	//will use post request but for now
// 	res.send("User List")
// })

// //now generate users
// app.get('/users/new', (req, res) => {
// 	//will use post request but for now
// 	res.send("User New Form")
// })


//make servern run pass through port #
app.listen(3000)