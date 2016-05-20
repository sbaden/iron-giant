
// var enterReplies = ['Hogarth, is that you?'];
// var leaveReplies = ['Hogarth,you stay, I go. No following', "Souls don't die"];

module.exports = function(robot) {

    robot.respond(/What's your favorite food?/, function(res) {
       return res.send("I'm a robot--I don't eat food!");
     });
};