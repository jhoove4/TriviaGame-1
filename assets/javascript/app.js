var questions = [{
  question: "What is the name of the school that Harry Potter went to?",
  answers: ["Hogwarts School of Witchcraft and Wizardry", "Beauxbatons Academy of Magic", "Livermorny School of Witchcraft and Wizardry", "Durmstrang Institute"]
  correctAnswer: 0
 }, {
   question: "Who helped Harry Potter with Wizard's Chess?",
   answers: ["George", "Ron","Fred","Hermione"],
   correctAnswer: 1
 }, {
   question: "What was the Headmaster's name?".
   answers: ["Dolores Umbridge", "Minerva McGonagall","Albus Dumbledore", "Rubeus Hagrid"],
   correctAnswer: 2
 }, {
   question: "Who was the keeper of the keys at Hogwarts?",
   answers: ["Albus Dumbledore", "Argus Filch", "Mrs. Norris", "Rubeus Hagrid"],
   correctAnswer: 3
 }, {
   question: "Who was awarded points for standing up against his friends?",
   answers: ["Neville Longbottom", "Draco Malfoy","Fred and George Weasley", "Hermione Granger"],
   correctAnswer: 0
 }, {
   question: "Who was the Order of Pheonix named after?",
   answers: ["Sirius", "Fawkes", "Moody","Quirrell"],
   correctAnswer: 1
 }, {
   question: "What saved baby Harry Potter?",
   answers: ["Goblet of Fire", "Wand", "Love", "Magic"],
   correctAnswer: 2
 }, {
   question: "Who helped Harry Potter with all her crazy wisdom?",
   answers: ["Hermione Grander", "Cho Chang", "Lavender Brown", "Luna Lovegood"],
   correctAnswer: 3
 }];

$(document).ready(function() {
  //Display the first question:
  displayCurrentQuestion();

  $(this).find(".quizMessage").hide();

  //On clicking next, display the next question
  $(this).find(".nextButton").on("click", function() {
    if (!quizOver) {

      value =
      $("input[type='radio']: checked").val();

      if (value == undefined) {
        $(document).find(".quizMessage").text("Please select an answer");
        $(document).find(".quizMessage").show();
        } else {
        $(document).find(".quizMessage"),hide();
        if(value == questions[currentQuestion], correctAnswer) {
          correctAnswer++;
        }
        currentQuestion++;
        if(currentQuestion<questions.length) {
          displayCurrentQuestion();
        }else {
          displayScore();
          //$(document.find("nextButton").toggle();
          //$(document).find(".playAgainButton").toggle();
          //Change the text in the next button to ask if user wants to play again.
          $(document).find(".nextButton").text("Play Again?");
          quizOver = true;
        }
      }
    }else {
       {//quiz is over and clicked the nextButton (which should display as 'Play Again?')
       quizOver = false;
       $(document).find(".nextButton").text("NextQuestion");
       resetQuiz();
       displayCurrentQuestion();
       hideScore();
     }
   });
 });
 //This displays the currentQuestion AND choices:
 function displayCurrentQuestion() {
   console.log("In display current question");

   var question = questions[currentQuestion].question;
   var questionClass = $(document).find(".quizContainer > .question");
   var choiceList= $(document).find(".quizContainer > .choiceList");
   var numChoices = question[currentQuestion].choices.length;
   //Here I will set the questionClass text to the currentQuestion
   $(questionClass).text(question);
   //Remove I will remove all <li> elements if any.

 }
}
