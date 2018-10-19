const express = require('express');

//setup express app

const app = express();

app.get('/',function(){
	console.log('get request');
});

//listen for request 
app.listen(process.env.port || 4000,function(){
	console.log('listening of port:',process.env.port);
});
