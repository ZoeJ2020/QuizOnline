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
      checkCookie('userName');
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

}

function loadUser()
{
  window.location.replace("./menu.html");
}

function displayDate()
{
  const date = new Date();
  document.getElementById('date').innerText=date;
}