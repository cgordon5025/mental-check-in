const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Parents extends Model { }

Parents.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        // family_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "family",
        //         key: "id"
        //     }
        // }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "parents"
    }
)

module.exports = Parents