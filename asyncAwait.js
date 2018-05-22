async function countodd() {
  try {
    const lines = await readFileAsArray('./fname');
    const numbers = lines.map(Number);
    const oddNumber = numbers.filter(number => number %2 ===1);
  } catch (error) {
    console.log(error);
  }
}