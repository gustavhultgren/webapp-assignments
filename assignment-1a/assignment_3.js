function main() {
  console.log("Uppgift 3.");

  let string1 = "It's Learning";
  let string2 = "JavaScript: The Good Parts";
  let string3 = "JavaScript: The Good Parts";
  let string4 = "Eloquent JavaScript";

  let learning = string1.substring(5, 13);
  let goodParts = string2.substring(16, 26);
  let good = string3.substring(16, 21);

  console.log(learning.toUpperCase());
  console.log(goodParts.toLowerCase());
  console.log(good.toUpperCase());
  console.log(string4.substring(5, 13));
}

main();

exports.main = main;
