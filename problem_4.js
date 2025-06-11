

function checkLeapYear(num){
    if((num % 4 == 0 && num % 100 != 0) || (num % 400 == 0)){
        console.log(`${num} is a Lear year`);
    }
    else{
        console.log(`${num} is not a Leap year`);
    }
}

checkLeapYear(2020);
checkLeapYear(2024);
checkLeapYear(2025);