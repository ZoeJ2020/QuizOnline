function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie(cookieName) {

    let cookieValue = getCookie(cookieName);
    if (!cookieValue) {
      cookieValue = document.getElementById(cookieName).value;
      if (cookieValue != "" && cookieValue != null) {
        setCookie(cookieName, cookieValue, 365);
      }
    }
  } 

function welcomeMessage()
{
  const date = new Date();
  document.getElementById('date').innerText=date;

  let user = getCookie('userName');
  document.getElementById('welcome-msg').innerText=`Welcome, ${user}!`;
}