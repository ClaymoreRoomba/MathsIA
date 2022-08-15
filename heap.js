const leftIdx = parIdx => parIdx * 2 + 1;
const rightIdx = parIdx => parIdx * 2 + 2;

function swap(arr, i, toSwap){

    const temp = arr[i];
    arr[i] = arr[toSwap];
    arr[toSwap] = temp;

    //now focus on the bottom node
    i = toSwap;

    if(arr[leftIdx(i)] || arr[rightIdx(i)]){
        
        //if that child is undefined make it -1 so the other will always be chosen
        toSwap = ( (arr[leftIdx(i)] || -1) > (arr[rightIdx(i)] || -1) ) ? leftIdx(i) : rightIdx(i);
        if(arr[i] < arr[toSwap]) swap(arr, i, toSwap);

    }

}

function heapify(arr){

    for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--){

        let toSwap = ( (arr[leftIdx(i)] || -1) > (arr[rightIdx(i)] || -1) ) ? leftIdx(i) : rightIdx(i);
        
        if(arr[i] < arr[toSwap]) {

            swap(arr, i, toSwap);

        };

    }

    return arr;
}

export function heapSort(arr){

    //to avoid mutating input
    const unsorted = arr.slice();

    const sorted = [];
    const n = unsorted.length;
    
    for(let i = 0; i < n; i++){

        heapify(unsorted);
        sorted.unshift(unsorted.shift());

    }

    return sorted;
}