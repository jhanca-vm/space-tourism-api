const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use('/images', require('./routes/image'))
app.use('/api', require('./routes/api'))

app.listen(port, async () => {
  console.log(`Listening on http://localhost:${port}/`)
})
