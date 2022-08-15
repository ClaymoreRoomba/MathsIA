Array.prototype.swap = function(idx1, idx2 = idx1 + 1){

    const temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;

    return this;

}

export function bubble(arr){

    let swapped = false;

    do{

        swapped = false

        for(let i = 0; i < arr.length - 1; i++){

            if(arr[i] > arr[i + 1]){

                arr.swap(i);
                swapped = true;

            }

        }

        
    } while(swapped);

    return arr;

}