const express = require('express');
const router = express.Router();
// **********Q1****************
 router.get('/movies',function(req,res){
     let movies = ['Kgf' , 'Kai puche' ,'pushpa','gangs of waasepur','death in the gunj']
    console.log(movies)
    res.send('movies values returned')
 });

//  ************Q2************
  router.get('/movies/:indexNumber', function(req,res){
    let movies = ['Kai puche','Kgf','pushpa','gangs of waasepur','death in the gunj']
   let x = req.params.indexNumber
    // if (req.params.indexNumber == movies[i]){
        console.log('req  params' + JSON.stringify(req.params))
        console.log('movie name is' +" " + req.params.indexNumber)
        console.log(movies[x])

        res.send('returned names acc to indexnumber')
  });

// //   ****************Q3.***************
router.get('/moviesinfo/:indexNumber', function(req,res){
    let movies = ['Kai puche','Kgf','pushpa','gangs of waasepur','death in the gunj']
    let x = req.params.indexNumber
    if (req.params.indexNumber < movies.length){
        console.log(movies[x])
    } else{
        console.log('Error: Enter valid request')
    }
    res.send('return indexnumber or error')
  });

// // ***********Q4***********
//  router.get('/films' , function(req,res){
//     let array =
//     [ {
//      'id': 1,
//      'name': 'The Shining'
//     }, {
//      'id': 2,
//      'name': 'Incendies'
//     }, {
//      'id': 3,
//      'name': 'Rang de Basanti'
//     }, {
//      'id': 4,
//      'name': 'Finding Nemo'
//     }]
//     console.log(array) ;
//     res.send('Return the entire array')
// });
router.get('/films', function(req,res){
    const films =  [ {
          "id": 1,
          "name": "The Shining"
         }, {
          "id": 2,
          "name": "Incendies"
         }, {
          "id": 3,
          "name": "Rang de Basanti"
         }, {
          "id": 4,
          "name": "Finding Nemo"
         }]
      res.send(films)      
  });

// //   *********Q5****************
router.get('/films/:filmId ' , function(req,res){
    // console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let array =
    [ {
     id: 1,
     name: 'The Shining'
    }, {
     'id': 2,
     'name': 'Incendies'
    }, {
     'id': 3,
     name: 'Rang de Basanti'
    }, {
     id: 4,
     'name': 'Finding Nemo'
    }];
    let x =req.query.filmId
    for (let i=0 ; i < array.length ; i++){
      if (req.params.filmId <= array.length && req.params.filmId !==0){
        console.log('No movie exists with this id ')
      } else {
        let id = req.query.id
        let name = req.query.name
        console.log('id is '+ id  )
        console.log('name is '+name)
        console.log(array[x])
      }
    }
    res.send('return the movie object ')
  }) ;

module.exports = router;


