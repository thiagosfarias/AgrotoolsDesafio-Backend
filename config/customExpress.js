const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
    const app = express()


    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    
    var whitelist = ['http://localhost:3000', 'http://localhost:3000/#']
    var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
        callback(null, corsOptions) // callback expects two parameters: error and options
    }

    consign()
    .include('controllers')
    .into(app)

    return app
}