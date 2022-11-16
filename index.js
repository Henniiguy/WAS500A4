const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

http.createServer(function (req, res) {

    let currentdate = new Date(); 
    let datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log(`Request received for page ${req.url} on  ${datetime}`);
    if (req.url === "/") {
        fs.readFile("./views/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
    else if (req.url === "/index.html") {
        fs.readFile("./views/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
    else if (req.url === "/books.html") {
        fs.readFile("./views/books.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
    else if (req.url === "/book1.html") {
        fs.readFile("./views/book1.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    } 
     else if (req.url === "/book2.html") {
        fs.readFile("./views/book2.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
    else if (req.url === "/book3.html") {
        fs.readFile("./views/book3.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
    else if (req.url.match("\.jpg$")) {
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {
            "Content-Type": "image/jpeg"
        });
        fileStream.pipe(res);
    } 
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }
    
    else {
         console.log(`Request for page ${req.url} could not be found on the server.  ${datetime}`);
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end("No Page Found");
    }

}).listen(port);
console.log(`Server has started and running on: http://localhost:${port}`);