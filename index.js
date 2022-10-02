const myInfo = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${myInfo.name} de la ${myInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
