
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

var computerChoice = Math.random();
var computerChoice2 = "text"

var jacobpicks = function(){

	if (computerChoice <= 0.34) {
    	computerChoice2 = "Rock";
	} else if(computerChoice > .34 && computerChoice <= 0.67) {
    	computerChoice2 = "Paper";
	} else {
    computerChoice2 = "Scissors";
	}
};


robot.hear(/what did you pick/, function(res){
	jacobpicks();
	res.send(computerChoice2);
});


robot.respond(/hello (.*)/i, function(res){
	var temp;
	temp = res.match[1];
	return res.reply(temp);

});




robot.respond(/Play RPS: I chose: (.*)/i, function(res) {
   var choice1;
   choice1 = res.match[1];
   if (choice1 === "Rock") {
     return res.reply("You chose Rock.");
   } else {
     return res.reply("You chose " + choice1 + ".");
   }
});



// switch (choice1) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }


// robot.respond(/(image|img)( me)? (.+)/i, function(msg) {
//   return imageMe(msg, msg.match[3], function(url) {
//     return msg.send(url);
//   });
// });


//rock paper scissors

// psuedo code 
// User must activate game with @Jacob: Let's play! == Jacob, Ok buddy you got $100 bucks to bet let's go! Send your pick in this format "Rock; 25"
// should I do it as a best of 10? With rewards? 
// should I keep score using an array? Should we have a betting component? 
// Once the @Jacob (rock, paper, scissors) starts Jacob must make his selection. 
// After Jacob makes his pick send the results. 


// code a simple switch statement and see if it works, with responces to certain words.


// also love the fortune telling idea. 
// basically this is just @Jacob Tell my fortune. 
// return random terrot card. 

// @Jacob 8ball: Will I make a billion dollars. 







// var compare = function(choice1, choice2)) {

//   switch(choice1, choice2) {
//     case (choice1 === choice2):
//       robot.enter(function(res) {
//   		return res.send("Tie!")});
//       break;

//     case ("rock", "scissors"):
//       robot.enter(function(res) {
//   		return res.send("Tie!")});

//       break;
//     case "Apple":
//       text = "How you like them apples?";
//       break;
//     default:
//       text = "fun"
//   }
//   document.getElementById("demo").innerHTML = text;
// }



// if(choice1 === "rock" && choice2 === "scissors") {
//         return "rock wins";
//     } else {
//         return "paper wins";
//     }
// }
// if(choice1 === "paper") {
//     if(choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if(choice2 === "scissors") {
//             return "scissors wins";
//     }
// }
// if(choice1 === "scissors") {
//     if(choice2 === "rock") {
//         return "rock wins";
//     } else {
//         if(choice2 === "paper") {
//             return "scissors wins";
//         }
//     }
// }

// if (choice1 === "paper") {
//     if (choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if (choice2 === "scissors") {
//             return "scissors wins";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return "rock wins";
//         } else {
//             if (choice2 === "paper") {
//                 return "scissors wins";
//             }
//         }
//     }
// }






};


