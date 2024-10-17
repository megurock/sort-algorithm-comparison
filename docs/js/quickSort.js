export function quickSort(list, i = 0, j) {
    j ??= list.length - 1;
    if (i >= j)
        return;
    const pivotIndex = partition(list, i, j);
    quickSort(list, i, pivotIndex - 1); // ピボットの左側
    quickSort(list, pivotIndex + 1, j); // ピボットの右側
}
/**
 *
 */
function partition(list, i, j) {
    // const pivot = list[j] // ピボットは最後の要素
    const pivot = middleOfThree(list[i], list[Math.floor((i + j) / 2)], list[j]); // ピボットは中央の要素
    let left = i;
    for (let right = i; right < j; right++) {
        if (list[right] < pivot) {
            ;
            [list[left], list[right]] = [list[right], list[left]]; // 要素をスワップ
            left++;
        }
    }
    // ピボットを適切な位置にスワップ
    ;
    [list[left], list[j]] = [list[j], list[left]];
    return left; // ピボットの新しい位置
}
/**
 *
 */
function middleOfThree(a, b, c) {
    if (a < b) {
        if (b < c)
            return b;
        else if (a < c)
            return c;
        else
            return a;
    }
    else {
        if (a < c)
            return a;
        else if (b < c)
            return c;
        else
            return b;
    }
}
