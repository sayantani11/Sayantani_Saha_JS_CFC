// Question 1
arr = [[11, 12, 13, 14],[21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]];
let count =0;

for(let j=0; j<arr.length; j++){
    if(count%2 == 0){
        let i =0;
        while(i < arr.length){
            process.stdout.write(arr[i][j] + " ");
            i ++;
        }
    }
    else{
        let i =arr.length - 1;
        while(i >= 0){
            process.stdout.write(arr[i][j] + " ");
            i --;
        }
    }
    count++;
}


// Question 2
arr = [[11, 12, 13, 14],[21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]];
let count =0;

for(let i=0; i<arr.length; i++){
    if(count%2 == 0){
        let j =0;
        while(j < arr.length){
            process.stdout.write(arr[i][j] + " ");
            j ++;
        }
    }
    else{
        let j =arr.length - 1;
        while(j >= 0){
            process.stdout.write(arr[i][j] + " ");
            j --;
        }
    }
    count++;
}


// Question 3
let n=7;
for(let i=0; i<n; i++){
    if(i== parseInt(n/2)){
        for(let j=0; j<n; j++){
            process.stdout.write("* ");
        }
        console.log();
    }

    else if(i==0){
        for(let j=0; j<n; j++){
            if(j==i || j>=3){
                process.stdout.write("* ");
            }
            else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }

    else if(i==n-1){
        for(let j=0; j<n; j++){
            if(j==n-1 || j<=3){
                process.stdout.write("* ");
            }
            else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }

    else if(i<3){
        for(let j=0; j<n; j++){
            if(j==0 || j==3){
                process.stdout.write("* ");
            }
            else{
                process.stdout.write("  ");
            }
        }
    }

    else{
        for(let j=0; j<n; j++){
            if(j==n-1 || j<=3){
                process.stdout.write("* ");
            }
            else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

// Question 6
function sum(arr1, arr2){
    let arr = []
    len = (arr1.length > arr2.length) ? arr2.length : arr1.length

    for(let i=0; i<len; i++){
        arr.push(arr1[i] + arr2[i]);
    }

    return arr;
}

// Question 7
function MMAsubgroups(m , n, arr){
    let group = [];
    if(n>m){
        for(i=0; i<arr.length; i++){
            if(arr[i]>m && arr[i]<n){
                group.push(arr[i]);
            }
        }
    }

    else{
        for(i=0; i<arr.length; i++){
            if(arr[i]>n && arr[i]<m){
                group.push(arr[i]);
            }
        }
    }
    return group;
}


// Question 8
let arr1 = [1, 2, 3, 1, 2, 4, 1];
let arr2 = [2, 1, 3, 1, 5, 2, 2];
let arr = arr1 && arr2;
arr.sort();
console.log(arr);


// Question 9
let arr = [2, 5, -1, 7, -3, -1, -2];
let k =4;
let subgroup = [];
let ans = [];

for(let i=0; i<arr.length-k; i++){
    for(let j=i; j<i+k; j++){
        subgroup.push(arr[j]);
    }

    let min = Math.min(...subgroup);
    let max = Math.max(...subgroup);
    ans.push(min + max);
    subgroup = [];
}

console.log(ans.reduce((a,b) => a+b));

// Question 10
let str = "abcg";
let s = "";
for(let i=0; i<str.length; i++){
    let code = str[i].charCodeAt(0);
    if(code%2 == 0){
        s = s + String.fromCharCode(code-1);
    }
    else{
        s = s + String.fromCharCode(code+1);
    }
}
console.log(s);

//Question 11
let str = "abcDEasW";
let s = "";

for(let i=0; i<str.length; i++){
    if(65 <= str[i].charCodeAt(0) <= 90){
        lower = str[i].toLowerCase(0);
        s = s + lower;
    }

    if(97 <= str[i].charCodeAt(0) <= 122){
        upper = str[i].toUpperCase(0);
        s = s + upper;
    }
}

// Question 12
let str = "acb";
let s = "";

for(let i=0; i<str.length; i++){
    if(i == str.length -1){
        s = s + str[i];
    }
    else{
        let difference = str[i].charCodeAt(0) - str[i+1].charCodeAt(0);
        s = s + str[i] + difference;
    }
}
console.log(s);
