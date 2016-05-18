
var enterReplies = ['Hogarth, is that you?'];
var leaveReplies = ['Hogarth,you stay, I go. No following', "Souls don't die"];

module.exports = function(robot) {
    robot.enter(function(res) {
        return res.send(res.random(enterReplies));
    });

    robot.leave(function(res) {
        return res.send(res.random(leaveReplies));
    });

    robot.respond(/help)\s?\?/i, function(msg){​
        msg.reply("I fix");
    });

    robot.hear(/bang/i, function(msg){
        msg.send("I am not a gun");
    });
}