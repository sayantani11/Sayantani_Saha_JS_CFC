// Question 1

function deci2oct(n){
    let num = 0;
    let pos = 1;

    while(n!=0){
        let rem = n%8;
        num = rem*pos + num;
        n = parseInt(n/8);
        pos = pos*10;
    }
    return num;
}


// Question 2

function calculator(n1, n2, ch){
    switch(ch){
        case "+":
            return n1+n2;

        case "-":
            return n1-n2;
        
        case "*":
            return n1*n2;

        case "/":
            return n1/n2;

        case "%":
            return (n1%n2);

        default:
            return ("I am still learning")
    }

}


// Question 3

function charCase(char){
    if(char.charCodeAt() <= 90 && char.charCodeAt() >= 65){
        return("Uppercase");
    }
    else if(char.charCodeAt() <= 122 && char.charCodeAt() >= 97){
        return ("lowercase");
    }
    else{
        return ("Not an alphabet");
    }
}

console.log(charCase('a'));


// Question 4

function reverse(number){
    let rem = 0;
    let rev = 0;
    while(number !=0){
        rem = number%10;
        rev = rev*10 + rem;
        number = parseInt(number/10);
    }
    return rev;
}


// Question 5

function inverse(number){
    let str = String(number);
    let arr = new Array(str.length);

    for(let i=0; i<str.length; i++){
        let index = parseInt(str[i]);
        arr[index-1] = i+1;
    }

    return arr.join("");
}


// Question 6

function GCD(a, b){
    if(a>b){
        while(b!=0){
            a = b;
            b = a-b;
        }
        return a;
    }

    else{
        while(a!=0){
            b = a;
            a = b-a;
        }
        return b;
    }
}


// Question 7

function LCM(a, b){
    if(a>b){
        let maxim = a;
    }
    else{
        maxim = b;
    }

    while (1){
        if(maxim%a==0 && maxim%b==0){
            console.log(maxim);
            break;
        }
        maxim ++;
    }
}


// Question 8

function count5(arr){
    let count = 0;

    for (let i=0; i<arr.length; i++){
        if(arr[i]%5==0){
            count++;
        }
    }
    return count;
}

