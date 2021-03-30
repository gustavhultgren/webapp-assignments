function main() {
  console.log("Uppgift 5.");

  let countries = ["Sweden", "Denmark", "Finland", "Norway"];

  let string = countries[1].substring(0, 3);
  let sum = 0;

  countries.map((country) => {
    sum += country.length;
  });

  console.log(string);
  console.log(sum / countries.length);
}

main();

exports.main = main;
