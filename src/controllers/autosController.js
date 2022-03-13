const db=require('../database/models');
const Op=db.Sequelize.Op;

module.exports={

    index: (req, res) =>{
       
        return res.render('indexAdmin')

    },
    listAutos: async (req, res) =>{
        const autos = await db.Auto.findAll();
        return res.render('autosList', {autos})

    },
    new:(req, res) =>{
        return res.render('newAuto')
    },
    
    add:async(req, res) =>{
     await  db.Auto.create({
            nombre:req.body.nombre,
            tiempo:req.body.tiempo
        })
        return res.redirect('/admin/autos')
    },
    edit: async (req, res)=>{
        const id=req.params.id;
        const auto = await db.Auto.findByPk(id);
        return res.render('autosEdit',{auto})
    },
    update:async(req, res)=>{
        let autoId =req.params.id;
        await db.Auto.update({
            nombre:req.body.nombre,
            tiempo:req.body.tiempo
        },{where:{id:autoId}})

        return res.redirect('/admin/autos')
    },
    
    delete:async(req, res)=>{
        let id = req.params.id
       let auto=await db.Auto.findByPk(id);
       return res.render('autosDelete',{auto})
    },
    destroy:async(req, res)=>{
        let id = req.params.id
       await db.Auto.destroy({where: {id: id},force: true});
       res.redirect('/admin/autos')
    }
    
}