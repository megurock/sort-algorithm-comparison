export function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
        while (i > 0 && list[i] < list[i - 1]) {
            const temp = list[i];
            list[i] = list[i - 1];
            list[i - 1] = temp;
            i--;
        }
    }
    return list;
}
