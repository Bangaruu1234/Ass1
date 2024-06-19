let word = "hello";
for (let i = 0; i <word.length;i++){
    console.log(word[i]);
}
let firstWord = "oops";
let secondWord = "";
for (let i = 0;i<firstWord.length;i++){
    if(firstWord[i]=="p"){
        secondWord=secondWord+"t";
    

    }else{
        secondWord=secondWord+firstWord[i];
    }
}console.log(secondWord);
let n1 = "front end";
let n2 =""
for (let i = 0; i<n1.length;i++){
    

    if(n1[i]!==" "){
        n2 = n2+n1[i]

    
}
}console.log(n2);
let array3 = ["hello", "world","how"];
let sum = 0;
let total=0;
for(let i =0;i<array3.length;i++){
    for(let j =1;j<=array3[i].length;j++){
        sum = j
    }
    total=sum+total
}console.log(total);