function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);
/*
When console.log("world"), return will be "Hello";
Since we set the variable word = the function;
console.log(word) will console.log("world") which will returned "Hello"
Answer: "Hello"
*/

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);
/*
(for result1)
"Summing Numbers!"
"num1 is: 3"
"num 2 is: 5"

(for result2)
"Summing Numbers!"
"num1 is: 4"
"num 2 is: 7"

console.log(result1): we have 3,5, since sum = num1 +num2 => sum = 3+5 = 8;

console.log(result2): we have 4,7, since sum = num1 +num2 => sum = 4+7 = 11;
*/

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

/*
I think this function get a problem with the "num" value.. 
since it does not give value, this function can't be working.
however, I will give a value to it so the function can work.
so let var num = 6;
then we will have
0 <6 = 0
1 < 6 = 1
2 < 6 = 2
3 < 6 = 3
4 < 6 = 4
5! i == 5 => "High Five!"
6 is not < 6, break.
*/
