var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article One | Thilak Chander',
        heading:'Article One',
        date:'16 August 2017,8.00pm',
        content:'<p>This is my content served by Article One.</p>'
},
    'article-two':{
        title:'Article Two | Thilak Chander',
        heading:'Article Two',
        date:'16 August 2017,9.00pm',
        content:'<p>This is my content served by Article Two.</p>'
    },
    'article-three':{
        title:'Article Three | Thilak Chander',
        heading:'Article Three',
        date:'16 August 2017,10.00pm',
        content:'<p>This is my content served by Article Three.</p>'
    }
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate =`<html>
<head>
<title>
${title}
</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="mass">
<div>
<a href="/">Home</a>
</div>
<div>
<h3>${heading}</h3>
</div>
<div>
<p>${date}</p>
</div>
<div>
${content}
</div>
</div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;    
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
