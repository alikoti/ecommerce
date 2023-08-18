const axios = require('axios');

const data = {
    "userId": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
};
console.log(data);

axios.get('http://10.10.0.58:3003/api/users', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // Handle success response here
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error here
    console.error('Error:', error);
  });
