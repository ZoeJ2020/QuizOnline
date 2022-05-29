//initialise global score variable for functions
let score = 0;

//Physics quiz information list
const PhysicsQuestions = [
    {
        id: 0, //question number
        q: "Heat energy is measured in ___.", //question
        choices: [ //available options
            "Celcius",
            "Joules",
            "Kilograms",
            "Amps"
        ],
        answer: "Joules" //correct option
    },
    {
        id: 1,
        q: "Which of these is a scalar quantity?",
        choices: [
            "Mass",
            "Temperature",
            "Distance",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        id: 2,
        q: "Temperature is measured in ___.",
        choices: [
            "Kilograms",
            "Joules",
            "Amps",
            "Celcius"
        ],
        answer: "Celcius"
    },
    {
        id: 3,
        q: "What does an Ohm measure?",
        choices: [
            "Air resistance",
            "Electrical resistance",
            "Temperature of plasma",
            "Volume of gas"
        ],
        answer: "Electrical resistance"
    },
    {
        id: 4,
        q: "Which of these is NOT a state of matter?",
        choices: [
            "Gas",
            "Liquid",
            "Solid",
            "They are all states of matter"
        ],
        answer: "They are all states of matter"
    },
]

//Arithmetic quiz information list
const ArithmeticQuestions = [
    {
        id: 0, //question number
        q: "137 + 42 = ?", //question
        choices: [ //available options
            "218",
            "230",
            "182",
            "179"
        ],
        answer: "179" //correct option
    },
    {
        id: 1,
        q: "3 x 190 = ?",
        choices: [
            "430",
            "370",
            "570",
            "500"
        ],
        answer: "570"
    },
    {
        id: 2,
        q: "1700 / 100 = ?",
        choices: [
            "17",
            "170",
            "1700",
            "17000"
        ],
        answer: "17"
    },
    {
        id: 3,
        q: "if 2x = 4 then x + ?",
        choices: [
            "2",
            "3",
            "5",
            "12"
        ],
        answer: "2"
    },
    {
        id: 4,
        q: "(3-2) x 30",
        choices: [
            "50",
            "20",
            "30",
            "40"
        ],
        answer: "30"
    }
]

//Chemistry quiz information list
const ChemistryQuestions = [
    {
        id: 0, //question number
        q: "which of these is the symbol for Hydrogen?", //question
        choices: [ //available options
            "H2",
            "CH4",
            "NH3",
            "H2O"
        ],
        answer: "H2" //correct option
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

//Geography quiz information list
const GeographyQuestions = [
    {
        id: 0, //question number
        q: "Which continent is in all four hemispheres?", //question
        choices: [ //available options
            "Asia",
            "Africa",
            "Europe",
            "South/North America"
        ],
        answer: "Africa" //correct option
    },
    {
        id: 1,
        q: "In which country would you find the city of Dresden?",
        choices: [
            "Denmark",
            "Australia",
            "Germany",
            "Ireland"
        ],
        answer: "Germany"
    },
    {
        id: 2,
        q: "How many time zones does Australia have?",
        choices: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        answer: "Three"
    },
    {
        id: 3,
        q: "How many large islands make up Hawaii?",
        choices: [
            "Five",
            "Six",
            "Seven",
            "Eight"
        ],
        answer: "Eight"
    },
    {
        id: 4,
        q: "After Alaska, which U.S. state has the longest coastline?",
        choices: [
            "Florida",
            "New York",
            "Wyoming",
            "Texas"
        ],
        answer: "Florida"
    }
]

//History quiz information list
const HistoryQuestions = [
    {
        id: 0, //question number
        q: "For how many years did the 100 years war last?", //question
        choices: [ //available options
            "100 years",
            "99 years",
            "120 years",
            "116 years"
        ],
        answer: "116 years" //correct option
    },
    {
        id: 1,
        q: "What was the name of the research ship Charles Darwin traveled with?",
        choices: [
            "The Beagle",
            "The Daschund",
            "The Bull",
            "The Terrier"
        ],
        answer: "The Beagle"
    },
    {
        id: 2,
        q: "How many days in a week were there in ancient Roman times?",
        choices: [
            "8",
            "7",
            "10",
            "9"
        ],
        answer: "8"
    },
    {
        id: 3,
        q: "How many U.S. presidents have been assassinated?",
        choices: [
            "Four",
            "One",
            "Two",
            "Three"
        ],
        answer: "Four"
    },
    {
        id: 4,
        q: "In which country did the Easter Rising take place in 1916?",
        choices: [
            "Wales",
            "England",
            "Ireland",
            "Scotland"
        ],
        answer: "Ireland"
    }
]

//initialise user array to store choices and calculate results
let userChoicesArr= []; 

//function for loading quiz name and relative questions
function loadQuizName(){
    //load welcome message on body load
    welcomeMessage(); 

    //store quizName cookie value
    quizName = getCookie('quizName'); 
    document.getElementById('header').innerText=`${quizName} Quiz`; //display correct header

    switch(quizName) //takes quizName cookie into switchcase
    {
        case 'Physics': //if quizName = 'Physics'
            loadQuestion(0, PhysicsQuestions); //load first question of PhysicsQuestions object

        break;

        case 'Arithmetic': //if quizName = 'Arithmetic'
            loadQuestion(0, ArithmeticQuestions); //load first question of ArithmeticQuestions object

        break;

        case 'Chemistry': //if quizName = 'Chemistry'
            loadQuestion(0, ChemistryQuestions); //load first question of ChemistryQuestions object

        break;

        case 'Geography': //if quizName = 'Geography'
            loadQuestion(0, GeographyQuestions); //load first question of GeographyQuestions object

        break;

        case 'History': //if quizName = 'History'
            loadQuestion(0, HistoryQuestions); //load first question of HistoryQuestions object

        break; 

        default: //if none of these cases appear, display error
            console.log('error within quiz.js quizName switch statement');
        break;
    }
}

//function for adding new score to array to calculate average/accuracy
function addScore(score, quizName)
{  

    // Check if cookie array for quiz exists
    if(getCookie(`${quizName}ScoreArr`)) //if cookie exists
    {

        //parse cookie string to get original array from cookie
        scoreArr = JSON.parse(getCookie(`${quizName}ScoreArr`));

    } else // if cookie does not exist
    {

        scoreArr = []; // create new array variable for cookie

    }

    scoreArr.push(score); // push score into new array

    // turn array to string for cookie compatibility
    scoreArr = JSON.stringify(scoreArr); 

     // set updated cookie with new array value
    setCookie(`${quizName}ScoreArr`, scoreArr, 365);   
}

//function to load results and corrections on results page
function loadResults(objectName, score)
{
    //create div for results
    const resultDiv = document.getElementById('quiz-result');
    // create header for question
    const newH2 = document.createElement('h2'); //create new h2
    newH2.innerText=`Results`; // change text of header
    document.body.insertBefore(newH2, resultDiv); // insert header into div

    //create section for user score display
    const userScore = document.createElement('p'); //create new p
    userScore.classList.add('score'); //add score class for CSS
    userScore.innerText=`${score}/5`; //change text using score parameter
    document.body.insertBefore(userScore, resultDiv); // insert score into div

    //create section for pass/fail display
    const userMark = document.createElement('p'); //create new p
    userMark.classList.add('mark'); //add mark class for CSS

    if(score < 3) // if score is under 3 (pass mark)
    {
        userMark.innerText=`Fail`; //change text of mark p to fail
        userMark.style.color=`red`; //change colour of mark p

    } else //if score is not under 3 (pass mark)
    {
        userMark.innerText=`Pass`; //change text of mark p to pass
        userMark.style.color=`green`; //change colour of mark p

    }
    document.body.insertBefore(userMark, resultDiv); //insert mark into div

    if(score == 5) // if full marks, display full mark message
    {
        // show fullMark div
        document.getElementById('fullMark').style.display="block";
    }

    switch(objectName){ //switch case for name of quiz
        case PhysicsQuestions: //if case is physics quiz
            addScore(score, 'physics'); //update score array of physics quiz
        break;

        case ArithmeticQuestions: //if case is arithmetic quiz
            addScore(score, 'arithmetic'); //update score array of arithmetic quiz
        break;

        case ChemistryQuestions: //if case is aritmetic quiz
            addScore(score, 'chemistry'); //update score array of chemistry quiz
        break;

        case GeographyQuestions: //if case is geography quiz
            addScore(score, 'geography'); //update score array of geography quiz
        break;

        case HistoryQuestions: //if case is history quiz
            addScore(score, 'history'); //update score array of history quiz
        break;
        default:
            console.log('error within objectName switch, 197'); //log error
        break;
    }

    //loop through length of userChoicesArr array
    userChoicesArr.forEach(function(element, index) //for each userChoice element in array
    {
        let objectAns = objectName[index].answer; //objectAns variable is correct answer from quiz block
        if(objectAns != element) //if user answer is not current element, create correction
        {
            // get quiz result div
            const resultDiv = document.getElementById('quiz-result');

            // create div for correction
            const correctionDiv = document.createElement('div');
            correctionDiv.classList.add('crrtDiv'); //add CSS class

            // create header for question
            const newH3 = document.createElement('h3'); 
            newH3.innerText=`Question ${index+1}`; //change text to match question
            correctionDiv.appendChild(newH3); //add new header to correction div

            // create header for user answer
            const userAns = document.createElement('p');
            userAns.innerText=`Your Answer: ${element}`;
            correctionDiv.appendChild(userAns);

            // create header for question
            const qAns = document.createElement('p');
            qAns.innerText=`Correct Answer: ${objectAns}`;
            correctionDiv.appendChild(qAns);
            
            // insert correction div before result div
            document.body.insertBefore(correctionDiv, resultDiv);
        }
    })

    // Display quiz result div
    document.getElementById('quiz-result').style.display='block';

    //Hide quiz interface
    document.getElementById('quiz-interface').style.display='none';
}

//function used to load each question and handle quiz interaction
function loadQuestion(id, objectName){
    // reset selected and button display
    const nextButton = document.getElementById('next-button');

    //add event listener
    nextButton.addEventListener('click', nextFunction);


    if(id == 4) //if last question is loaded
    {
        //change button text to Finish
        nextButton.innerText="Finish";
    }

    //reset next button display for new question
    nextButton.style.display='none';

    //update question number
    document.getElementById('question').innerText=`Question ${id+1}`

    //get result display and reset
    let result = document.getElementById('question-result');
    result.innerText = "";

    //get error button display and reset
    let buttonErr = document.getElementById('button-err');
    buttonErr.innerText = "";

    //set question text
    let question = document.getElementById('quiz-question');
    question.innerText = objectName[id].q;

    //get choices
    const op1 = document.getElementById('option-1');
    const op2 = document.getElementById('option-2');
    const op3 = document.getElementById('option-3');
    const op4 = document.getElementById('option-4');

    //reset choice text colour to default
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

    // on button click, load submit function
    op1.addEventListener('click', function(){
        submitFunction(op1); //on option 1 click, submit with first option
    })

    op2.addEventListener('click', function(){
        submitFunction(op2); //on option 2 click, submit with second option
    })

    op3.addEventListener('click', function(){
        submitFunction(op3); //on option 3 click, submit with third option
    })

    op4.addEventListener('click', function(){
        submitFunction(op4); //on option 4 click, submit with fourth option
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

            if(selected.innerText == opAnswer) //if chosen answer is the same as quesiton answer
            {
                //change style to display correct message
                result.innerText="Correct! +1";
                result.style.color="green";
                selected.style.color="green";

                //add to score variable
                score++;

            } else //if choice is NOT question answer
            {
                //change style to display correct message
                result.innerText="Incorrect!";
                result.style.color="red";
                selected.style.color="red";

                //pass user answer into getCorrectAns function
                getCorrectAns(opAnswer);
            } 

            //display 'next' button
            nextButton.style.display='block';

            //reset options by cloning original nodes and replacing
            op1.replaceWith(op1.cloneNode(true));
            op2.replaceWith(op2.cloneNode(true));
            op3.replaceWith(op3.cloneNode(true));
            op4.replaceWith(op4.cloneNode(true));    
        }
    }

    function nextFunction() //function to load next question
    {
        //remove event listener from next button for new addEventListener in loadQuestion function
        nextButton.removeEventListener('click', nextFunction);

        if(id < 4) //if question id is less than 4
        {
            id++; //add 1 to id
            loadQuestion(id, objectName); //pass new id into loadQuestion function

        } else //if question id is not less than 4
        {
            //load results function with user's current score
            loadResults(objectName, score);
        }

    }
}