const { DataTypes } = require('sequelize')
const db = require('../database/connection')

const Crew = db.define('Crew', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  image: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.STRING, allowNull: false },
})

module.exports = Crew
