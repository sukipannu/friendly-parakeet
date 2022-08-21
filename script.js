
// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var PasswordLength;
var Lowercase;
var Uppercase;
var Numbers;
var Specials;
var userChoices;

//LOWERCASE CHARACTERS
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//UPPERCASE CHARACTERS
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// NUMBERS
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//SPECIAL CHARACTERS
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate button
generateBtn.addEventListener("click", writePassword);

// START FUNCTION
function generatePassword() {
  PasswordLength = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  console.log("Password Length" + PasswordLength);

  if(!PasswordLength) {
    alert("A number is required")

  } else if (PasswordLength < 8 || PasswordLength > 128) {
    PasswordLength = prompt("You must choose a number between 8 and 128");
    console.log("Password Length" + PasswordLength);

  } else {
    Lowercase = confirm("Click to confirm lowercase letters.");
    console.log("Lowercase" + Lowercase);

    Uppercase = confirm("Click to confirm uppercase letters.");
    console.log("Uppercase" + Uppercase);

    Numbers = confirm("Click to confirm numbers.");
    console.log("Numbers" + Numbers)

    Specials = confirm("Click to confirm special characters.");
    console.log("Special Characters" + Specials);
  }
};

 if (!Lowercase && !Uppercase && !Numbers && !Specials) {
  userChoices = alert("You must choose an option!");

// ALL TRUE OPTIONS
} else if (Lowercase && Uppercase && Numbers && Specials) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}

// 3 out of 4 options
else if (Lowercase && Uppercase && Numbers) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (Lowercase && upperCase && Specials) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
else if (Lowercase && Numbers && Specials) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
else if (Uppercase && Numbers && Specials) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 out of 4 options
  else if (Lowercase && Uppercase) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (Lowercase && Numbers) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (Lowercase && Specials) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (Uppercase && Numbers) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (Uppercase && Specials) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (Numbers && Specials) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }

// 1 out of 4 options
else if (Lowercase) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (Uppercase) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}
else if (Numbers) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (Specials) {
  userChoices = special;
  console.log(userChoices);
};

//empty response
var passwordBlank= {};

// Random Selection

for (let i = 0; i < PasswordLength; ++i) {
  let random = Math.floor(Math.random() * Math.floor(ALL));
  password +=ALL[random];
}
//for (var i=0; i < PasswordLength; i++) {
  //var ALL = userChoices[Math.floor(Math.random() * userChoices.PasswordLength)];
  //passwordBlank.push(ALL);
  //console.log(ALL);
//}

//GENERATE PASSWORD
//var password = passwordBlank("password");
//var password = password.join('');
//userChoices(password);

function randompassword () {
  var password = passwordBlank.join("");
console.log(userChoices)
//generatePassword;
return password;
}

function userChoices(password) {
  document.getElementById("password").textContent = password;
}


 // generatePassword;


