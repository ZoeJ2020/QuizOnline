function setCookie(cname, cvalue, exdays) { //function to create new cookie/update existing cookie
  
  // cname = cookie name
  // cvalue = value of cookie
  // exdays = days until expiry

  const d = new Date(); //set d variable value as date

  //set time of d variable
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

  let expires = "expires="+d.toUTCString(); //stringify for expiry date

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cookieName) { //function used to fetch cookie value

  // cookieName = name of cookie

    let name = cookieName + "="; // add = to cookie name, name to search for

    let decodedCookie = decodeURIComponent(document.cookie); //decode cookie to handle special characters

    let ca = decodedCookie.split(';'); //split cookies on ;

    for(let i = 0; i < ca.length; i++) { //loop through ca array
      let c = ca[i]; //value of current cookie

      while (c.charAt(0) == ' ') {
        c = c.substring(1); 
      }

      if (c.indexOf(name) == 0) { //if cookie is found

        //return cookie value
        return c.substring(name.length, c.length);
      
      }
    }
    return ""; //if cookie not found, return ""
}

function checkCookie(cookieName) { //function used to check if cookie exists

  //cookieName = cookie name

  let cookieValue = getCookie(cookieName); //fetch value of
  if (!cookieValue) { //if cookieValue does not exist

    cookieValue = document.getElementById(cookieName).value;
    
    if (cookieValue != "" && cookieValue != null) { //if cookie does not exist
    
      //create new cookie
      setCookie(cookieName, cookieValue, 365);

    }
  }
} 

function welcomeMessage() { //function used to display welcome message

  const date = new Date(); //assign current date to date var

  document.getElementById('date').innerText=date; //change text to current date

  let user = getCookie('userName'); //get value of userName cookie
  document.getElementById('welcome-msg').innerText=`Welcome, ${user}!`; //change text to include username cookie

}