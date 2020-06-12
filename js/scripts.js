function rodgers (num) {
  accceptable = [1,2,3]
  num1 = parseInt(num)
  const vocab = [
    "Beep!",
    "Boop!",
    "Won't you be my neighbor?",

    ]
  if (isNaN(num)) {
    alert("thats not a number");
  } else if (num1 === 3 ) {
    alert(vocab[2])
  } else if (num1 === 2 ) {
    alert(vocab[1])
  } else if (num1 === 1) {
    alert(vocab[0])
  } else if (num.includes(3)) {
    alert(vocab[2])
  } else if (num.includes(2)) {
    alert(vocab[1])
  } else if (num.includes(1)) {
    alert(vocab[0])
  } else if (num > 3) {
    numIntiger = parseInt(num);
    //numArray = ""

    for (i =0; i <=numIntiger+1; i++) {
      console.log(i);
    }
      // if (i === 1 || i.includes(1) ){
      // numArray
      // }
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
