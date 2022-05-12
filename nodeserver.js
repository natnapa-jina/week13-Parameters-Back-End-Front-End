const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Veriables
var id = 111589;
var status = "Single";
//Add Variables
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];

//Add Feature Bar Variables
var feature = [
    {img : "images/pexels.jpg", 
    top : "Programming  Courses", 
    bottom : "Enjoy Coding and Playing HTML, CSS,JavaScript <^v^>"},
 
    {img : "images/pexelss.jpg",
    top : "AIoT and Robotics  Courses",
    bottom : "Enjoy Coding and Playing Python, ROS, Mechanics <^v^>"}
]
//Add Content Fonts
var contentfont1 = "ONLINE CREATIVE WEBSITE"
var contentfont2 = "Presented by natnapa J"

//Set & Call EJS
app.set("view engine", 'ejs')

//Connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Backend!")

}) 
//Font-End EJS Shoe HTML Display
app.get("/",(req,res) =>{
    res.render("index", {userid : id, status : status,
          obj_user_list : user_list  })
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {obj_feature : feature, 
        contentfont1 : contentfont1, 
        contentfont2 : contentfont2})
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2')
})
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})
