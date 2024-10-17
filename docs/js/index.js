import { generateRandomInts } from './generateRandomInts.js';
import { insertionSort } from './insertionSort.js';
import { bubbleSort } from './bubbleSort.js';
import { mergeSort } from './mergeSort.js';
import { selectionSort } from './selectionSort.js';
import { shellSort } from './shellSort.js';
import { quickSort } from './quickSort.js';
import { heapSort } from './heapSort.js';
import { bucketSort } from './bucketSort.js';
let list = generateNumbers();
const generateButton = document.querySelector('#generate');
const runButton = document.querySelector('#run');
generateButton?.addEventListener('click', () => {
    list = generateNumbers();
});
runButton?.addEventListener('click', () => {
    const result = document.querySelector('#result');
    if (result)
        result.innerHTML = 'Now Running...';
    disableButtons(true);
    setTimeout(() => {
        const results = runSort().sort();
        const min = results[0];
        const max = results[results.length - 1];
        const average = results.reduce((acc, cur) => acc + cur, 0) / results.length;
        outputResults(min, max, average);
        disableButtons(false);
    }, 100);
});
function disableButtons(disabled = true) {
    if (disabled) {
        generateButton?.setAttribute('disabled', 'disabled');
        runButton?.setAttribute('disabled', 'disabled');
    }
    else {
        generateButton?.removeAttribute('disabled');
        runButton?.removeAttribute('disabled');
    }
}
function outputResults(min, max, average) {
    const result = document.querySelector('#result');
    if (result)
        result.innerHTML = `
  min: ${min.toFixed(2)}ms<br>
  max: ${max.toFixed(2)}ms<br>
  average: ${average.toFixed(2)}ms
  `;
}
function generateNumbers() {
    const length = Number(document.querySelector('#length')?.value) ?? 100;
    const min = Number(document.querySelector('#min')?.value) ?? 0;
    const max = Number(document.querySelector('#max')?.value) ?? 100;
    return generateRandomInts(length, min, max);
}
function runSort() {
    const total = Number(document.querySelector('#total')?.value) ?? 1;
    const results = [];
    for (let i = 0; i < total; i++)
        results.push(getSortType());
    return results;
}
function getSortType() {
    const index = document.querySelector('#sortMethod')?.selectedIndex;
    let clone = list.concat();
    const start = performance.now();
    switch (index) {
        case 0:
            clone.sort((a, b) => a - b);
            break;
        case 1:
            insertionSort(clone);
            break;
        case 2:
            bubbleSort(clone);
            break;
        case 3:
            selectionSort(clone);
            break;
        case 4:
            shellSort(clone);
            break;
        case 5:
            clone = bucketSort(clone);
            break;
        case 5:
            mergeSort(clone);
            break;
        case 6:
            quickSort(clone);
            break;
        case 7:
            heapSort(clone);
            break;
        default:
            clone.sort((a, b) => a - b);
    }
    const end = performance.now();
    return end - start;
}
