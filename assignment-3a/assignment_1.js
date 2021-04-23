var sum = 0;
$("#nr-1, #nr-2").keyup(function () {
  if ($("#nr-1").val() && $("#nr-2").val()) {
    var number1 = parseInt($("#nr-1").val());
    var number2 = parseInt($("#nr-2").val());
    sum = number1 * number2;
    $("#result").val(sum);
  }
});
