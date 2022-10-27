/**  ch02/2.2.1-4.js */
const axios = require('axios'); // yarn add axios

(async () => {
  try {
    const result = await axios.post('https://www.zerocho.com/api/post/json', {
      name: 'zerocho',
      birth: 1994,
    });
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
