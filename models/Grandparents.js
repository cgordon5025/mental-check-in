const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Grandparents extends Model { }

Grandparents.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        relation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        family_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "family",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "grandparents"
    }
)

module.exports = Grandparents