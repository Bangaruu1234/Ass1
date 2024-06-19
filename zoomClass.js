const square = function(number){
    return number*number;
}
console.log(square(4));


// invoked function expression
(
     function(param){
        console.log(param*param);
    }(4)
)