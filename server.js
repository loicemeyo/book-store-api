const app = require('./app/app')
const config = require('./config/config')

const { port } = config
app.listen(port, () => {
  console.log('Magic happening on port', port)
})
