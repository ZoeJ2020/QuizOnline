
let score = 0;

const PhysicsQuestions = [
    {
        id: 0,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    },
    {
        id: 1,
        q: "Select D",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "D"
    },
    {
        id: 2,
        q: "Select B",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "B"
    },
    {
        id: 3,
        q: "Select C",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "C"
    },
    {
        id: 4,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    },
]

const ArithmeticQuestions = [
    {
        id: 0,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    },
    {
        id: 1,
        q: "Select D",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "D"
    },
    {
        id: 2,
        q: "Select B",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "B"
    },
    {
        id: 3,
        q: "Select C",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "C"
    },
    {
        id: 4,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    }
]

const ChemistryQuestions = [
    {
        id: 0,
        q: "which of these is the symbol for Hydrogen?",
        choices: [
            "H2",
            "CH4",
            "NH3",
            "H2O"
        ],
        answer: "H2"
    },
    {
        id: 1,
        q: "An atom of sodium will ___ an electron and form a ___ ion.",
        choices: [
            "gain, negative",
            "gain, positive",
            "lose, positive",
            "lose, negative"
        ],
        answer: "lose, positive"
    },
    {
        id: 2,
        q: "Magnesium has which electron arrangement?",
        choices: [
            "2,8,2",
            "2,8,7",
            "3,4,3",
            "5,7,6"
        ],
        answer: "2,8,2"
    },
    {
        id: 3,
        q: "Alkali metals are found in which element group?",
        choices: [
            "Group 7",
            "Group 1",
            "Group 0",
            "Group 2/3"
        ],
        answer: "Group 1"
    },
    {
        id: 4,
        q: "Halogens are found in which element group?",
        choices: [
            "Group 1",
            "Group 0",
            "Group 2/3",
            "Group 7"
        ],
        answer: "Group 7"
    }
]

const GeographyQuestions = [
    {
        id: 0,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    },
    {
        id: 1,
        q: "Select D",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "D"
    },
    {
        id: 2,
        q: "Select B",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "B"
    },
    {
        id: 3,
        q: "Select C",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "C"
    },
    {
        id: 4,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    }
]

const HistoryQuestions = [
    {
        id: 0,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    },
    {
        id: 1,
        q: "Select D",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "D"
    },
    {
        id: 2,
        q: "Select B",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "B"
    },
    {
        id: 3,
        q: "Select C",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "C"
    },
    {
        id: 4,
        q: "Select A",
        choices: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "A"
    }
]

let userChoicesArr= [];

function loadQuizName(){
    welcomeMessage();

    quizName = getCookie('quizName');
    document.getElementById('header').innerText=`${quizName} Quiz`;

    switch(quizName)
    {
        case 'Physics':
            loadQuestion(0, PhysicsQuestions);

        break;

        case 'Arithmetic':
            loadQuestion(0, ArithmeticQuestions);

        break;

        case 'Chemistry':
            loadQuestion(0, ChemistryQuestions);

        break;

        case 'Geography':
            loadQuestion(0, GeographyQuestions);

        break;

        case 'History':
            loadQuestion(0, HistoryQuestions);

        break; 

        default:
            console.log('error within quiz.js quizName switch statement');
        break;
    }
}

function addScore(score, quizName)
{   
    // Check if cookie array for quiz exists
    if(getCookie(`${quizName}ScoreArr`))
    {
        scoreArr = JSON.parse(getCookie(`${quizName}ScoreArr`));

    } else // if cookie does not exist
    {
        scoreArr = [];        // create new array variable for cookie
    }

    scoreArr.push(score);        // push score into new array

    scoreArr = JSON.stringify(scoreArr);     // stringify array for cookie compatibility
    setCookie(`${quizName}ScoreArr`, scoreArr, 365);    // set updated cookie with new array value
}

function loadResults(objectName, score)
{
    const resultDiv = document.getElementById('quiz-result');
    // create header for question
    const newH2 = document.createElement('h2');
    newH2.innerText=`Results`;
    document.body.insertBefore(newH2, resultDiv);

    const userScore = document.createElement('p');
    userScore.classList.add('score');
    userScore.innerText=`${score}/5`;
    document.body.insertBefore(userScore, resultDiv);

    if(score == 5) // if full marks, display full mark message
    {
        document.getElementById('fullMark').style.display="block";
    }

    switch(objectName){
        case PhysicsQuestions:
            addScore(score, 'physics');
        break;

        case ArithmeticQuestions:
            addScore(score, 'arithmetic');
        break;

        case ChemistryQuestions:
            addScore(score, 'chemistry');
        break;

        case GeographyQuestions:
            addScore(score, 'geography');
        break;

        case HistoryQuestions:
            addScore(score, 'history');
        break;
        default:
            console.log('error within objectName switch, 197');
        break;
    }

    //loop through length of userChoicesArr array
    userChoicesArr.forEach(function(element, index)
    {
        let objectAns = objectName[index].answer;
        if(objectAns != element)
        {
            const resultDiv = document.getElementById('quiz-result');

            const correctionDiv = document.createElement('div');
            correctionDiv.classList.add('crrtDiv');

            // create header for question
            const newH3 = document.createElement('h3');
            newH3.innerText=`Question ${index+1}`;
            correctionDiv.appendChild(newH3);

            // create header for user answer
            const userAns = document.createElement('p');
            userAns.innerText=`Your Answer: ${element}`;
            correctionDiv.appendChild(userAns);

            // create header for question
            const qAns = document.createElement('p');
            qAns.innerText=`Correct Answer: ${objectAns}`;
            correctionDiv.appendChild(qAns);
            
            document.body.insertBefore(correctionDiv, resultDiv);
        }
    })
    document.getElementById('quiz-result').style.display='block';
    document.getElementById('quiz-interface').style.display='none';
}

function loadQuestion(id, objectName){
    // reset selected and button display
    const nextButton = document.getElementById('next-button');

    if(id == 4)
    {
        nextButton.innerText="Finish";
    }

    nextButton.style.display='none';

    //change question number
    document.getElementById('question').innerText=`Question ${id+1}`

    //get result display and reset
    let result = document.getElementById('question-result');
    result.innerText = "";

    //get error button display and reset
    let buttonErr = document.getElementById('button-err');
    buttonErr.innerText = "";

    // set question text
    let question = document.getElementById('quiz-question');
    question.innerText = objectName[id].q;

    //get choices
    const op1 = document.getElementById('option-1');
    const op2 = document.getElementById('option-2');
    const op3 = document.getElementById('option-3');
    const op4 = document.getElementById('option-4');

    op1.style.color="black";
    op2.style.color="black";
    op3.style.color="black";
    op4.style.color="black";

    //set choice text
    op1.innerText = objectName[id].choices[0]; 
    op2.innerText = objectName[id].choices[1]; 
    op3.innerText = objectName[id].choices[2]; 
    op4.innerText = objectName[id].choices[3]; 

    //get answer value
    opAnswer = objectName[id].answer;

    // on button click, change colour and selected button
    op1.addEventListener('click', function(){
        submitFunction(op1);
    })

    op2.addEventListener('click', function(){
        submitFunction(op2);
    })

    op3.addEventListener('click', function(){
        submitFunction(op3);
    })

    op4.addEventListener('click', function(){
        submitFunction(op4);
    })
    
    function getCorrectAns(opAnswer){
        for(i=1; i<5; i++)
        {
            let option = document.getElementById(`option-${i}`);

            if(option.innerText == opAnswer)
            {
                option.style.color="rgb(53, 222, 53)";
            }
        }
    }

    function submitFunction(selected)
    {
        //when submit button is clicked, return answer
        if(selected)
        {
            // add user answer to userChoicesArr array
            userChoicesArr.push(selected.innerText);

            if(selected.innerText == opAnswer)
            {
                result.innerText="Correct! +1";
                result.style.color="green";
                selected.style.color="green";

                nextButton.style.display='block';
                score++;
            } else
            {
                result.innerText="Incorrect!";
                result.style.color="red";
                selected.style.color="red";
                getCorrectAns(opAnswer);

                nextButton.style.display='block';
            } 

            op1.replaceWith(op1.cloneNode(true));
            op2.replaceWith(op2.cloneNode(true));
            op3.replaceWith(op3.cloneNode(true));
            op4.replaceWith(op4.cloneNode(true));    
        }
    }

    function nextFunction()
    {
        //when submit button is clicked, return answer
        if(id < 4)
        {
            id++;
            loadQuestion(id, objectName);
            
            // remove event listener for next function load
            nextButton.removeEventListener('click', nextFunction);
        } else
        {
            loadResults(objectName, score);
        }
    }

    //event listeners for each button
    nextButton.addEventListener('click', nextFunction);
}