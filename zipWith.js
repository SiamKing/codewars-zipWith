function zipWith(fn,a0,a1) {
  let arr = a0.slice();
  arr.length <= a1.length ? arr : arr.length = a1.length;
  return arr.map((v, i) => fn(v, a1[i]));  
}
