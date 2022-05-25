function userValidate()
{
  let emailErr =  document.getElementById('emailError');
  let userErr =  document.getElementById('userError');

  emailErr.innerText="";
  userErr.innerText="";

  let userEmail = document.getElementById('userEmail').value;
  let validEmail = userEmail.includes('@');
  let userName = document.getElementById('userName').value;

  if(userEmail && userName) //if userEmail and userName inputs are filled
  {

    if(validEmail == true)
    {
      loadUser();
    } else
    {
      emailErr.innerText="Email is not valid";
    }

  } else 

  {
    if(!userEmail) //if userEmail is missing, display message
    {
      emailErr.innerText="Email is missing";
    }  else
    {
      if(!validEmail)
      {
        emailErr.innerText="Email is not valid";
      }
    }
    
    if(!userName) //if userName is missing, display message
    {
      userErr.innerText="User is missing";
    }
  }

  // if(userEmail) // if userEmail has been filled in, then
  // {
  //   if(validEmail != false) //if email is valid then
  //   {
  //     if(userName) //if username exists/has a value then
  //     {
  //       checkCookie('userName');
  //       loadUser();
  //     } else //if username is empty
  //     {
  //       document.getElementById('userError').innerText = "Error: Username field empty.";
  //     }

  //   } else{
  //     document.getElementById('emailError').innerText = "Error: Invalid email entered.";
  //   }

  // } else { //if userEmail is null or empty, display error
  //   document.getElementById('emailError').innerText = "Error: email field is empty";
  // }
}

function loadUser()
{
  window.location.replace("/menu.html");
}

// if 