
function monthlySavings(array, rent){
    if(Array.isArray(array)==false || (typeof rent !== "number")) return "Invalid input";
    let sum = array.reduce((a,b) => a+b,0);
    let tax = 0;
    array.forEach(
        function(amount){
            if(amount >= 3000){
                tax += amount * 0.2;
            }
        }
    )
    const saving = sum - tax - rent;
    // console.log(`Total Income: ${sum}, Total Tax: ${tax}, saving: ${saving}`);
    return saving >= 0 ? saving : "Earn More";
}

let array = [1000,2000,3000];
let result = monthlySavings(array, 5400);
console.log(result);


let array1 = [1000,2000,2500];
const result1 = monthlySavings(array1, 5000);
console.log(result1);


let array2 = [900,2700,3400];
const result2 = monthlySavings(array2, 10000);
console.log(result2);


let array3 = 100;
const result3 = monthlySavings(array3, [900,2700,3400]);
console.log(result3);