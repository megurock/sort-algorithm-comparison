export function heapSort(list: number[]): number[] {
  const n = list.length

  // 配列をヒープに構造化（ヒープの構築）
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(list, n, i)
  }

  // ヒープから要素を1つずつ取り出し、末尾に移動
  for (let i = n - 1; i > 0; i--) {
    // ルート（最大値）と末尾を交換
    ;[list[0], list[i]] = [list[i], list[0]]

    // ヒープを再度整える
    heapify(list, i, 0)
  }

  return list
}

function heapify(list: number[], n: number, i: number): void {
  let largest = i // 親ノードのインデックス
  const left = 2 * i + 1 // 左の子ノード
  const right = 2 * i + 2 // 右の子ノード

  // 左の子ノードが存在し、かつ親より大きい場合
  if (left < n && list[left] > list[largest]) {
    largest = left
  }

  // 右の子ノードが存在し、かつ現在の最大値より大きい場合
  if (right < n && list[right] > list[largest]) {
    largest = right
  }

  // 親が子ノードより小さい場合はスワップして再帰的に調整
  if (largest !== i) {
    ;[list[i], list[largest]] = [list[largest], list[i]]

    // 再帰的にヒープ構造を維持
    heapify(list, n, largest)
  }
}
