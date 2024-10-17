import { insertionSort } from './insertionSort.js';
export function bucketSort(list, bucketSize = 10) {
    if (list.length === 0)
        return [];
    // 最大値と最小値を取得
    const minValue = Math.min(...list);
    const maxValue = Math.max(...list);
    // バケットの数を計算
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);
    // 各要素を適切なバケットに振り分け
    for (const number of list) {
        const bucketIndex = Math.floor((number - minValue) / bucketSize);
        buckets[bucketIndex].push(number);
    }
    // ソートされた結果を保持するリスト
    const sortedList = [];
    // 各バケットから要素を取り出して結果を作成
    for (const bucket of buckets) {
        if (bucket.length > 0) {
            const sorted = insertionSort(bucket); // 各バケットを挿入ソート
            sortedList.push(...sorted); // バケットの要素を結果に追加
        }
    }
    return sortedList;
}
