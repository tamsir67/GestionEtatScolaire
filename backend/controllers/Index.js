import Employees from "../models/EmployeeModel.js";
import Professeurs from "../models/ProfesseurModel.js";
import Etudiants from "../models/EtudiantModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getEmployees = async(req, res) => {
    try {
        const employees = await Employees.findAll({
            attributes:['id','name','fonction', 'adresse', 'telephone', 'salaire']
        });
        res.json(employees);
    } catch (error) {
        console.log(error);
    }
}
 
export const addEmployee = async(req, res) => {
    const { name, fonction, adresse, telephone, salaire } = req.body;
    try {
        await Employees.create({
            name: name,
            fonction: fonction,
            adresse: adresse,
            telephone: telephone,
            salaire: salaire
        });
        res.json({msg: "Création avec Succès"});
    } catch (error) {
        console.log(error);
    }
}
