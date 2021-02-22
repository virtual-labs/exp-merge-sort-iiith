/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. What are the sizes of the sub-arrays when you split an array of size 5?", ///// Write the question inside double quotes
            answers: {
                a: "1,4 ", ///// Write the option 1 inside double quotes
                b: "2, 3", ///// Write the option 2 inside double quotes
 		c: " Unknown sizes", ///// Write the option 3 inside double quotes
                d: " Insufficient information", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2.  What is the size of the merged array when you merge two arrays of size 3 each?",  ///// Write the question inside double quotes
      answers: {
        a: "3",                  ///// Write the option 1 inside double quotes
        b: "6",                  ///// Write the option 2 inside double quotes
	c: "7", ///// Write the option 3 inside double quotes
        d: " Insufficient information ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is the best case complexity of Merge Sort?",  ///// Write the question inside double quotes
      answers: {
        a: "O(n log n) ",                  ///// Write the option 1 inside double quotes
        b: " O(n)",                  ///// Write the option 2 inside double quotes
	c: "O(log n)", ///// Write the option 3 inside double quotes
        d: "O(n2)", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "4.  Which is the false statement for Merge Sort?",  ///// Write the question inside double quotes
      answers: {
        a: "The algorithm is recursive.",                  ///// Write the option 1 inside double quotes
        b: "The algorithm requires extra storage for a temporary copy. ",                  ///// Write the option 2 inside double quotes
	c: "The invariant is that after each merge one more element is in its final position.", ///// Write the option 3 inside double quotes
        d: "It is not an in-place sorting algorithm. ", ///// Write the option 4 inside double quotes
	
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "5. Which of the following sorting algorithms has the lowest worst-case complexity?",  ///// Write the question inside double quotes
      answers: {
        a: "Merge Sort ",                  ///// Write the option 1 inside double quotes
        b: "Bubble Sort ",                  ///// Write the option 2 inside double quotes
	c: "Quick Sort  ", ///// Write the option 3 inside double quotes
        d: "Selection Sort ", ///// Write the option 4 inside double quotes
	e: " A,C ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "6. Which of the following sorting algorithms, has a running time that is least dependent on the initial ordering of the input?",  ///// Write the question inside double quotes
      answers: {
        a: "Merge Sort ",                  ///// Write the option 1 inside double quotes
        b: " Insertion Sort  ",                  ///// Write the option 2 inside double quotes
	c: " Selection Sort  ", ///// Write the option 3 inside double quotes
        d: "Quick Sort  ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


{
      question: "7.In a modified Merge Sort, the input array is splitted at a position one-third of the length(N) of the array. What is the worst case time complexity of this Merge Sort?",  ///// Write the question inside double quotes
      answers: {
        a: " N(logN base 3)  ",                  ///// Write the option 1 inside double quotes
        b: " N(logN base 2/3) ",                  ///// Write the option 2 inside double quotes
	c: "N(logN base 1/3)   ", ///// Write the option 3 inside double quotes
        d: " N(logN base 3/2)  ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
