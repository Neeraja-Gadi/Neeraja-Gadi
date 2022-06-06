// Assignment on get api and Post api

// Q1:-write an api which gives the missing number in an array of 
// integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

const express = require('express') ;
const app = express.Router() ;
const router =express.Router() ;

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7];
    let sum = 0;
    for (i=0; i<arr.length ; i++){
        sum = sum+arr[i]
    }
    let n= arr.pop();
    let consecutivesum = n*(n+1)/2;
    let missingNumber = consecutivesum-sum ;

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});
 module.exports = app


//  **********************************
// q-2-write an api which gives the missing number
//  in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 
// 36 is missing
app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let missingNumber =0 ;
    let n= arr.length;
    for (i=0; i<arr.length ; i++){
        if(arr[i+1] - arr[i] >1){
            missingNumber= arr[i]+1
        }
    }
    res.send({data: missingNumber})
    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

// ****************************************************************
// ASSIGNMENT OF POST API
// q-3 
// Write a POST /players api that creates a new player

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post('/players' , function(req,res){
    let newplayer = req.body
    let nameunique =true ;
    for (i=0; i< players.length ; i++){
        if(newplayer.name == players[i].name){
            nameunique = false;
        }
        if(newplayer.name == ''){
            nameunique = false
            res.send('Payer with the name already exist')
        }
        if( nameunique = true) {
            players.push(newplayer);

        }
        res.send({data : players ,status:  true})

    }
    
})
module.exports = router ;