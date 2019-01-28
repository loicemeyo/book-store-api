const logger = require('fancy-log')
const app = require('./app/app')
const config = require('./config/config')

const { port } = config
app.listen(port, () => {
  logger.info('Magic happening on port', port)
})
