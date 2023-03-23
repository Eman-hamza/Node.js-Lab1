var Add = function(num1,num2) {
    if(isNaN(num1) || isNaN(num2)){
        return('Must be  Only');
    }
    else{
    let sum = num1 + num2 ;
	console.log('sum number = ',sum);
    }
}
module.exports = Add;