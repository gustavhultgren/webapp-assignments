function main() {
  console.log("Uppgift 4.");

  let numbers = [128, 256, 512, 1024, 2048];

  let sum = 0;
  let average = 0;

  numbers.map((number) => {
    sum += number;
  });

  console.log(sum);

  console.log(sum / numbers.length);
}

main();

exports.main = main;
