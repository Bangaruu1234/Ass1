/*let arr1 = [1,2,3,4,5];
arr1.forEach((val)=>{
    console.log(val*val);


})
arr1.map((val) => {
    console.log(val);
})
let newArr = arr1.map((val) =>{
    return (val*val);
})
console.log(newArr);*/
let array1 =[ 1,2,3,4,5,6];
let array2 = [];
for (i =0;i<array1.length;i++){
    if(array1[i]%2==0){
        array2[i] = array1.push(i);
    }

}console.log(array2);