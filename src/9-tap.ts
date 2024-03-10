function tap<T>(arg: T, cb: (p: T) => void) {
  cb(arg);
  return arg;
}

const result = tap([1, 2, 3], (x) => {
  x.pop();
});
console.log(result); // [1, 2]
