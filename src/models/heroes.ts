import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../mysql/sequelize'

class Heroes extends Model{}

Heroes.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poder: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Heroes',
        tableName: 'heroes',
        timestamps: false
    }
)

export default Heroes