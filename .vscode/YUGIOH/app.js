/**2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an 
 * array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting 
 * array to the console then returns the resulting array.
 * 
Note:
- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"
- perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter
 - i.e. a string that can't be converted to a number or another data type - is passed. 
Use the following cases as guides:
- checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
- checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
- checkYuGiOh("fizzbuzz is meh")
 should return `invalid parameter: "fizzbuzz is meh"` */
function checkYuGiOh(n){
    if(typeof n === "number"){
        var Response = ans(n);
        return Response;
    }
    if(typeof n === "string"){
        var val = parseInt(n);
        if(isNaN(val)){
            return `invalid parameter:"${n}"`
        }
        else if (!isNaN(val)) {
            var answer = ans(val);
            return answer; 
        }
        
    }
    if (typeof n === "boolean" || typeof n === "object" || typeof n === "undefined" ||
    Array.isArray (n) || typeof n ==="function"){
        var content = JSON.stringify(n);
    }
};
//the end of checkyugioh function 

//begining of able function

function ans(num){
    var ary = [];
    for (var i=1; i<= num; i++){
        if (i % 2 === 0 && i % 3 == 0 && i % 5 === 0){
            ary.push("Yugioh");
        }
        else if (i % 2 === 0 && i % 3 === 0){
            ary.push("yu-gi");
        }
        else if (i % 2 === 0 && i % 5 === 0){
            ary.push("yu-oh")
        }
        else if ( i % 3 === 0 && i % 5 === 0){
            ary.push("gi-oh");
        }
        else if(i % 2 === 0 ){
            ary.push("yu")
        }
        else if(i % 3 === 0 ){
            ary.push("gi")
        }
        else if(i % 5 === 0 ){
            ary.push("oh")
        }
        else{ary.push(i)}
    }
    return ary;
}
console.log(checkYuGiOh(29));
console.log(checkYuGiOh("29"));
console.log(checkYuGiOh("olams"));
console.log(checkYuGiOh([1,2,3,4]));
console.log(checkYuGiOh({name: "olams", age: 20}));