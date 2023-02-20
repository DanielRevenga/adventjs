const upShape = (
vol,
leftPart,
rightPart,
) => {

   let finalShape = "\n"
   let spacesCount = vol
   for (let i=1;i <= vol;i++) {
      // SPACE
      for (let j=1;j < spacesCount;j++) {
         finalShape += " "
      }
      // LEFT
      for (let j=0;j < i;j++) {
         finalShape += leftPart
      }
      // RIGHT
      for (let k=0;k < vol;k++) {
         finalShape += rightPart
      }

      finalShape += i !== vol ? "\n" : ""
      spacesCount--
   }

   return finalShape
}

const bottomShape = (
   vol,
   leftPart,
   rightPart,
   ) => {
   let finalShape = "\n"
   let spacesCount = 0
   for (let i=vol;i >= 1;i--) {
      // SPACE
      for (let j=0;j < spacesCount;j++) {
         finalShape += " "
      }
      // LEFT
      for (let j=0;j < i;j++) {
         finalShape += leftPart
      }
      // RIGHT
      for (let k=0;k < vol;k++) {
         finalShape += rightPart
      }

      finalShape += "\n"
      spacesCount++
   }

   return finalShape
}

const cubeConstructor = (vol) => {
   const up = upShape(vol, "/\\","_\\")
   const bottom = bottomShape(vol, "\\/","_/")

   return up + bottom
}


cubeConstructor(2)
