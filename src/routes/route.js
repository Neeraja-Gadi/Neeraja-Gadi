const express = require('express');
const router = express.Router();
// **********Q1**********
 router.get('/movies',function(req,res){
     let movies = ['Kgf' , 'Kai puche' ,'pushpa','gangs of waasepur','death in the gunj']
    console.log(movies)
    res.send('movies values returned')
 });

//  ************Q2************
  router.get('/movies/:indexNumber', function(req,res){
    let movies = ['Kai puche','Kgf','pushpa','gangs of waasepur','death in the gunj']
    // for(let i=0 ; i < movies.length ; i++){
    //     if indexNumber =movies.[i]{
        console.log('req  params' + JSON.stringify(req.params))
        console.log('movie name is' + req.params.indexNumber)
    // }
// }
    res.send('returned names acc to indexnumber')
  });

//   *********Q5****************
router.get('/films/:filmId ' function(req,res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let array =
    [ {
     id: 1,
     name: “The Shining”
    }, {
     “id”: 2,
     “name”: “Incendies”
    }, {
     “id”: 3,
     name: “Rang de Basanti”
    }, {
     id: 4,
     “name”: “Finding Nemo”
    }];
    for (let i=0 ; i <array.length ; i++){
      if (i > array.length){
        console.log('No movie exists with this id')
      } else{
        let id = req.query.id
        let name = req.query.name
        console.log('id is '+ id  )
        console.log('name is '+name)
      }
    }
    res.send('return the movie object ')
  })





// const lodash = require('lodash')
// const welcfunc = require('../logger/logger')
// const helpfunc = require('../util/helper')
// const formatterfunc = require('../validator/formatter')
// const router = express.Router();
//  router.get('/test-me' , function(req,res){
//      welcfunc.welcome()
//     helpfunc.printDate() 
//     helpfunc.printMonth()
//     helpfunc.getBatchInfo()
//     formatterfunc.trim()
//     formatterfunc.lowCase()
//     formatterfunc.upcase()
//  });
//  router.get('/hello' , function(req,res){
//     let month = ['jan','feb','mar','apr' ,'may', 'jun','jul','aug','sep','oct','nov','dec']
//     let chunk = lodash.chunk(month,3)
//     console.log(chunk)
//     res.send('chunked to three parts')
// });
// router.get('/hello-1' , function(req,res){

// let odd =[1,3,5,7,9,11,13,15,17,19] ; 
// let tailing = lodash.tail(odd);
// console.log(tailing);
//   res.send('Tailed the odd')
// });

// router.get('/hello-2' , function(req,res){
//     let array =[1,2,3]
//     let arr2 =[3,4,5]
//     let arr3 =[5,6,7]
//     let arr4 = [7,8,9,10];
//     let join = lodash.union(array,arr2,arr3,arr4);
//     console.log(join);
//     res.send('merged with union')
// });

// router.get('/hello-3' , function(req,res){
//     let arr = [['Monster','Rocky'],['Cult','Pushpa'],['Gangster','sadharkhan']]
//     let pairs = lodash.fromPairs(arr)
//     console.log(pairs)
//     res.send('converted to obj')
// });
 module.exports = router;


// ****************************************************
// const externalModule = require('./logger')
// router.get('/test-me', function (req, res) {
//     console.log('The constant in logger route has a value '+externalModule.endpoint)
//     console.log('The current batch is '+externalModule.batch)
//     externalModule.log()
//     res.send('My first ever api!')
// });

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reason