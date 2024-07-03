const express = require('express');
const app = express();

let courses = [ 
    { id : 1, name: "java"},
    { id : 2, name : "javascrpit"},
    { id : 3, name : "python"},
];

app.get('/courses',(req, res)=> {
    res.json(courses);
});

   app.listen(3000, ()=> {
    console.log('server is running on port 3000');

   });


