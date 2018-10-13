const app = require('./app/app')
const config = require('./config/config')
const port = config.PORT
app.listen(port, ()=>{
    console.log('Magic happening on port', port)
})