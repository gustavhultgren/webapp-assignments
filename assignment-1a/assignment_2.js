function main() {
  console.log("Uppgift 2.");

  // Er lösning
  let day = "Tisdag";
  let burger = "Hamburgare";
  let back = "I'll be back!";

  console.log(day.substring(0, 3));
  console.log(burger.substring(3, 10));
  console.log(back.substring(5, 12));
}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;
