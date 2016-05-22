
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

// 9gag.coffee
// http://hubot-script-catalog.herokuapp.com/

// var sample = function(){
// 	return temp  + 5;
// };

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



// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// var compare = function (choice1, choice2)
// {
//    if (choice1 === choice2)
//    {return "The result is a tie!";}
//    else if (choice1 === "rock"){
//        if (choice2 ==="scissors") 
//        {return "rock wins"} 
//        else 
//        {return "paper wins"}
//        }
//    else if (choice1 === "paper"){
//        if (choice2 ==="rock") 
//        {return "paper wins"} 
//        else 
//        {return "scissors wins"}
//        }
//     else if (choice1 === "scissors"){
//        if (choice2 === "rock") 
//        {return "rock wins"} 
//        else (choice2 === "paper")
//        {return "scissors wins"}
//        }
//     }

// compare(userChoice, computerChoice)


// var jacobPickss = function(){
// 	var computerChoice = Math.random();
// 	if (computerChoice <= 0.34) {
//     	return "rock";
// 	} else if(computerChoice > 0.34 && computerChoice <= 0.67) {
//     	return "paper";
// 	} else {
//     return "scissors";
// 	}
// };

// var jacobPicks = jacobPickss();

// var RPS = function(user, jacobPicks){

// var compare = function (user, jacobPicks) {
//  if(user===jacobPicks)return "The result is a tie!";
//  switch(user+jacobPicks){
//     case "rockscissors": case "scissorsrock":
//         return "rock wins";
//     case "rockpaper": case "paperrock":
//         return "paper wins";
//     default: return "scissors wins";
//  }
// };
// };


// robot.respond(/Play RPS: I chose (.*)/i, function(res) {
//    var user;
//    user = res.match[1];
//    return res.reply(RPS(user, jacobPicks));
   

// });








// robot.hear(/what did you pick/, function(res){
// 	res.send(jacobPicks());
// });


// robot.respond(/hello (.*)/i, function(res){
// 	var temp;
// 	temp = res.match[1];
// 	return res.reply(temp);

// });


// robot.hear(/enter number/, function(res){
// 	res.send(jacobPicks());
// });


};


