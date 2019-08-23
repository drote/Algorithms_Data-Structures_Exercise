// bitwise subtract

function sub(a, b) {
  while (b > 0) {
    to_subtract = (~a) & b;
    uncommon = a ^ b;
    a = uncommon;
    b = to_subtract << 1;
  }
  return a;
}
