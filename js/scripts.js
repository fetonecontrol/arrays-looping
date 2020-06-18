function rodgers(num) {
  let num1 = parseInt(num);
  let numArray = [];
  const vocab = [
    "Beep!",
    "Boop!",
    "Won't you be my neighbor?",

    ];
  if (isNaN(num)) {
      alert("thats not a number");
  } else if (num1 === 3 ) {
      alert(vocab[2])
  } else if (num1 === 2 ) {
      alert(vocab[1])
  } else if (num1 === 1) {
      alert(vocab[0])
  // } else if (num.includes(3)) {
  //     alert(vocab[2])
  // } else if (num.includes(2)) {
  //     alert(vocab[1])
  // } else if (num.includes(1)) {
  //     alert(vocab[0])
  } else if (num > 3) {
      numIntiger = parseInt(num);
      console.log(numArray);
    for (let i=0; i <=numIntiger; i++) {
      if (((i -3) % 10) === 0){
        numArray.push(vocab[2]);
      } else if (((i -2) % 10) === 0) {
        numArray.push(vocab[1]);
      } else if (((i -1) % 10) === 0) {
        numArray.push(vocab[0]);
      } else {
        numArray.push(i);
      }
  }
    return numArray;
}
}
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    let number = $("input#number").val();
    let number2 = rodgers(number);
    $("#output").show();
    $("#result").text(number2);
  });
});
