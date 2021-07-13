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


// Question 4
let n = 100;
let count = 0;
let i = 2;
while(i<=100){
    process.stdout.write(i + " ");
    count++;
    i = i + count*4;
}


// Question 5
let n = 123456789;
let count = 0;
while (n > 0){
    res = (n - n%10)/10;
    count++;
    n = res;
}
console.log(count);


// Question 6
let n = 9735;
let res = 0;

while(n > 0){
    res = res*10 + (n%10);
    n = (n - n%10)/10;
}
console.log(res);


// Question 6
let n = 9735;
let res = 0;

while(n > 0){
    res = res*10 + (n%10);
    n = (n - n%10)/10;
}
console.log(res);


// Question 7 a
let n = 5;
let row = 1;
while (row<=5){
    col = 1;
    while(col <= row){
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row ++;
}

//Question 7b
let n = 5
let i = 1
while(i<=n){
    let j=1
    while(j<=i){
        process.stdout.write(j + " ")
        j++
    }
    i++
    process.stdout.write("\n")
}

// Question 7c
let n = 5;
let row = 1;

while(row <= n){
    col = 0;
    colMirror = 1;

    while(colMirror <= 2*n - 1){
        if(colMirror>= n-row+1 && colMirror <= n){
            col++;
            process.stdout.write(col + " ");
        }
        else if(colMirror <= n+row-1 && colMirror > n){
            col--;
            process.stdout.write(col + " ");
        }
        else{
            process.stdout.write("  ");
        }
        colMirror++;
    }
    process.stdout.write("\n")
    row++;
}

//Question 7d
let n = 5;
let row = 1;

while(row <= n){
    col = row;
    colMirror = 1;

    while(colMirror <= 2*n - 1){
        if(colMirror>= n-row+1 && colMirror <= n){
            process.stdout.write(col + " ");
            col++;

            if(colMirror == n){
                col--;
            }
        }
        else if(colMirror <= n+row-1 && colMirror > n){
            col--;
            process.stdout.write(col + " ");
        }
        else{
            process.stdout.write("  ");
        }
        colMirror++;
    }
    process.stdout.write("\n")
    row++;
}

//Question 7f
let n = 5
let row = 0
let rowMirror = 0
while(rowMirror< 2*n-1){
    let col = 0
    let colMirror= 0
    while(colMirror< 2*n-1){
        if(col<n-row-1){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
        if(colMirror<n-1){
            col++
        }
        else{
            col--
        }
        colMirror++
    }
    process.stdout.write("\n");
    if(rowMirror<n-1){
        row++
    }
    else{
        row--
    }
    rowMirror++
}

//Question 7 h
let n = 5
let row = 0
let rowMirror = 0
while(rowMirror< 2*n-1){
    let col = 0
    let colMirror= 0
    while(colMirror< 2*n-1){
        if(col<n-row){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
        if(colMirror<n-1){
            col++
        }
        else{
            col--
        }
        
        colMirror++
    }
    process.stdout.write("\n");
    if(rowMirror<n-1){
        row++;
    }
    else{
        row--;
    }
    rowMirror++;
}
