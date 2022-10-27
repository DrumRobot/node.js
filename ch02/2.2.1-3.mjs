/**  ch02/2.2.1-3.mjs */
import axios from 'axios'; // yarn add axios

(async () => {
  try {
    const result = await axios.get('https://www.zerocho.com/api/get');
    console.log(result);
    console.log(result.data); // {}
  } catch (error) {
    console.error(error);
  }
})();
