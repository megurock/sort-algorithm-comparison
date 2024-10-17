export function bubbleSort(list: number[]) {
  let swapped: boolean
  do {
    swapped = false
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        const temp = list[i]
        list[i] = list[i + 1]
        list[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return list
}
