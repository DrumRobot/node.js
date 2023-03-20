function solution(price) {
  if (price < 100000) {
    return price;
  }
  if (price < 300000) {
    price *= 0.95;
  } else if (price < 500000) {
    price *= 0.9;
  } else { // price >= 500000
    price *= 0.8;
  }
  return Math.floor(price);
}

function solution(price) {
  if ( price >= 500000) {
      price *= 0.8
  } else if (price >= 300000) {
      price *= 0.9;
  } else if (price >= 100000) {
      price *= 0.95;
  }
  return parseInt(price);
}

console.log(solution(150000));
console.log(solution(580000));
