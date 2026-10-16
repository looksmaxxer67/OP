const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, { a: 1 }, 42, 'kpi'];
const countsDynamic = {};

for (const item of arr) {
  const type = typeof item;
  countsDynamic[type] = (countsDynamic[type] || 0) + 1;
}

console.dir(countsDynamic);