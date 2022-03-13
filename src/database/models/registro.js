/**
 * Metodo creacion modelo Movie
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/dist').DataTypes} DataTypes 
 */

 module.exports=(Sequelize,DataTypes)=>{
    const Registro=Sequelize.define(
        'Registro',
        {
            id_registro:{
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            id_auto:{type: DataTypes.INTEGER(11)},
            fecha:{type: DataTypes.DATE},
            cantidad:{type: DataTypes.INTEGER(10)}
            

            
        },
        {
            tableName: "registros",
            timestamps:false
        }
        );
        
        Registro.associate= function(models){
            Registro.belongsTo(models.Auto,{
                as:"autos",
                foreignKey:"id_auto"
            })
        }

        return Registro;
   }