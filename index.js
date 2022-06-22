const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/styles'));

app.get('/', (req, res)=>{
   res.render('home')
});

app.get('/portfolio', (req, res)=>
{
   res.render('portfolio')
});
app.get('/about', (req, res)=>
{
   res.render('about')
});



const port = process.env.PORT || 4500;
app.listen(port, ()=>{
   console.log("server running on port "+port)
});