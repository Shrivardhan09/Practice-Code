//this keyword in arrow function

const arrowFunction = () => {
  console.log(this);
};
console.log(arrowFunction()); //this in arrow function =>

const normalFunction = function () {
  console.log(this);
};
console.log(normalFunction()); // this in normal function =>
