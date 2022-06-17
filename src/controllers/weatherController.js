let axios = require("axios")
let express = require("express")


// const getWeather = async function (req, res){
//     try{
//         let location = req.query.q ;
//     let appid = req.query.appid ;

//     let options = {
//         method : "get" ,
//         url : `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`
//     }
//     let output = await axios(options) 
//     res.status(200).send({data: output.data})
//     }
//     catch(err){
//         res.status(500).send({msg : err.message})
//     }
// }

const getWeather = async function (req, res) {
    try {
        let location = req.query.q;
        let appid = req.query.appid;

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`
        }
        let output = await axios(options)
        let temp = output.data.main.temp;
        res.status(200).send({ temperature: temp, city: location })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
// *****************************************************************
const getCitiesSorted = async function (req, res) {
    try{
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
    let citiesRay = [];
    let city;
    for (i = 0; i < cities.length; i++) {
        city = { city: cities[i] };
        // console.log(city)
        let appid = req.query.appid;

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
        }
        let output = await axios(options)
        // console.log(output.data.main.temp)
        city.temp = output.data.main.temp;
        // console.log(city.temp)
        citiesRay.push(city)
    }
    console.log(citiesRay)

    let citiesSorted = citiesRay.sort((a, b) => a.temp - b.temp)
    res.status(200).send({ status: true, data: citiesSorted })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}
// ***********************************************************
const getmemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ***************************************************************

const postmeme = async function (req,res) {
    try {
        let memeId = req.query.template_id ;
        let txt0 = req.query.text0 ;
        let txt1 = req.query.text1 ;
        let user = req.query.username ;
        let passlock = req.query.password ;
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${txt0}&text1=${txt1}&username=${user}&password=${passlock}`
        }
        
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }}

    // template_id <meme_id>
    // text0 <text you want as a caption>
    // text1 <optional>
    // username thurstycat
    // password K.C7AC!ag+-LdUv


module.exports ={ getCitiesSorted ,getWeather , getmemes ,postmeme}
