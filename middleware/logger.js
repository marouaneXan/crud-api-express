const logger=(req,res,next)=>{
    console.log('hello')
    next()
}

module.exports=logger