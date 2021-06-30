export default str =>
  str
    .replace(/\s+/, '-')
    .replace(/(?!^)[A-Z]/g, str => `-${str}`)
    .replace(/-+/g, '-')
    .toLowerCase();
