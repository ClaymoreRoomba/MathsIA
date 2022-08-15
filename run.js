import { bubble } from "./bubble.js";
import { selSort } from "./selSort.js";
import { heapSort } from "./heap.js";
import { countSort } from "./count.js";
import { radixSort } from "./radix.js";

const randList = (size, max = 100) => new Array(size).fill(0).map(() => Math.floor( Math.random() * (max - 1) + 1 ));

const listSize = 10;

//SELSORT
const selSortStart = performance.now();

    console.log(`selection: [${selSort(randList(listSize)).join(", ")}]`);

const selSortEnd = performance.now();
console.log(`   Elapsed: ${selSortEnd - selSortStart} ms\n`);



//BUBBLE SORT
const bubbleSortStart = performance.now();

    console.log(`bubble: [${bubble(randList(listSize)).join(", ")}]`);

const bubbleSortEnd = performance.now();
console.log(`   Elapsed: ${bubbleSortEnd - bubbleSortStart} ms\n`);



//HEAP SORT
const heapSortStart = performance.now();

    console.log(`heap: [${heapSort(randList(listSize)).join(", ")}]`);

const heapSortEnd = performance.now();
console.log(`   Elapsed: ${heapSortEnd - heapSortStart} ms\n`);



//COUNT SORT
const countSortStart = performance.now();

    console.log(`count: [${countSort(randList(listSize)).join(", ")}]`);

const countSortEnd = performance.now();
console.log(`   Elapsed: ${countSortEnd - countSortStart} ms\n`);



//radix SORT
const radixSortStart = performance.now();

    console.log(`radix: [${radixSort(randList(listSize)).join(", ")}]`);

const radixSortEnd = performance.now();
console.log(`   Elapsed: ${radixSortEnd - radixSortStart} ms\n`);


function run(iterations, fn, arr){

    const times = [];

    for(let i = 1; i <= iterations; i++){
    
        const t0 = performance.now();
    
        fn(arr);
    
        const t1 = performance.now();
    
        times.push(t1 - t0);
    }

    console.table(times);

}