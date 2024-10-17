export function bubbleSort(list) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1]) {
                const temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return list;
}
