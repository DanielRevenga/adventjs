const packOfGifts = ["book", "doll", "ball3"]
const reindeers = ["dasher", "dancer"]
//const reindeers = ["dashedashedashedashedashe"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
//distributeGifts(packOfGifts, reindeers) // 2

const distributeGifts = (packOfGifts, reindeers) => {
   const packOfGiftsWeight = packOfGifts.reduce((acc, curr) => {
      const currLength = curr.length
      return acc + currLength
   }, 0)

   const reindeersMaxWeight = reindeers.reduce((acc, curr) => {
      const currLength = curr.length * 2
      return acc + currLength
   }, 0)



   return Math.trunc(reindeersMaxWeight / packOfGiftsWeight)

}

distributeGifts(packOfGifts, reindeers) // 2
