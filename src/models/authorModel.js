const mongoose = require( "mongoose");

const authorSchema = new mongoose.Schema ({
    
    author_id: Number ,
    author_name : {
        type : String ,
        require : true 
    } ,
    age: Number ,
    address: String

}) ;
module.exports = mongoose.model("InfoAuthor" , authorSchema)