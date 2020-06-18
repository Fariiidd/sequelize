let db = require('../database/models');
let Op = db.sequelize.Op;

let moviesControllers =  {
   list: function(req, res){
    db.Movies.findAll()
       .then(function (movies){
           res.render("listMovies", {movies: movies});
       })
   },

   detailMovie: function(req, res){
       db.Movies.findByPk(req.params.id)
       .then(function(movie){
           res.render('detailMovie', {movies: movie});
       })
   },

   newMovie: function(req, res){
       db.Movies.findAll({
           order:[
               ['release_date', 'DESC'],
           ],
           limit: 5
       })
       .then(function(premieres){
           res.render('newMovies', {movies: premieres})
       })
   },

   searchMovie: function(req, res){
       db.Movies.findAll({
           where: {
               title: {[Op]: '%'+ req.body.search +'%'},
               order: [
                  ['title', 'ASC'],
               ]
           }
       })
       .then(function(result){
           if(result =! ''){
            res.render('listMovies', {movies: result});
           }
    })
       .catch(function(error){
           console.error(error);
           
       })
   }


}

module.exports = moviesControllers;