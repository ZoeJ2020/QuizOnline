function loadQuizPage(x){
    //firstly, get name of quiz and store in quizName
    // x = name of quiz

    // check that quizName cookie exists before replacing value
    checkCookie('quizName');
    setCookie('quizName', x, 365);

    window.location.assign("./quiz.html");
}

function getAvg(statName)
{
  if(getCookie(`${statName}ScoreArr`))
  {
    let scoreArr = getCookie(`${statName}ScoreArr`);
    scoreArr = JSON.parse(scoreArr);

    let scoreAvg = 0;
    for(i=0; i<scoreArr.length; i++)
    {
      scoreAvg += scoreArr[i];
    }

    scoreAvg = scoreAvg/scoreArr.length;

    return scoreAvg;
  } else
  {
    return null;
  }
}

function load(statName) {

  var i = 0;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById(`${statName}Accuracy`);
    
    let avg = getAvg(statName);
    
    let widthPerc = (avg/5)*100;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= widthPerc) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = `${width}%`;
        elem.innerText=`${width}%`;
      }
    }
  }
}

function loadScoreAvg(quizName)
{
  let avg = getAvg(quizName);
  if(avg){
    document.getElementById(`${quizName}Score`).innerText= avg;
  } else {
    document.getElementById(`${quizName}Score`).innerText= 'Not Attempted';

  }
}

function loadProgress()
{
  load('physics');
  load('arithmetic');
  load('chemistry');
  load('geography');
  load('history');
}

function loadTab(tabName){
    let quizTab = document.getElementById('quizTab');
    let statTab = document.getElementById('statTab');

    quizTab.classList.remove('active');
    statTab.classList.remove('active');

    let selected = document.getElementById(`${tabName}Tab`);
    selected.classList.add('active');

    let quizSec = document.getElementById('quiz-menu');
    let statSec = document.getElementById('stat-menu');
    quizSec.style.display="none";
    statSec.style.display="none";

    document.getElementById(`${tabName}-menu`).style.display="block";

    if(tabName == 'stat')
    {
      document.getElementById("physicsAccuracy").style.width="0%";
      document.getElementById("arithmeticAccuracy").style.width="0%";
      document.getElementById("chemistryAccuracy").style.width="0%";
      document.getElementById("geographyAccuracy").style.width="0%";
      document.getElementById("historyAccuracy").style.width="0%";
    
      loadScoreAvg('physics');
      loadScoreAvg('arithmetic');
      loadScoreAvg('chemistry');
      loadScoreAvg('geography');
      loadScoreAvg('history');
      setTimeout(loadProgress, 300);
    }
}