var Multi = function(num1,num2) {

    if(isNaN(num1) || isNaN(num2)){
        return('Must be  Only');
    }
    else{
        let multi=num1*num2;
        console.log('sub number = ',multi);
    }
}
module.exports = Multi;