Array.prototype.swap = function(idx1, idx2 = idx1 + 1){

    const temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;

    return this;

}

export function selSort(arr){

    for(let i = 0; i < arr.length - 1; i++){

        let min_idx = i;

        for(let j = i + 1; j < arr.length; j++){

            if(arr[j] < arr[min_idx]) min_idx = j;

        }

        if(i !== min_idx) arr.swap(i, min_idx);

    }

    return arr;
}