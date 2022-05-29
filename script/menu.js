function loadQuizPage(x){ //function to load quiz page
    // x = name of quiz

    // check that quizName cookie exists before replacing value
    checkCookie('quizName');

    //update cookie value for quizName cookie
    setCookie('quizName', x, 365); 

    //redirect to quiz page
    window.location.assign("./quiz.html");
}

function getAvg(statName) //get average of scores on stats screen
{

  //statName = name of quiz for statistic

  if(getCookie(`${statName}ScoreArr`)) //if array for statName exists
  {
    let scoreAvg = 0; //reset scoreAvg value

    //get score array of current 
    let scoreArr = getCookie(`${statName}ScoreArr`);

    //parse score array to turn it from string into array
    scoreArr = JSON.parse(scoreArr);
    
    for(i=0; i<scoreArr.length; i++) //loop through user score array
    {

      //add each score to scoreAvg variable
      scoreAvg += scoreArr[i];
    
    }

    //divide scoreAvg by length of score array to find average
    scoreAvg = scoreAvg/scoreArr.length;

    //return value to the value of one decimal place
    return Math.round(scoreAvg * 10) / 10;

  } else //if array from statName does NOT exist
  {

    //return null value
    return null;

  }
}

function load(statName) { //function to load accuracy percentage

  //statName = name of quiz for statistic

  var i = 0; //reset i var

  if (i == 0) { //if function is over

    i = 1; //change i to 1

    //store accuracy element as elem
    var elem = document.getElementById(`${statName}Accuracy`);
    
    //get average of current stat score
    let avg = getAvg(statName);
    
    //calculate percentage from average
    let widthPerc = (avg/5)*100;

    //reset width variable
    var width = 0;

    //set interval to animate frame function
    var id = setInterval(frame, 8);

    function frame() { //function to animate accuracy load

      if (width >= widthPerc) { //if width is more than the percentage

        clearInterval(id); //clear interval
        i = 0; //reset i to 0

      } else { //if width is not more than percentage

        width++; //add one more to width

        //change style and text for new width
        elem.style.width = `${width}%`;
        elem.innerText=`${width}%`;

      }
    }
  }
}

function loadScoreAvg(quizName) //function used to display average score
{

  //quizName = name of quiz

  let avg = getAvg(quizName); //get average score of current quiz

  if(avg){ //if average score exists

    //change text and style to display average
    document.getElementById(`${quizName}Score`).innerText= avg;
    document.getElementById(`${quizName}Score`).style.fontSize= '25px';
    document.getElementById(`${quizName}Score`).style.fontWeight= '600';
  
  } else { //if average score does not exist
  
    //display 'not attempted' text
    document.getElementById(`${quizName}Score`).innerText= 'Not Attempted';
  
  }
}

function loadProgress() //function used to call load(statName) function
{

  //load stats for each quiz
  load('physics');
  load('arithmetic');
  load('chemistry');
  load('geography');
  load('history');

}

function loadTab(tabName){ //function used to load current tab

  // get menu tabs
  let quizTab = document.getElementById('quizTab');
  let statTab = document.getElementById('statTab');

  //remove active class from each tab
  quizTab.classList.remove('active');
  statTab.classList.remove('active');

  //get currently selected tab and add active class
  let selected = document.getElementById(`${tabName}Tab`);
  selected.classList.add('active');

  //reset display of each menu section
  let quizSec = document.getElementById('quiz-menu');
  let statSec = document.getElementById('stat-menu');
  quizSec.style.display="none";
  statSec.style.display="none";

  //display current tab's section
  document.getElementById(`${tabName}-menu`).style.display="block";

  if(tabName == 'stat') //if stat tab is currently active
  {
      //reset accuracy div width
      document.getElementById("physicsAccuracy").style.width="0%";
      document.getElementById("arithmeticAccuracy").style.width="0%";
      document.getElementById("chemistryAccuracy").style.width="0%";
      document.getElementById("geographyAccuracy").style.width="0%";
      document.getElementById("historyAccuracy").style.width="0%";
    
      //load average of each quiz
      loadScoreAvg('physics');
      loadScoreAvg('arithmetic');
      loadScoreAvg('chemistry');
      loadScoreAvg('geography');
      loadScoreAvg('history');

      //set timeout to wait before running loadProgress function
    setTimeout(loadProgress, 300);
  }
}