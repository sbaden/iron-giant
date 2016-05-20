
// var enterReplies = ['Hogarth, is that you?'];
// var leaveReplies = ['Hogarth,you stay, I go. No following', "Souls don't die"];

module.exports = function(robot) {

    robot.respond(/help/, function(msg){​
        msg.reply("I fix");
    });

    // robot.respond(/hello Jacob)\s?\?/i, function(msg){​
    //     msg.reply("I'm not Jacob. I am the iron giant");
    // });

    // robot.hear(/bang/i, function(msg){
    //     msg.send("I am not a gun");
    // });
}