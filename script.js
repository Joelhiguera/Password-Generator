var password = document.getElementById('password') //Created a password varaible and connects it to password id in HTML


function generate() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-ABCDEFGHIJKLMNOPQRSTUVWXYZ' // all of the characters that can be used in the password
  var passwordLength = 12 // length of the password 
  var password = ''
for (var i  = 0; i <= passwordLength; i++) { // for loop so that it concatenates until it reaches passwordLength
    var randomNumber = Math.floor(Math.random() * chars.length); // randomizes the characters in chars.length
    password += chars.substring(randomNumber, randomNumber +1); // creates a string with the randomized chars and applies it to var password
}
    document.getElementById('password').value = password; //prints it out onto the password input box
    
}

function copyPassword() {
    var copyText = document.getElementById('password')
    copyText.select()
    document.execCommand('copy')

 
}

