const hbs = require('hbs');
const fs = require('fs');

//Helpers
hbs.registerHelper('productos', ()=>{
    var jsonString = fs.readFileSync("./data/datos.json");
    var data = JSON.parse(jsonString);
    var products = "";

    for (x of data) {
        products +=
            '<td><p>'+x.nombre+'</p><img src="'+x.url+'"><p>'+x.precio+'</p></td>'
        ;             
    }

    return new hbs.SafeString(products);
});