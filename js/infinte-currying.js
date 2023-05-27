function add(x) {
  return function (y) {
    if (!y) {
      return x;
    }
    return add(x + y);
  };
}
const addition = add(5)(4)(88723698763245);
console.log(addition());

// infinte currying add(3)(4)(4) // output 11
