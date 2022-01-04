const { DataTypes } = require('sequelize')
const db = require('../database/connection')

const Technology = db.define('Technology', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  images: { type: DataTypes.JSON, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
})

module.exports = Technology
