const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, { a: 1 }, 42, 'kpi'];

const counts = { number: 0, string: 0, boolean: 0, object: 0 };

for (const item of arr) {
  const type = typeof item;
  counts[type] += 1;
}

console.dir(counts);