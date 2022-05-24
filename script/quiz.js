
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
    const submitButton = document.getElementById('submit-button');

    if(id == 4)
    {
        nextButton.innerText="Finish";
    }

    nextButton.style.display='none';
    submitButton.style.display='block';

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

    op1.style.backgroundColor="white";
    op2.style.backgroundColor="white";
    op3.style.backgroundColor="white";
    op4.style.backgroundColor="white";

    //set choice text
    op1.innerText = objectName[id].choices[0]; 
    op2.innerText = objectName[id].choices[1]; 
    op3.innerText = objectName[id].choices[2]; 
    op4.innerText = objectName[id].choices[3]; 

    //get answer value
    opAnswer = objectName[id].answer;

    let selected = "";

    // on button click, change colour and selected button
    op1.addEventListener('click', () => {
        op1.style.backgroundColor="rgb(11, 156, 122)";
        op2.style.backgroundColor="white";
        op3.style.backgroundColor="white";
        op4.style.backgroundColor="white";

        selected = op1;
    })

    op2.addEventListener('click', () => {
        op1.style.backgroundColor="white";
        op2.style.backgroundColor="rgb(11, 156, 122)";
        op3.style.backgroundColor="white";
        op4.style.backgroundColor="white";

        selected = op2;
    })

    op3.addEventListener('click', () => {
        op1.style.backgroundColor="white";
        op2.style.backgroundColor="white";
        op3.style.backgroundColor="rgb(11, 156, 122)";
        op4.style.backgroundColor="white";

        selected = op3;
    })

    op4.addEventListener('click', () => {
        op1.style.backgroundColor="white";
        op2.style.backgroundColor="white";
        op3.style.backgroundColor="white";
        op4.style.backgroundColor="rgb(11, 156, 122)";

        selected = op4;
    })
    
    function submitFunction()
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
                selected.style.backgroundColor="green";

                nextButton.style.display='block';
                submitButton.style.display='none';
                score++;
        
                // remove event listener for next function load
                submitButton.removeEventListener('click', submitFunction);
            } else
            {
                result.innerText="Incorrect!";
                result.style.color="red";
                selected.style.backgroundColor="red";

                nextButton.style.display='block';
                submitButton.style.display='none';
                
                // remove event listener for next function load
                submitButton.removeEventListener('click', submitFunction);
            }    
        } else
        {
            buttonErr.innerText="Please select an answer."
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
    submitButton.addEventListener('click', submitFunction);
    nextButton.addEventListener('click', nextFunction);
}