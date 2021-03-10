const distincChar = (string, k) => {
    let start = 0
    let maxLength = 0
    let reference = {}
  
    for (let end = 0; end < string.length; end++) {
      const rightChar = string[end]
      if (!(rightChar in reference)) {
        reference[rightChar] = 0
      }
      reference[rightChar] += 1
      while (Object.keys(reference).length > k) {
        const leftChar = string[start]
        reference[leftChar] -= 1
        if (reference[leftChar] === 0) {
          delete reference[leftChar]
        }
        start += 1
      }
      maxLength = Math.max(maxLength, end - start + 1)
  
    }
    return maxLength
  }

  const string = 'a, r, a, a, c, i'
  const k = 2
  console.log(distincChar(string, k))