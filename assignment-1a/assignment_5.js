function main() {
  console.log("Uppgift 5.");

  let countries = ["Sweden", "Denmark", "Finland", "Norway"];

  // Er lösning
  let string = countries[1].substring(0, 3);
  let sum = 0;

  countries.map((country) => {
    sum += country.length;
  });

  console.log(string);
  console.log(sum / countries.length);
}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;
