//Question 1
let credits = 8000; // enter credits

if (credits >= 7500){
    console.log("Tera leader");
}
else if (6000 <= credits < 7500){
    console.log("Gega leader");
}
else if (4500 <= credits < 6000){
    console.log("Mega leader");
}
else{
    console.log("Rising Star")
}


// Question 2
let amount = 1000;
let rate = 4;
let time = 3;
SI = (amount * rate * time)/100;
console.log("The Simple Interest is "+ SI);


//Question 3
let a = 36;
let b = 24;
if (a > b){
    while (b > 0){
        rem = a % b;
        a = b
        b = rem
    }
    console.log(a)
}
else{
    while (a > 0){
        rem = b % a;
        b = a
        a = rem
    }
    console.log(b)
}
