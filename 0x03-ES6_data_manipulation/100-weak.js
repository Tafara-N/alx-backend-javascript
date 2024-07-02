export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let i = weakMap.get(endpoint) || 0;

  i += 1;

  weakMap.set(endpoint, i);

  if (i >= 5) throw Error('Endpoint load is high');

  return i;
}
