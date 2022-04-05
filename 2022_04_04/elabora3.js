const http = require('http')
const fs   = require('fs')

const cssfile = "* { font-family: 'Roboto'}"

const jsfile = "$('p:first').css('color', 'green')\n"
             + "function cambia() {"
             + " $('p:first').css('color', 'blue') \n" 
             + " fetch('nonso') "
             + "   .then(r => r.json()) " 
             + "   .then(b => console.log(b)) }\n"
             + "$('#eatme').on('click', cambia)\n"
             + "$('#eatme').attr('disabled', false)"  

const html = 
"<!doctype html><html><head>"
+ '<link rel="stylesheet" href="finale.css">'
+ '<script src="https://code.jquery.com/jquery-3.6.0.js"></script>'
+ '<script defer src="finale.js"></script>'
+ "</head><body><p>Verifica finale con Node.js</p>"
+ '<button id="eatme" disabled>Eat Me!</button>'
+ "</body></html>"      

let ico = fs.readFileSync('favicon.ico')

function elabora_richiesta(req, res) {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`)
    qe = reqUrl.searchParams.entries()
    console.log('Ho richiesto ' + reqUrl.pathname) 
    switch (reqUrl.pathname) {
      case '/codice.html':
        res.writeHead(200, {
          'Content-Length': html.length,
          'Content-Type': 'text/html' })
        res.end(html)
        break    
      case '/finale.css':
        res.writeHead(200, {
          'Content-Length': cssfile.length,
          'Content-Type': 'text/css' })
        res.end(cssfile)
        break    
      case '/finale.js':
        res.writeHead(200, {
          'Content-Length': jsfile.length,
          'Content-Type': 'javascript' })
        res.end(jsfile)
        break    
      case '/favicon.ico':
        res.writeHead(200, {
          'Content-Length': ico.length,
          'Content-Type': 'image/x-icon' })
        res.end(ico) 
        break
      case '/nonso':
        let myJson = '{"x":15,"y":20}'    
        res.writeHead(200, {
          'Content-Length': myJson.length,
          'Content-Type': 'application/json, charset="utf-8"' })
        res.end(myJson) 
        break
            
      default:      
        let body = '' 
        for(let e of qe) {
          body += '\n' + e[0] + '(' + e[1] + ')' 
        }      
        res.writeHead(200, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain' })
        res.end(body) 
      }
    }
    
setTimeout(process.exit, 30000)    
let s = http.createServer(elabora_richiesta)
s.listen(4000, '0.0.0.0')
