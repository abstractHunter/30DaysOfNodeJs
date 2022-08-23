const express = require('express');
const axios = require('axios');

const app = express();


// config to define app settings
// use environment variables [ process.env ] for sensitive data like api keys and secrets
var config = {
    client_id: process.env.github_client_id,
    client_secret: process.env.github_client_secret,
    redirect_url: 'http://localhost:3000/github/callback',
    authorize_url: 'https://github.com/login/oauth/authorize?client_id=',
    token_url: 'https://github.com/login/oauth/access_token',
    user_url: 'https://api.github.com/user',
    scope: 'user'
};


// define routes

app.get('/github/auth', function(req, res) {
    // redirect the user to github authorization url
    return res.redirect(config.authorize_url + config.client_id);
});

app.get('/github/callback', function(req, res) {
    // extract authorize code 
    var code = req.query.code

    // make a post request to github to get access token
    axios({
        method: 'post',
        url: config.token_url,
        headers: {
            'Accept': 'application/json'
        },
    }).then((response) => {
        const accessToken = response.data.access_token;
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("finally");
    });
});



app.listen(3000, () => console.log('Github-api app listening on port 3000!'));