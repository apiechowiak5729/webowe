import {readFile} from 'fs/promises'
const srv = http.createServer(async (req, res) => {
 const url = req.url
 if (url === '/') {
 res.statusCode = 200
 const html = await readFile('./home.html')
 res.setHeader('content-type', 'text/html')
 res.write(html)
 res.end()
 } else {
 //…
 }