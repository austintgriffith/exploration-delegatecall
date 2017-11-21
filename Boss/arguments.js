/*
  Example of passing in a string to the constructor:
  module.exports = ["hello world"]
*/

const fs = require('fs'); 
module.exports = [fs.readFileSync('Adder/Adder.address').toString().trim()]
