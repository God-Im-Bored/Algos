const isValid = (s) => {
  if (s.length === 1) {
    return false;
  }

  let validMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  var stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (
      validMap[s[i]] === stack[stack.length - 1] &&
      stack.length !== 0
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length === 0) return true;
  else return false;
};
