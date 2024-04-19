function drawTriangle(size) {
   for(let i=1; i <= size; i++) {
      let output = ""
      for(let j=1; j <= i; j++) {
         output += "*"
      }
      console.log(output)
   }   
}