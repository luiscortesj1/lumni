const db=require('../database/models');

const Op=db.Sequelize.Op;
const Auto=db.Auto
module.exports={

    list: async (req, res) =>{
        const registro = await db.Registro.findAll({order:[['fecha','ASC']], include:"autos"});
        
        return res.render('registrosList', {registro})

    },
    new:async(req,res) =>{
        
        const auto = await db.Auto.findAll();
        let  fechaActual = new Date();
        console.log(fechaActual);
        return res.render('newRegist',{auto});
       
    },
    add: async(req,res) =>{
        await  db.Registro.create({
            id_auto:req.body.id_auto,
            cantidad:req.body.cantidad,
            fecha: req.body.fecha
        })
        return res.redirect('/registros')
    }
}