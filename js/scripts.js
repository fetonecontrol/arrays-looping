//Business logic
// function range(a, b) {
//   for (var i = 0; i <= numIntiger; ++i){
//     yield i;
//   }
// }
// Array.from(range(a, b))

// var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]\

// console.log(result);
function rodgers (num) {
  let num1 = parseInt(num);
  let numArray = [];
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
      console.log(numArray);
    for (let i =0; i <= numIntiger; i++) {
      numArray.push(i);
      }
    numArray.toString();
    for (let i =0; i <= numArray; i++) {
      if (numArray[i].includes(1)){
        numArray[i] = vocab[0]
        console.log(numArray);
      }
      
      }
      
    //for (let i = 0; i <= numArray; i++) {
    //  if (numArray[i].includes(1))
    //  numArray[i].push(vocab[0]);
    //}
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
