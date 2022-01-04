const { Destination, Crew, Technology } = require('../models')

const getData = async (req, res) => {
  let data

  switch (req.path) {
    case '/destinations':
      data = await Destination.findAll()
      break
    case '/crew':
      data = await Crew.findAll()
      break
    case '/technology':
      data = await Technology.findAll()
      break
  }

  res.json(data)
}

module.exports = { getData }
