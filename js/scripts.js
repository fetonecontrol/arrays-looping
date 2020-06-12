// Bussiness logic
// function translation(num) {
//   const vocab = [
//     "Beep!",
//     "Boop!",
//     "Won't you be my neighbor?",

//     ]
//   }
function rodgers (num) {
  accceptable = [1,2,3]
  const vocab = [
    "Beep!",
    "Boop!",
    "Won't you be my neighbor?",

    ]
  if (isNaN(num)) {
    alert("thats not a number");
  } else if (num === "2" ) {
    alert(vocab[1])
  } else if (num === "1" ) {
    alert(vocab[0])
  } 

}

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
