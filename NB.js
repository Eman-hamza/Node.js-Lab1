var ShowAgeBirth=function(name,BirthDate)
{
    const curruntDate=new Date();
    const Difference=curruntDate.getFullYear()-BirthDate.getFullYear();

    if(Difference <0)
    {
        throw new Error('Invalid');
    }
    else
    {return `Hello ${name},your age now is : ${Difference}`};
    
}

module.exports={
    showAge:ShowAgeBirth
}