// Question 2
function sum(n){
    if(n==0){
        return 0;
    }

    return n + sum(n-1);
}


// Question 3
function targetIdx(arr, target, index){
    if(index < 0){
        return -1;
    }

    if(arr[index] == target){
        return index;
    }

    targetIdx(arr, target, index-1);
}


// Question 4
function arrofIdx(arr, target, index=0){
    idx = [];
    
    if(index == arr.length - 1){
        return idx;
    }

    if(arr[index] == target){
        idx.push(index);
    }

    arrofIdx(arr, target, index+1);
}


// Question 5
function reverse(arr, start, end){
    if(start >= end){
        return arr;
    }

    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse(arr, start+1, end-1);
}

