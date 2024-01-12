import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Professeurs = db.define('professeur',{
    name:{
        type: DataTypes.STRING
    },
    matieres:{
        type: DataTypes.STRING
    },
    adresse:{
        type: DataTypes.STRING
    },
    telephone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Professeurs;