const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static('public'))

app.use('/images', require('./routes/image'))
app.use('/api', require('./routes/api'))

app.use(require('./middlewares/notFound'))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})
