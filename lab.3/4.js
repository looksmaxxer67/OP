function introspect(iface) {
  const result = [];
   for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
}
const introspectFunctional = (iface) =>
  Object.entries(iface)
    .filter(([, value]) => typeof value === 'function')
    .map(([key, fn]) => [key, fn.length]);

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  nonMethod: 42,
};
console.log(introspect(iface));