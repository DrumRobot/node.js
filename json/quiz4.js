/* json/quiz4.js */
const json = `{
  "users": [
    {
      "firstName": "Ray",
      "lastName": "Villalobos"
    },
    {
      "firstName": "John",
      "lastName": "Jones"
    },
    {
      "firstName": "Ashley",
      "lastName": "Allen"
    }
  ]
}`;
const { users } = JSON.parse(json);
users
  .map((user) => `${user.firstName} ${user.lastName}`)
  // .map((user) => [user.firstName, user.lastName].join(' '))
  .forEach((name) => console.log(name));
// users.forEach((user) => {
//   console.log(Object.values(user).join(' '));
// });
