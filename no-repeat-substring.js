const noRepeat = (string) => {
    let start = 0
    let maxLength = 0
    let reference = {}
  
    for (let end = 0; end < string.length; end++) {
      const rightChar = string[end]
      if (rightChar in reference) {
        start = Math.max(start, reference[rightChar] + 1) 
      }
      reference[rightChar] = end
      maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
  }
  const s = 'araaci'
  console.log(noRepeat(s))