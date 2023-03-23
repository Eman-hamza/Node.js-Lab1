var Sub = function(num1,num2) {
    if(isNaN(num1) || isNaN(num2)){
        return('Must be  Only'); 
    }
    else{
        let sub;
    
        if(num1>num2){
             sub=num1-num2;
        }
        else
        sub=num2-num1;
        console.log('sub number = ',sub);
    }
}
module.exports = Sub;