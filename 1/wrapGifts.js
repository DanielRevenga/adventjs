const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
   const wrappedGifts = gifts.map(gift => {
      const giftLength = gift.length
      const wrapLength = giftLength + 3
      const wrap = Array.from(Array(wrapLength)).reduce((acc, curr) => {
         return acc + "*"
      }, "")

      return `${wrap}\n*${gift}*\n${wrap}`
   })

   return wrappedGifts
}

const wrapped = wrapping(gifts)

console.log(wrapped)