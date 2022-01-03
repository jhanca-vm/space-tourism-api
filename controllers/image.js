const path = require('path')

const getImage = (req, res) => {
  res.sendFile(req.originalUrl, { root: path.resolve('./') }, error => {
    if (error) res.sendStatus(404)
  })
}

module.exports = { getImage }
