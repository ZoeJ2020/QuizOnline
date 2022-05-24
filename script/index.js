function userValidate()
{
  document.getElementById('emailError').innerText = "";
  document.getElementById('userError').innerText = "";

  let userEmail = document.getElementById('userEmail').value;
  let validEmail = userEmail.includes('@');
  let userName = document.getElementById('userName').value;


  if(userEmail) // if userEmail has been filled in, then
  {
    if(validEmail != false) //if email is valid then
    {
      if(userName) //if username exists/has a value then
      {
        checkCookie('userName');
        loadUser();
      } else //if username is empty
      {
        document.getElementById('userError').innerText = "Error: Username field empty.";
      }

    } else{
      document.getElementById('emailError').innerText = "Error: Invalid email entered.";
    }

  } else { //if userEmail is null or empty, display error
    document.getElementById('emailError').innerText = "Error: email field is empty";
  }
}

function loadUser()
{
  window.location.replace("/menu.html");
}

  //FUNCTION LIST

  // If email includes @, proceed
  //if not, display error
  
  //proceed
  //check username input value, if saved in username cookie then go to menu page
  //if username does not exist then create new cookie
