const stuInfo=(req,res)=>{
    res.send("this is student information");
}

const stuFees=(req,res)=>{
    res.send("this is student fees");
}

const stuResult=(req,res)=>{
    res.send("this is student result");
}

module.exports={
    stuInfo,
    stuFees,
    stuResult
}

