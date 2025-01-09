var express = require('express');
var cors = require('cors');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
var bodyParser = require('body-parser');
const req = require('express/lib/request');
const { response } = require('express');

const CLIENT_ID = "Ov23lixPyJ7PanEfe12l";
const CLIENT_SECRET = "e915ed199004a8b870834a179fcf0ee332f9177a";

var app = express();
app.use(cors());
app.use(bodyParser.json());

//code being passed from front end 
app.get('/getAccessToken', async function (re,res){
    
    req.query.code;

    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data);
        res.json(data);
    })
});

//get user data
//access token is going to be passed in as an Authorization hear 

app.get('/getUserData', async function(req, res) {
    req.get("Authorization"); // Bearer ACCESSTOKEN
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization" : req.get("Authorization") // Bearer ACCESSTOKEN
        }
    }).then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data);
        res.json(data);
    });
})

app.listen(4000, function(){
    console.log("CORS server running on port 4000");
});