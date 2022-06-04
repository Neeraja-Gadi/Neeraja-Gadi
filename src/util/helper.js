// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

const  printDate = function(){
    let currentdate= new Date();
    console.log(currentdate);
};

const printMonth =function(){
    let month = ['jan','feb','mar','apr' ,'may', 'jun','jul','aug','sep','oct','nov','dec']
    let currentdate= new Date();
    let currentmonth =currentdate.getMonth()+1;
    console.log(currentmonth)
}  
const getBatchInfo = function () {
    console.log("Radon W3D3, the topic for today is Nodejs Module System")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo