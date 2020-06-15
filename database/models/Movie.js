module.exports = (sequelize, dataTypes) =>{
   let alias = 'Movies';
   let cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,

       },
       title:{
        type: dataTypes.STRING,

       },
       awards: {
        type: dataTypes.INTEGER,

       },
       length: {
        type: dataTypes.INTEGER,
           
       },
       release_date: {
        type: dataTypes.DATE,
       }


   };
   let config = {
    tableName: 'movies',
    timestamps: false
   }


    const Movie = sequelize.define(alias, cols, config);

    return Movie;
} 