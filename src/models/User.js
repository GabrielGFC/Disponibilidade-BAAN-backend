import { DataTypes } from 'sequelize';
import db from '../config/dbConnect.js';

const User = db.define(
    'User', 
    {
        saram:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nomeComplt:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nomeGuerra:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        esquadrao:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        secao:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        especialidade:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cargo:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [[1, 2]] // Aceita apenas os valores 1, 2 e 3
            }
        },
        
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }
);

// Mapeamento dos valores do campo cargo para os tipos de cargos correspondentes
User.getCargoName = function(cargo) {
    switch (cargo) {
        case 1:
            return 'Administrador';
        case 2:
            return 'Soldado';
        case 3:
        default:
            return ''; // ou 'cargo inválido'
    }
};

export default User;