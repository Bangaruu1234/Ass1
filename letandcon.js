/*const Pen ={
    name : ballpoint,
    colour : black,
    price : 250


};
console.log(Pen["name"]);
console.log(typeof (Pen.price));*/

/*let marks = [ 90,89,78,80];
let x = 0;
    console.log(marks.length);
console.log(marks[3]);

for(i=0,i<marks.length,i++) 
    {
    
     x = x+ marks[i];
     console.log(x);
     
}*/
/*m = 0;
for ( let val of Marks)
{
    sum+=val;
    
}
console.log(sum);
let avg = sum/Marks.length;
console.log(avg);*/

 



/*let Companies = ["Boomberg","Microsoft","Uber","Netflix","Google","IBM"];

 Companies.shift();
 console.log(Companies);
 Companies.splice(2,1,"OLA");
 console.log(Companies);
 Companies.push("Amazon");
console.log(Companies);*/

function noOfVowels(str){
    let x = 0;
    for( let char of str)
{
    if (char === a || char === e|| char === i || char === o|| char === u){
        x++;
    }
}    console.log(x);

}
noOfVowels("wanted");
