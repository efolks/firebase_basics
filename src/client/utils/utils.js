export const transform = (value) => { // turn object to string[]
  let newShit = [];
  if (value != null) {
    const keys = Object.keys(value);
    newShit = keys.map(k => value[k]);
  }
  return newShit;
}
