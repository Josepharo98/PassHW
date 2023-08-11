// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var PassLength;
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var CharType = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","|","?",";","<",">","*","`","~",];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var LC;
var UC;
var NU;
var SC;
var result = [];
var amount = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}
function generatePassword(){


  PassLength = prompt("Please select a number between 8 and 128");
  console.log("Your password will be" + PassLength + "characters.");


  if(PassLength < 8 || PassLength > 128) {
    alert("This input was invalid! Please pick a number between 8 and 128.");

  } else {
    LC = confirm("Would you like to include lower case letters?");
    console.log("It will include lower case letters " + LC);

    UC = confirm("Would you like to include UPPER CASE letters?");
    console.log("It will include UPPER CASE letters " + UC);
    
    NU = confirm("Would you like to include number?");
    console.log("It will include numbers " + NU);
    
    SC = confirm("Would you like to include special characters?");
    console.log("It will include special characters " + SC);

  };

  if (!LC && !UC && !NU && !SC) {
    alert("Please select at least 1!");
 }


  else if (LC && UC && NU && SC) {
    
  result = [] .concat(lowercase, Uppercase, CharType, num);
    return result;
  }



  else if (LC && UC && NU && !SC) {
    result = [] .concat(lowercase, Uppercase, num);
    return result;
  }
  else if (LC && UC && !NU && SC) {
    result = [] .concat(lowercase, Uppercase, CharType);
    return result;
  }
  else if (LC && !UC && NU && SC) {
    result = [] .concat(lowercase, CharType, num);
    return result;
  }
  else if (!LC && UC && NU && SC) {
    result = [] .concat(Uppercase, CharType, num);
    return result;
  }
 


  else if (LC && UC) {
    result = [] .concat(Uppercase, lowercase);
    return result;
  }
 
  else if (LC && NU) {
    result = [] .concat(lowercase, num);
    return result;
  }
 
  else if (LC && SC) {
    result = [] .concat(Uppercase, lowercase);
    return result;
  }
 
  else if (UC && NU) {
    result = [] .concat(Uppercase, num);
    return result;
  }
 
  else if (UC && SC) {
    result = [] .concat(Uppercase, CharType);
    return result;
  }
 
  else if (NU && SC) {
    result = [] .concat(CharType, num);
    return result;
  }
 



  else if (LC) {
    result = [] .concat(lowercase);
    return result;
  }
 
  else if (UC) {
    result = [] .concat(Uppercase);
    return result;
  }
 
  else if (SC) {
    result = [] .concat(CharType);
    return result;
  }
 
  else if (NU) {
    result = [] .concat(num);
    return result;
  }
 


 /* for (var i = 0; i < PassLength; i++) {
    var inputs = result[Math.floor(Math.random() * result.length)];
    console.log(inputs);
  }
*/
  var password = amount.join("");
  console.log("Your Pasword is: " + password);
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);