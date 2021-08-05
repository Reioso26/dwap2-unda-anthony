const express = require('express');
const app = express();
const hbs=require('hbs');

require('./hbs/helpers');
hbs.registerPartials(__dirname + '/views/partials');
//express HBS view engine
app.set('view engine', 'hbs'); 
app.get('/',(req,res)=>{
   res.render('home'); 
});

app.use(express.static(__dirname+'/public'));
app.listen(3000,()=>{
    console.log('Escuchando peticiones en el puerto 3000');
    console.log(typeof(productos));
});