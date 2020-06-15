function rodgers(num) {
  let num1 = parseInt(num);
  const trigger = ["1", "2", "3",];
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
      if (((i -3) % 10) === 0){
      numArray.push(vocab[2]);
      } else if (((i -2) % 10) === 0) {
      numArray.push(vocab[1]);
      } else if (((i -1) % 10) === 0) {
        numArray.push(vocab[0]);
      } else {
      numArray.push(i);
      }
      // stringArray = numArray.toString();
      // stringArray2 = stringArray.split("3").join(vocab[2]);
      //stringArray3 = stringArray2.split("2").join(vocab[1]);
    }
      // if (trigger.indexOf(stringArray.charAt(i)) >= 0)  {
      //   stringArray.push("beep");      }


      //stringArray3 = stringArray2.split("2").join(vocab[1]);
  }
    console.log(numArray);
    return numArray;
}
// function sub(num){
//   let arr2 = num;
//   let valid = ["1", "2", "3",];
//   const vocab = [
//     "Beep!",
//     "Boop!",
//     "Won't you be my neighbor?",

//     ];
  
//   }
    // if (valid.indexOf(num[0]) > -1) {
    //   arr2 = num.splice(vocab[0]);
    //   return arr2;

    // }

//     if (vowels.indexOf(str[0]) > -1) {
//       newStr = str + "way";
//       return newStr;
//   } else {
//       let firstMatch = str.match(/[aeiou]/g) || 0;
//       let vowel = str.indexOf(firstMatch[0]);
//       newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
//       return newStr;
// }

// UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    let number = $("input#number").val();
    let number2 = rodgers(number);
    //let number3 = sub(number2)
    $("#output").show();
    $("#result").text(number2);
  });
});
