function job() {
  return new Promise((resolve, reject) => {
    resolve('hello world');
  }, 2000);
}
console.log(job());
