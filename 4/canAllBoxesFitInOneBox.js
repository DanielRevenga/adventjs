const boxes = [
   { l: 1, w: 1, h: 1 },
   { l: 3, w: 3, h: 3 },
   { l: 2, w: 2, h: 2 }
]

const compareBoxes = (a, b) => {
   if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
   }
   if (a.l > b.l && a.w > b.w && a.h > b.h) {
      return 1;
   }
   return 0;
}

const boxCanFit = (box1, box2) => {
   if (box1.l < box2.l && box1.w < box2.w && box1.h < box2.h) {
      return true
   }

   return false
}

const fitsInOneBox = (boxes) => {
   const orderedBoxes = boxes.sort(compareBoxes)

   let fitsInOneBoxResult = true
   for (let i = 0; i < orderedBoxes.length - 1; i++) {
      const box = orderedBoxes[i]
      const nextBox = orderedBoxes[i + 1]

      if (!boxCanFit(box, nextBox)) fitsInOneBoxResult = false
      if (!fitsInOneBoxResult) break
   }

   return fitsInOneBoxResult
}

fitsInOneBox(boxes)