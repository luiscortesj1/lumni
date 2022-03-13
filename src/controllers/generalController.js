const db=require('../database/models');
const moment=require('moment');
const Op=db.Sequelize.Op;
const Auto=db.Auto

module.exports={

    index: (req, res) =>{
        
         return res.render('index')
 
     },
     list: async (req, res) =>{
        const registro = await db.Registro.findAll({order:[['fecha','ASC']], include:"autos"});
        
        return res.render('registrosEmpleados', {registro})

    }
     
 }