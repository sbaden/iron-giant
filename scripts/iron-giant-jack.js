
module.exports = function(robot) {

// Magic8 Ball 

// going to have Magic8
// RPS
// War

// check out below. 
// 9gag.coffee
// http://hubot-script-catalog.herokuapp.com/

// start of magic8 

var magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", 
"Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
"Very doubtful"];

robot.hear(/Magic8/, function(res){
	return res.send(res.random(magic8));
    });


// start of rock, paper, scissors

robot.hear(/RPS: (.*)/i, function(res){
	var temp;
	temp = res.match[1];
	
	var jacobPickss = function(){
	var computerChoice = Math.random();
	if (computerChoice <= 0.34) {
    	return "rock";
	} else if(computerChoice > 0.34 && computerChoice <= 0.67) {
    	return "paper";
	} else {
    return "scissors";
	}
};

	var jacob1 = jacobPickss();


		var compare = function (temp, jacob1) {

		 if(temp === jacob1)
		    return "The result is a tie!";
		 switch(temp+jacob1){
		    case "rockscissors": 
		    case "scissorsrock":
		        return "rock wins";
		    case "rockpaper": 
		    case "paperrock":
		        return "paper wins";
		    default: return "scissors wins";
		 }
		};


	res.reply("YOU: " + temp + " ||| " + "Jacob: " + jacob1 + " ||||| " + compare(temp, jacob1));



});


// start of WAR, played one time. 
// robot.hear(/WAR (.*)/i, function(res){
robot.hear(/WAR single game/, function(res){
	var temp
	temp = res.match[1];
	res.reply("Casino WAR it is!!!");


		function getCard(){
		  var myNum = (Math.floor((Math.random() * 13 )+ 1));
		  return myNum;
		}

		var card1 = getCard();
		var card2 = getCard();

		function WinorLose(){
			if (card1 === card2){
				return "WAR!!!!";
			} else if (card1 > card2) {
				return "You Win";
			} else {
				return "Jacob Wins";
			}
		}

	res.reply("|| " + card1 + " || " + card2 + " || " + "Outcome: " + WinorLose())

});

// Start of WAR played as many times as the user says. 
// Trackes wins and losses, if we get a lose double up bet
// We go to the table with 1000 bucks are are betting 10 each time. 
// 10 | 20 | 40 | 80 | 160 | 320 | 370 (because we only have 1000)
// doubles up at a loss but only bets 10 after a win.
//

// Steps 
// 1) run the game
// 2) record who wins (push into an array)

robot.hear(/WAR (.*)/i, function(res){
	var temp
	temp = res.match[1];
	res.reply("Casino WAR it is!!! We will play " + temp + " total games");

		var card1 = getCard();
		var card2 = getCard();
		var jacobwins = 0;
		var userwins = 0;
		var war = 0;

		function continiousPlay(){
		  for(i=0; i <= temp; i++){
		  Game();
		 }}

		function getCard(){
		  var myNum = (Math.floor((Math.random() * 13 )+ 1));
		  return myNum;
		}	
  
		function Game(){
		  var card1 = getCard();
		  var card2 = getCard(); 
		  
		  function WinorLose(){
		    if (card1 === card2){
			war++;
			return "WAR!!!!";
			} else if (card1 > card2) {
			  userwins++;
		      return "You Win";
			} else {
		      jacobwins++;
			return "Jacob Wins";
			}}
  
  			res.reply("|| " + card1 + " || " + card2 + " || " + "Outcome: " + WinorLose());
		}


		continiousPlay();
		res.reply(userwins + " ||| " + jacobwins + " ||| " + "WAR " + war);


});

// start of program which logs all conversations


var array = [];

robot.respond(/log:(.*)/i, function(res){
var temp
temp = res.match[1];
array.push(temp);
return res.reply("logged: " + temp);
 });

robot.hear(/what did you log/, function(res){
  return res.reply("I logged all this stuff " + array);
});

// robot.respond(/hello (.*)/i, function(res){
// 	var temp;
// 	temp = res.match[1];
// 	return res.reply(temp);

// });


// robot.hear(/enter number/, function(res){
// 	res.send(jacobPicks());
// });


};


