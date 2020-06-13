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
  } else if (num.includes(3)) {
      alert(vocab[2])
  } else if (num.includes(2)) {
      alert(vocab[1])
  } else if (num.includes(1)) {
      alert(vocab[0])
  } else if (num > 3) {
      numIntiger = parseInt(num);
      console.log(numArray);
    for (let i=0; i <=numIntiger; i++) {
      numArray.push(i);
      stringArray = numArray.toString();
      //console.log(stringArray.indexOF(1));
      }
      
    }
    console.log(stringArray);
    return stringArray;
}
function sub(num){
  let arr1 = num;
  let arr2 = [];
  const vocab = [
    "Beep!",
    "Boop!",
    "Won't you be my neighbor?",

    ];
    //console.log(arr1.indexOF(1));
    if (arr1.includes(1)){
      arr1 = vocab[0];
      return arr1;
    }
  return arr2;
}
    // for (let i = 0; i <= arr1.length; i++) {
    //   if (arr1[i].includes(1)){\
    //     alert("its working");
    //     arr1[i] = vocab[0];
    //     }

  // return arr1;


// function duckStatModifier(statArray, multiplier) {
//   const duckStatArray = statArray.map(function(element) {
//     return element * multiplier + 1;
//   });
//   return duckStatArray;
// }
// for (let i = 0; i < dnaSequence.length; i +=1) {
//   if (dnaSequence[i] === pattern) {
//     return true;
//   };
//   console.log("Looped!");
// }
// return false;
// }
// UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    let number = $("input#number").val();
    let number2 = rodgers(number);
    let number3 = sub(number2)
    $("#output").show();
    $("#result").text(number3);
  });
});
