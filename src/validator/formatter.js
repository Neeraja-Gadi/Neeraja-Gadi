const trim =function(){
    let strip= 'functionUp'.trim()
    console.log(strip)
}
const lowCase = function(){
    let tolower = "functionUp".toLowerCase()
    console.log(tolower)
}
const upcase = function(){
    let toup = 'functionUp'.toUpperCase();
    console.log(toup)
}
module.exports.trim = trim;
module.exports.lowCase=lowCase;
module.exports.upcase=upcase;