const bodyParser =  require('body-parser')
const express = require("express")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

var i = 1
app.get('/', function(request,response){
    console.log(i++);
    console.log(__dirname);
    response.sendFile(__dirname+'/index.html');
})

app.post('/', function(req,res) {

    console.log(req.body)
    var num1 = req.body.in1;
    var num2 = req.body.in2;
    // res.send("<h1>Hello, World</h1>")
    var num = num1 + num2;
    res.send("Thanks To Submit "+num)
    console.log('Thanks To Submit')
})

app.listen(3000, function() {

    console.log("Server Working");
});