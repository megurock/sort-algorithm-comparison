export function shellSort(list: number[]) {
  let gap = Math.floor(list.length / 2)
  while (gap > 0) {
    for (let i = gap; i < list.length; i++) {
      const temp = list[i]
      let j = i
      while (j >= gap && list[j - gap] > temp) {
        list[j] = list[j - gap]
        j -= gap
      }
      list[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return list
}
