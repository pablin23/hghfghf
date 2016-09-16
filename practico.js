var express= require('express');
var app= express();
var path=require('path');
app.use(express.static(__dirname+'/public'));

app.get('/',function(request,response){
 response.sendFile(path.join(__dirname+'/index.html'))

})

app.get('/pagina1',function(request,response){
 response.sendFile(path.join(__dirname+'/pagina1.html'))
 })

app.get('/user',function(request,response){
 response.send({username:'pablo',password:'pablo1234'});
})

app.get('/pagina2',function(request,response){
 response.sendFile(path.join(__dirname+'/pagina2.html'))
})
app.listen(3000,function(){
console.log('servidor corriendo en el puerto 3000');

})