export default function updateUniqueItems(_mapping) {
  if (!(_mapping instanceof Map)) throw Error('Cannot process');
  _mapping.forEach((x, y) => {
    if (x === 1) _mapping.set(y, 100);
  });

  return _mapping;
}
