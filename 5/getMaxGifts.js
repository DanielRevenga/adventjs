const giftsCities2 = [50]
const giftsCitieszz = [12, 11, 3, 5, 7]
const zz = [3, 11, 5, 7]
const maxGiftszz = 15
const maxCitieszz = 2
const arrayGiftszz = [12, 11, 3, 5, 7]

const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
   const giftsCitiesCombs = getAllCombinations(giftsCities, maxCities)

   let maxSum = 0
   let maxSumComb = []
   giftsCitiesCombs.forEach(comb => {
      const sum = comb.reduce((acc, curr) => acc + curr, 0)

      if (sum > maxSum && sum <= maxGifts) {
         maxSum = sum
         maxSumComb = comb
      }
   })

   if (maxSumComb.length === 0) return 0
   return [maxSumComb, maxSum]
}

const getAllCombinations = (giftsCities, maxCities) => {
   return giftsCities.reduce((a, v) => {
      return a.concat(a.map(d => [v].concat(d)))
   }, [[]]).filter(comb => comb.length <= maxCities)
}

getMaxGifts([12, 11, 3, 5, 7], 15, 2)
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100