const { DataTypes } = require('sequelize')
const db = require('../database/connection')

const Destination = db.define('Destination', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  image: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  distance: { type: DataTypes.STRING, allowNull: false },
  travel: { type: DataTypes.STRING, allowNull: false },
})

module.exports = Destination
