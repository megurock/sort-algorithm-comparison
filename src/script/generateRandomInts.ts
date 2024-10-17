export function generateRandomInts(length: number, min = 0, max = 10000) {
  const randomInts: number[] = []
  for (let i = 0; i < length; i++) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min
    randomInts.push(randomInt)
  }
  return randomInts
}
