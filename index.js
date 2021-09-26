var readlineSync = require('readline-sync');
var score=0;

function welcome(){
  var userName= readlineSync.question("What is your name? ");
  console.log("Welcome "+userName +"!");
  console.log("Are you a Michael Jackson fan? Let's see.");
  console.log("------------------------");
  console.log("------------------------");
}

var questions = [{
  question:"Which singer was known amongst other things as ‘The King of Pop’ and ‘The Gloved One’? ",
  answer:"Michael Jackson"
},{
  question:"How old was Michael when he sadly passed away in 2009? ",
  answer:"50"
},{
  question:"Which 1982 album became the bestselling album of all time? ",
  answer:"Thriller"
},{
  question:"What song was on the ‘B’ side to the single ‘Heal the World’? ",
  answer:"She Drives Me Wild"
},{
  question:"True or false: Michael won the 1984 Grammy award for the Record of the Year for the song ‘Beat It’? ",
  answer:"True"
},{
  question:"What was the name of Michael’s autobiography, released in 1988? ",
  answer:"Moonwalk"
},{
  question:"What was Michael’s middle name – John, James or Joseph? ",
  answer:"Joseph"
}];

var highscores =[{
  name: "Shraddha",
  score: 11,
}];

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You are Right");
    score=score+2;
  }
  else{
    console.log("You are Wrong");
    score--;
  }
  console.log("Current Score is: "+ score);
  console.log("------------------------");
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores(){
  if(score >=5){
    console.log("YAY! You SCORED: ", score);
  }
  else{
    console.log("OOPS! You SCORED: ", score);
  }
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highscores.map(score => console.log(score.name, " : ", score.score))
  
}

welcome();
game();
showScores();
