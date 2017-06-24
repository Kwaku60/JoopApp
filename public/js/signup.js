$(document).ready(function() {
  // Getting references to our form and input

  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
     var randomUserId = Math.floor((Math.random() * 15) +1);

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
   
         console.log("on submit functions");
   //runs here
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      randomVal: randomUserId
    };

    if (!userData.email || !userData.password || !userData.randomVal) {
      return;



    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.randomVal);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, randomVal) {
     alert("running singup");
    $.post("/api/signup", {

      email: email,
      password: password,
      randomVal: randomVal
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});
