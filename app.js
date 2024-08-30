// 10 tasks

// task 1

{
    let dayNumber = 2;
    let dayName;

    switch (dayNumber){
        case 1:
            dayName = "Dushanba"
            break;
        case 2:
            dayName = "Seshanba"
            break;
        
        case 3:
            dayName = "Chorshanba"
            break;
        case 4:
            dayName = "Payshanba"
            break;
        case 5:
            dayName = "Juma"
            break;
        case 6:
            dayName = "Shanba"
            break;
        case 7:
            dayName = "Yakshanba"
            break;
        
        default:
            dayName = 'Invalid day'
    }
    
    console.log(`bugun: ${dayName}`);
}


// task 2
{
    let scoreNum = 4
    let score;

    switch (scoreNum){
        case 1:
            score = 'yomon'
            break;
        case 2:
            score = 'qoniqarsiz'
            break;
        case 3:
            score = 'qoniqarli'
            break;
        case 4:
            score = 'yaxshi'
            break;
        case 5:
            score = 'alo'
            break;
        default:
            score = 'xato'
    }
    console.log(`natijangiz: ${score}`);
}

// task 3
{
    let Month = 8;
    let season;

    switch (Month){
        case 1:
            season = 'qish'
        case 2:
            season = 'qish'
            break;
        case 3:
            season = 'baxor'
        case 4:
            season = 'baxor'
        case 5:
            season = 'baxor'
            break;
        case 6:
            season = 'yoz'
        case 7:
            season = "yoz"
        case 8:
            season = "yoz"
            break;
        case 9:
            season = "kuz"
            
        case 10:
            season = "kuz"
        case 11:
            season = "kuz"
            break;
        case 12:
            season = "qish"
    }
    
    console.log(`oyning fasli: ${season}`);
}

// task 4
{
    let month = 4
    let monthNum;

    switch (month){
        case 1:
            monthNum = 31;
            break;
        case 2:
            monthNum = 28;
            break;
        case 3:
            monthNum = 31;
            break;
        case 4:
            monthNum = 30;
            break;
        case 5:
            monthNum = 31;
            break;
        case 6:
            monthNum = 30;
            break;
        case 7:
            monthNum = 31;
            break;
        case 8:
            monthNum = 31;
            break;
        case 9:
            monthNum = 30;
            break;
        case 10:
            monthNum = 31;
            break;
        case 11:
            monthNum = 30;
            break;
        case 12:
            monthNum = 31;
            break;
    }
    console.log(`oyning kunlari: ${monthNum}`);
}

// task 5
{
    let a = 20
    let b = 30
    let operator = 4
    let sum;

    switch (operator){
        case 1:
            sum = a + b
            break;
        case 2:
            sum = a - b
            break;
        case 3:
            sum = a / b
            break;
        case 4:
            sum = a * b
            break;
    }

    console.log(sum);
}

// task 6

{

let unit = 5
let length = 5.0;

let lengthInMeters;

switch (unit) {
    case 1:
        lengthInMeters = length / 10;
        break;
    case 2:
        lengthInMeters = length * 1000;
        break;
    case 3:
        lengthInMeters = length;
        break;
    case 4:
        lengthInMeters = length / 1000;
        break;
    case 5:
        lengthInMeters = length / 100;
        break;
    default:
        console.log("Invalid unit selection. Please choose a unit between 1 and 5.");
        lengthInMeters = null;
}

if (lengthInMeters !== null) {
    console.log(`The length in meters is: ${lengthInMeters}`);
}

}

// task 7

{
let unit = 3;
let weight = 500;

let weightInKilograms;

switch (unit) {
    case 1:
        weightInKilograms = weight;
        break;
    case 2:
        weightInKilograms = weight / 1e6;
        break;
    case 3:
        weightInKilograms = weight / 1000;
        break;
    case 4:
        weightInKilograms = weight * 1000;
        break;
    case 5:
        weightInKilograms = weight * 100;
        break;
    default:
        console.log("Invalid unit selection. Please choose a unit between 1 and 5.");
        weightInKilograms = null;
}

if (weightInKilograms !== null) {
    console.log(`The weight in kilograms is: ${weightInKilograms}`);
}

}

// task 8 
{
let D = 15;
let M = 2;

let isLeapYear = false;
let daysInMonth;

switch (M) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
    case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = isLeapYear ? 29 : 28;
        break;
    default:
        console.log("Invalid month. Please enter a month between 1 and 12.");
        daysInMonth = null;
}

if (daysInMonth !== null) {
    console.log(`The number of days in month ${M} is: ${daysInMonth}`);
}

}

// task 9 
{
let D = 28;
let M = 2;

switch (M) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
    case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28;
        break;
    default:
        daysInMonth = null;
}

D++;
if (D > daysInMonth) {
    D = 1;
    M++;
    if (M > 12) {
        M = 1;
    }
}

console.log(`Next day is: ${D}-${M}`);

}

// task 10 
{
let direction = "s";
let command = 2;

switch (command) {
    case 0: 
        break;
    case 1:
        switch (direction) {
            case "s":
                direction = "g"; 
                break;
            case "g":
                direction = "j"; 
                break;
            case "j":
                direction = "q";
                break;
            case "q":
                direction = "s"; 
                break;
        }
        break;
    case 2:
        switch (direction) {
            case "s":
                direction = "q"; 
                break;
            case "g":
                direction = "s";
                break;
            case "j":
                direction = "g"; 
                break;
            case "q":
                direction = "j"; 
                break;
        }
        break;
}

console.log(`Final direction: ${direction}`);

}

// new date
let sana = new Date();

document.getElementById('date-output').textContent = `Joriy sana va vaqt: ${sana.toLocaleString()}`;

let code = document.getElementById('code')

function showCode() {
    code.style.transform = "translate(-50%, -50%)";
    code.style.transition = "transform 0.3s ease"; 
}

function closeCode() {
    code.style.transform = "translate(-50%, -1000%)";
    code.style.transition = "transform 0.3s ease";
}