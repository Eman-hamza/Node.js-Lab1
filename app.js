//--q1
// var op=require('./operator');
// op.SUM(1,5);
// op.MULTI(1,4);
// op.SUB(5,8);

// try{
// console.log(op.SUM('A',3));
// }
// catch(error){
// console.error(error);
// }


//--q2
var Birthdate=require('./Q2/NB');

try{
    var YourAge=Birthdate.showAge('Eman',new Date(2000,11,24));
    console.log(YourAge);
}
catch(error)
{
    console.error(error.message);
}