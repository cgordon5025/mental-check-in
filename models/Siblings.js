const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Siblings extends Model { }

Siblings.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "siblings"
    }
)

module.exports = Siblings