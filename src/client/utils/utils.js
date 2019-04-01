export const transform = (value) => { // turn object to string[]
  let objectToArray = [];
  if (value != null) {
    const keys = Object.keys(value);
    objectToArray = keys.map(k => value[k]);
  }
  return objectToArray;
}
