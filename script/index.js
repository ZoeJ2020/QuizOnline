function userValidate() //function for validating user input on login page
{
  //get emailError and userError divs for error display
  let emailErr =  document.getElementById('emailError');
  let userErr =  document.getElementById('userError');

  //reset error messages
  emailErr.innerText="";
  userErr.innerText="";

  //get values of user email and username
  let userEmail = document.getElementById('userEmail').value;
  let userName = document.getElementById('userName').value;

  //check if userEmail string includes an @
  let validEmail = userEmail.includes('@');


  if(userEmail && userName) //if userEmail and userName inputs are filled
  {

    if(validEmail == true) //if email input contains an @
    {

      checkCookie('userName'); //check if username cookie exists
      loadUser(); //load user into site

    } else //if email does not contain @
    {

      //display error
      emailErr.innerText="Email is not valid";

    }
 
  } else //if userEmail and userName inputs are NOT filled

  {
    if(!userEmail) //if userEmail is missing
    {
      
      //display error
      emailErr.innerText="Email is missing";

    }  else //if userEmail is not missing
    {

      if(!validEmail) //if email does not contain @
      {

        //display error
        emailErr.innerText="Email is not valid";
      
      }
    
    }
    
    if(!userName) //if userName is missing
    {

      //display error
      userErr.innerText="User is missing";
    
    }
  }

}

function loadUser() //function to redirect user
{

  //redirect to menu page
  window.location.replace("./menu.html");

}

function displayDate() //display date on index page
{

  const date = new Date(); //get current date
  document.getElementById('date').innerText=date; //change text to date variable

}