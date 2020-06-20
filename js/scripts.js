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
  } else if (num > 3) {
      numIntiger = parseInt(num);
    for (let i=0; i <=numIntiger; i++) {
      let i2 = i.toString();
      if (((i -3) % 10) === 0){
        numArray.push(vocab[2]);
      } else if (((i -2) % 10) === 0) {
        numArray.push(vocab[1]);
      } else if (((i -1) % 10) === 0) {
        numArray.push(vocab[0]);
      } else if ((i2.includes("3"))){ 
        numArray.push(vocab[2]);
      } else if ((i2.includes("2"))){ 
        numArray.push(vocab[1]);
      } else if ((i2.includes("1"))){ 
        numArray.push(vocab[0]);
      } else {
        numArray.push(i);
      }
  }
  
    console.log(numArray);
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