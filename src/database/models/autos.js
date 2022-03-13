/**
 * Metodo creacion modelo Movie
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/dist').DataTypes} DataTypes 
 */

 module.exports=(Sequelize,DataTypes)=>{
    const Auto=Sequelize.define(
        'Auto',
        {
            id:{
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            nombre:{type: DataTypes.STRING(100)},
            tiempo:{type: DataTypes.INTEGER(100)}
            

            
        },
        {
            tableName: "autos",
            timestamps:false
        }

        );

        Auto.associate = function(models) {
            Auto.hasMany(models.Registro, { // models.Movies -> Movie es el valor de alias en movie.js
                as: "registros", // El nombre del modelo pero en plural
                foreignKey: "id_auto"
            })
        }
        return Auto;
   }