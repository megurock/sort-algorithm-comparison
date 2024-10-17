export function mergeSort(list) {
    // ベースケース: 配列が1つ以下ならソート済み
    if (list.length <= 1) {
        return list;
    }
    // 配列を半分に分割
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    // 左右の部分配列を再帰的にソートし、マージする
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const sortedArray = [];
    let i = 0;
    let j = 0;
    // 両方の部分配列に要素が残っている間マージする
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        }
        else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    // 残っている要素を追加
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}
