# romangenerator
 converts an integer to a Roman number

# Install
 Install with [npm](https://www.npmjs.com/):
 ```sh
 $ npm i romanGenerator --save
 ```
# Running tests

Tests validate [1, 5, 10, 50, 100, 500, 1000, 64, 226, 900, 998, 1712](./test.js).


  ```js
  var romangenerator = require('romangenerator');
  console.log(romangenerator(64));
  //=> 'LXIV'
  ```


 
 ```sh
 $ npm i -d && npm test
 ```
