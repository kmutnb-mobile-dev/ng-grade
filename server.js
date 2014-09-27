var port = 4000;
var express = require('express');
var app = express();
app.use(express.static('.'));
app.listen(port);
console.log("\nhttp://127.0.0.1:"+port+"\n");
