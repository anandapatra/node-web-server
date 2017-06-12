const express = require('express');
const hbs = require('hbs'); // view engine for express

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials'); // registering pertials to handlebar template
app.set('view engine', 'hbs'); // forcing express to use hbs as a view engine


hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});


// using express middleware
// the middleware is going to run before any other routes invokes.
// app.use((req, res, next)=> {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
//  res.send('<h1>Hello Express!</h1>');

    res.render('home.hbs', {
      pageTitle: 'Some WebSite',
      pageheader: 'Home Page',
      greeting: 'Welcome to Home Page'

    });

});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Some WebSite',
    pageheader: 'About Page'
  });
});

app.get('/bad', (req, res) =>{
  res.send({
    errorMessage: 'BAD REQUEST, 404 NOT FOUND'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
