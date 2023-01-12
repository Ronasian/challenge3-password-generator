// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var passLength = window.prompt("Set password length (min: 8, max: 128)");
  // length prompt must have a valid input to continue
  if (!passLength) {
    window.alert("Invalid Input: Cannot leave blank");
    return;
  };
  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid Input: Must be between 8 and 128");
    return;
  }

  var includeUpper = window.confirm("Include uppercase characters? (Yes: OK / No: Cancel)");
  var includeLower = window.confirm("Include lowercase characters? (Yes: OK / No: Cancel)");
  var includeNumbers = window.confirm("Include numeric characters? (Yes: OK / No: Cancel)");
  var includeSpecial = window.confirm("Include special characters? (Yes: OK / No: Cancel)");

 
  
  function generatePassword() {
    // Character Container
    var result = [];
    // Password Characters
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    // Password Types
    var type0 = "";
    var type1 = special;
    var type2 = numbers;
    var type3 = numbers + special;
    var type4 = lowercase;
    var type5 = lowercase + special;
    var type6 = lowercase + numbers;
    var type7 = lowercase + numbers + special;
    var type8 = uppercase;
    var type9 = uppercase + special;
    var type10 = uppercase + numbers;
    var type11 = uppercase + numbers + special;
    var type12 = uppercase + lowercase;
    var type13 = uppercase + lowercase + special;
    var type14 = uppercase + lowercase + numbers;
    var type15 = uppercase + lowercase + numbers + special;
    // create iteration that loops as many times as the password length input
    for (var i = 0; i < passLength; i++) {
      if (!includeUpper && !includeLower && !includeNumbers && includeSpecial) {
        result.push(type1[Math.floor(Math.random() * type1.length)]);
      }
      else if (!includeUpper && !includeLower && includeNumbers && !includeSpecial) {
        result.push(type2[Math.floor(Math.random() * type2.length)]);
      }
      else if (!includeUpper && !includeLower && includeNumbers && includeSpecial) {
        result.push(type3[Math.floor(Math.random() * type3.length)]);
      }
      else if (!includeUpper && includeLower && !includeNumbers && !includeSpecial) {
        result.push(type4[Math.floor(Math.random() * type4.length)]);
      }
      else if (!includeUpper && includeLower && !includeNumbers && includeSpecial) {
        result.push(type5[Math.floor(Math.random() * type5.length)]);
      }
      else if (!includeUpper && includeLower && includeNumbers && !includeSpecial) {
        result.push(type6[Math.floor(Math.random() * type6.length)]);
      }
      else if (!includeUpper && includeLower && includeNumbers && includeSpecial) {
        result.push(type7[Math.floor(Math.random() * type7.length)]);
      }
      else if (includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
        result.push(type8[Math.floor(Math.random() * type8.length)]);
      }
      else if (includeUpper && !includeLower && !includeNumbers && includeSpecial) {
        result.push(type9[Math.floor(Math.random() * type9.length)]);
      }
      else if (includeUpper && !includeLower && includeNumbers && !includeSpecial) {
        result.push(type10[Math.floor(Math.random() * type10.length)]);
      }
      else if (includeUpper && !includeLower && includeNumbers && includeSpecial) {
        result.push(type11[Math.floor(Math.random() * type11.length)]);
      }
      else if (includeUpper && includeLower && !includeNumbers && !includeSpecial) {
        result.push(type12[Math.floor(Math.random() * type12.length)]);
      }
      else if (includeUpper && includeLower && !includeNumbers && includeSpecial) {
       result.push(type13[Math.floor(Math.random() * type13.length)]);
      }
      else if (includeUpper && includeLower && includeNumbers && !includeSpecial) {
        result.push(type14[Math.floor(Math.random() * type14.length)]);
      }
      else if (includeUpper && includeLower && includeNumbers && includeSpecial) {
        result.push(type15[Math.floor(Math.random() * type15.length)]);
      } else {
        return;
      }
    };
    return result.join("");
  };
  
  var password = generatePassword(passLength);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
