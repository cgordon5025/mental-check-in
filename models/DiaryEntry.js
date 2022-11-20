const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class DiaryEntry extends Model { }

DiaryEntry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
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
        // diary_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "diary",
        //         key: "id"
        //     }
        // }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "diaryEntry"
    }
)
module.exports = DiaryEntry