import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Employees = db.define('employee',{
    name:{
        type: DataTypes.STRING
    },
    fonction:{
        type: DataTypes.STRING
    },
    adresse:{
        type: DataTypes.STRING
    },
    telephone:{
        type: DataTypes.STRING
    },
    salaire:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Employees;