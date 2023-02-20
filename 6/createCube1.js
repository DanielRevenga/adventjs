const upShape = (
   vol,
   singleLeftPart,
   doubleLeftPart,
   singleRightPart,
   doubleRightPart,
) => {

   let finalShape = "\n"
   let spacesCount = vol
   for (let i=1;i <= vol;i++) {
      // SPACE
      for (let j=1;j < spacesCount;j++) {
         finalShape += " "
      }
      // LEFT
      finalShape += singleLeftPart
      for (let j=1;j < i;j++) {
         finalShape += doubleLeftPart
      }
      // RIGHT
      finalShape += doubleRightPart
      for (let k=1;k < vol;k++) {
         finalShape += doubleRightPart
      }
      finalShape += singleRightPart
      finalShape += i !== vol ? "\n" : ""
      spacesCount--
   }

   return finalShape
}

const bottomShape = (
   vol,
   singleLeftPart,
   doubleLeftPart,
   singleRightPart,
   doubleRightPart,
) => {
   let finalShape = "\n"
   let spacesCount = 0
   for (let i=vol;i >= 1;i--) {
      // SPACE
      for (let j=0;j < spacesCount;j++) {
         finalShape += " "
      }
      // LEFT
      finalShape += singleLeftPart
      for (let j=1;j < i;j++) {
         finalShape += doubleLeftPart
      }
      // RIGHT
      finalShape += doubleRightPart
      for (let k=1;k < vol;k++) {
         finalShape += doubleRightPart
      }
      finalShape += singleRightPart
      finalShape += "\n"
      spacesCount++
   }

   return finalShape
   }

   const cubeConstructor = (vol) => {
   const up = upShape(vol, "/","\\/", "\\", "\\_")
   const bottom = bottomShape(vol, "\\","/\\", "/", "/_")

   return up + bottom
}

cubeConstructor(2)