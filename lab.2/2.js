const range1 = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
    return result;
};
console.log(range1(15, 30));