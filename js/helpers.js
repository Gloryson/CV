function getRandomNum (min, max) {
  return Math.random() * (max - min) + min;
}

function normalizeNum (num) {
  return Number(num.toFixed(2));
}



export { getRandomNum, normalizeNum };