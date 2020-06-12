// Bussiness logic
// function translation(num) {
//   const numbers = [1,2,3];
//   const vocab = [
//     "Beep!",
//     "Boop!",
//     "Won't you be my neighbor?",

//     ]
//   }
function rodgers (num) {
  const acceptable = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const vocab = [
    "Beep!",
    "Boop!",
    "Won't you be my neighbor?",

    ]
    
    if (!num.includes(acceptable)) {
      alert("unacceptable")
    } eslse if (num.includes(acceptable[4]))
      output3 = vocab[2];
  };

// UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    rodgers(number);
    $("#output").show();
    $("#result").text(number);
  });
});
