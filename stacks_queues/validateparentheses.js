// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// An empty string is also considered valid.

function validate(a, b) {
  switch (a) {
    case '(':
      return b === ')';
    case '[':
      return b === ']';
    case '{':
      return b === '}';
  }
}

var isValid = function(s) {
  let stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
  	const paran = s[i];

    if (paran.match(/[\[({]/)) {
      stack.push(paran);
    } else {
      const result = validate(stack.pop(), s[i]);
      if (!result) return false;
    }
  }
  
  return stack.length === 0;
};
