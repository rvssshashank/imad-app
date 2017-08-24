var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool= reqire(pg).Pool;
var pool = new Pool({
  user: 'rshashi57r',
  host: 'db.imad.hasura-app.io',
  database: 'rshashi57',
  password: process.env.DB_PASSWORD,
  port: 54321,
});

var app = express();
app.use(morgan('combined'));

var articles ={
'article-one': {
    title: 'articleone',
    heading: 'My article',
    date: 'aug 23rd, 2017',
    content:   `<P>
                    This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living.
                </P>
                <p>
                       This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living.
                </p>`
},
'article-three':{
    title: 'article-three',
    heading: 'My article',
    date: 'aug 25rd, 2017',
    content:   `<P>
                    This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living.
                </P>
                <p>
                       This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living. This is My article. Aspire for a difference not a living.
                </p>`
}
};

function createTemplate(data){
var title= data.title;
var date= data.date;
var heading= data.heading;
var content = data.content;
var htmlTemplate= 
    `<html>
        <head>
            <title>${title}</title>
                <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class= tot>
                <a href="/"><h3>Home</h3></a> 
                    <div class=content>
                        <h3 class=heading>${heading}</h3>
                        <div>
                         ${date}
                        </div>
                        <div>
                        ${content}
                        </div>
                    </div>
            </div>
        </body>
    </html>
`;   
return htmlTemplate;
}

app.get('/test_db',funtion(req,res){
    //make a select request
    //return a response with results
    pool.query('SELECT * FROM test', function(err, result)
    {if(err){
        res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*app.get('/article-one', function (req, res) {
  res.send(createTemplate(article-one));
});*/

app.get('/:articleName', function (req, res)
//articleNmae== article-one
{
    var articleName= req.params.articleName;
  res.send(createTemplate(articles[articleName]));
  // articles[articlaName]= {}content objects for article-one
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

/*app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
