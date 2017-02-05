var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')) ;
    
    
});

var counter = 0;
app.get('/counter' ,function(req,res){
    counter ++;
    res.send(counter.toString());
});





app.get('/:articleName',function(req,res){
   
   var articleName = req.params.articleName;
   
 res.send(createTemplate(articles[articleName]));
   
   
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articles= {
    
    'article-one' : {
    title : ' Article One | Darshita Jain',
    heading: 'Article One',
    date : ' 5 Feb , 2017',
    content : `
            <p>
                IMAD (Introduction to Modern Application Development) is a MOOC on how to build web/mobile applications offered by Hasura & IIT Madras.
            </p>
            <p>
                If you just want to experience the joy of building an app, or have dreams of finding a job at one of the hottest tech companies or actually building one or just understand the app world that you cannot escape, you have come to the right place!
           </p>
           <p>
               This online course will bring together a combination of theory and practice to convey the principles of building web applications.
           </p>`},
           
   'article-two' : {
    title : ' Article Two | Darshita Jain ',
    heading: 'Article Two',
    date : ' 10 Feb , 2017',
    content : `
            <p>
                This is the content of Article-two !
            </p>
           `},
  'article-three' : {
       title : ' Article Three | darshita Jain',
    heading: 'Article Three',
    date : ' 14 feb , 2017',
    content : `
            <p>
                 This is the content of Article-three !
            `}
           
        
        
};     
    


function createTemplate(data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
        <h3> ${heading} </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
          </div>
        </div>
    </body>
</html>` ;

return htmlTemplate;
}

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
