const Destination = require('../models/destination')

const getDestinations = async (req, res) => {
  const destinations = await Destination.findAll()
  res.json(destinations)
}

module.exports = { getDestinations }
