const express = require('express');
const logger = require('morgan');

const glob = require("glob");

const config = require('./config/config.json')["server"];

const sequelize = require('./database.js');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const models = glob.sync('./models/*.js')
for(model of models){
    console.log('\x1b[36m%s\x1b[0m','ADDED MODEL', model)
    require(model)
}

const routes = glob.sync('./routes/*.js')
for(route of routes){
    console.log('\x1b[35m%s\x1b[0m','ADDED ROUTER', route)
    app.use(require(route))
}

sequelize.sync(
  { force: true },
  ).then(async function(err) {
      console.log('\x1b[32m%s\x1b[0m','DATABASE SYNCED')
});

app.all('*', function(req, res){
  return res.sendStatus(404)
})

app.listen(process.env.PORT || config.listen, function(){
  console.log('\x1b[32m%s\x1b[0m',`SERVER LISTENING AT ${config.listen}`)
})