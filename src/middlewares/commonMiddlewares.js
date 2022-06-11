
const middleware1= function ( req, res, next) {
    let timestamp = new Date() ;
    let IP =req.IP
    let route  = req.url
    console.log({timestamp} , {IP} ,{route} )
    next()
}


module.exports.middleware1= middleware1
