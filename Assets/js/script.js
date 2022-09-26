// Assignment Code
var generateBtn = document.querySelector("#generate");

//generating password
function generatePassword() {
  //defining possible characters for the password.
  var lowerList = 'abcdefghijklmnopqrstuvwxyz';
  var upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numList = '0123456789';
  var charList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  var passLength = prompt("How Long would you like the password to be? \nPick a number between 8 and 128: ", "8" );
 
  //checking if the input is valid
  if(passLength >= 8 && passLength <= 128){
    var activeList = '';
    var workingPassword = '';

    var passLower = confirm("Would you like to include Lowercase letters in your password?\nSelect 'OK' for yes or 'Cancel' for no");

    var passUpper = confirm("Would you like to include Uppercase letters in your password?\nSelect 'OK' for yes or 'Cancel' for no");

    var passNum = confirm("Would you like to include Numbers in your password?\nSelect 'OK' for yes or 'Cancel' for no");

    var passChar = confirm("Would you like to include Special Characters in your password?\nSelect 'OK' for yes or 'Cancel' for no");
    
    //Checking if the user selected at least one criteria
    if(!passLower && !passUpper && !passNum && !passChar){
      alert('You must select at least one criteria to include in the password!');
      return('Invalid input, please try again.');
    }

    //adding lowercase letters if selected
    if(passLower){
      activeList += lowerList;
    }
    //adding uppercase letters if selected
    if(passUpper){
      activeList += upperList;
    }
    //adding numbers if selected
    if(passNum){
      activeList += numList;
    }
    //adding special characters if selected
    if(passChar){
      activeList += charList;
    }

    //generating password
    console.log('preloop\npasslength = ' + passLength + '\nActiveList length = ' + activeList.length);
    for(let i = 0; i < passLength; i++){
      workingPassword += activeList.charAt(Math.floor(Math.random() * activeList.length));
    }
    return(workingPassword);
  } else {
    alert('Invalid input! Length must be a number between 8 and 128.');
    return('Invalid input, please try again.');
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
