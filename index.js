const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: 'public/recursos/',
})

const app = express()
app.set('port', process.env.PORT || 8080)

app.use(multer({
    storage : storage,
    dest: 'public/recursos/',
    limits: {fileSize: 10000000}
}).single('avatar'))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw({type: 'image/*', limit: '10mb'}))
app.use('/', routes)

const server = app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo')
});
server.setTimeout(30000);

