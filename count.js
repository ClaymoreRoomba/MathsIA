export function countSort(arr, highest){

    //Math.max should not actually be included, input for max value is expected
    //                  simply a QoL feature, if it were included, time complexity: 3n + k
    const max = highest || (Math.max(...arr) + 1);

    const index = new Array(max).fill(0);
    const places = new Array(arr.length).fill(0);

    for(let num of arr){
        index[num]++
    }

    for(let i = 1; i < index.length; i++){
        index[i] += index[i-1];
    }

    for(let num of arr){
    
        places[index[num] - 1] = num;
        index[num]--;
    
    }

    return places;

}