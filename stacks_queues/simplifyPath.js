// Given an absolute path for a file (Unix-style), simplify it
// Or in other words, convert it to the canonical path.

// Examples:

// Input: "/home/"
// Output: "/home"

// Input: "/../"
// Output: "/"

// Input: "/home//foo/"
// Output: "/home/foo"

// Input: "/a/./b/../../c/"
// Output: "/c"

// Input: "/a/../../b/../c//.//"
// Output: "/c"

// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"

const stackToString = (stack) => {
  let res = '';
  let buffer = [];

  while (stack.length > 0) {
    buffer.push(stack.pop());
  }

  while (buffer.length > 0) {
    res += buffer.pop();
  }

  return res;
}

const simplifyPath = function(path) {
  let dir = '';
  let dirs = [];
      
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] + path[i + 1] === '..') {
      dirs.pop();
      i += 1;
    } else if (path[i] === '/' && dir.length > 0) {
      dirs.push('/' + dir);
      dir = '';
    } else if (path[i] !== '.' && path[i] !== '/') {
      dir += path[i];
    }
  }

  if (dir.length > 0) {
    dirs.push('/' + dir);
  }

  return dirs.length > 0 ? stackToString(dirs) : '/';
};
