const http = require('http')
const port = 3200
const server = http.createServer((req,res) =>{
    // http header
    res.writeHead(200, {'Content-Type': 'text/Html'});
    let url = req.url;
    if(url --- '/about'){
        res.end('<h1>This is about us</h1>')
    } else if(url === '/contact'){
        res.end('<h1>This is our contact</h1>')
    } else {
        
        res.end('<h1>Hello, World</h1>')
    }
    
} );
server.listen(port,() =>{
    console.log(`server listening on port ${port}`);
})



