
module.exports = function(robot) {

// Magic8 Ball 

// going to have Magic8
// RPS
// War

var magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", 
"Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
"Very doubtful"];

robot.hear(/Magic8/, function(res){
	return res.send(res.random(magic8));
    });


// Rock Paper Scissors
// get Jacob's choice 
// get user's input 
// compair = win or lose


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

var jacobPicks = jacobPickss();

var RPS = function(user, jacobPicks){

var compare = function (user, jacobPicks) {
 if(user===jacobPicks)return "The result is a tie!";
 switch(user+jacobPicks){
    case "rockscissors": case "scissorsrock":
        return "rock wins";
    case "rockpaper": case "paperrock":
        return "paper wins";
    default: return "scissors wins";
 }
};
};


robot.respond(/Play RPS: I chose (.*)/i, function(res) {
   var user;
   user = res.match[1];
   return res.reply(RPS(user));
   

});








// robot.hear(/what did you pick/, function(res){
// 	res.send(jacobPicks());
// });


// robot.respond(/hello (.*)/i, function(res){
// 	var temp;
// 	temp = res.match[1];
// 	return res.reply(temp);

// });





};


