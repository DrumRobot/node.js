/** ch03/3.3/func.mjs */
import { odd, even } from './var.mjs';

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
