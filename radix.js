function countSort(arr, digitsplace, base){

    const output = new Array(arr.length);
    const count = new Array(base).fill(0);

    for(let num of arr){
        count[Math.floor(num / (base ** (digitsplace - 1))) % 10]++;
    }

    for(let i = 1; i < count.length; i++){
        count[i] += count[i-1];
    }

    for(let i = arr.length - 1; i >= 0; i--){
        output[--count[Math.floor(arr[i] / (base ** (digitsplace - 1))) % 10]] = arr[i];
    }

    //mutate input
    for(let i = 0; i < arr.length; i++){
        arr[i] = output[i];
    }
}

export function radixSort(arr, base = 10){

    const max = Math.max(...arr);

    const numOfDigits = Math.log(max) * Math.LOG10E + 1 || 0;

    for(let digitsplace = 1; digitsplace <= numOfDigits; digitsplace++){
        countSort(arr, digitsplace, base);
    }

    return arr;
}