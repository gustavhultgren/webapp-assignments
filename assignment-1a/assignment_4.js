function main() {
  console.log("Uppgift 4.");

  let numbers = [128, 256, 512, 1024, 2048];

  // Er lösning
  let sum = 0;
  let average = 0;

  // Skriv ut summan av alla element
  numbers.map((number) => {
    sum += number;
  });

  console.log(sum);

  // Skriv ut medelvärdet av alla element
  console.log(sum / numbers.length);
}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;
