function add(a,b) {
  return a += b;
}

function subtract(a,b) {
  return a -= b;
}

function multiply(a,b) {
  return a *= b;
}

function divide(a,b) {
  return a /= b;
}

function inc(n) {
  return n++;
}

function dec(n) {
  return n--;
}

function add(a,b) {
  return a + b;
}

function makeInt(n) {
  if(parseInt(n) < 1000 || parseInt(n) === NaN) {
    return parseInt(n);
  } else {
    return 0;
  }
}

function preserveDecimal(n) {
  return parseFloat(n);
}
