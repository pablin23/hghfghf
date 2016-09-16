var express=require('express');
var app = express();
var path= require('path');

app.get('/',function(request,response){
response.send('<h1>hola Mundo desde Express</h1>');

})
app.get('/pagina1',function(request,response){
 response.sendFile(path.join(__dirname+'/pagina1.html'))
})
app.listen(3000,function(){
console.log('servidor corriendo 3000');
})