const rangeOdd = (start, end) => {
  const res = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res;
};

console.log(rangeOdd(15, 30));