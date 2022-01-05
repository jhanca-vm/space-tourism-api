const notFound = (req, res) => {
  res.status(404).send('<br><center><h3>404 | Not Found</h3></center>')
}

module.exports = notFound
