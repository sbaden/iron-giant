module.exports = function(robot) {
    robot.respond(/What's your favorite food?/, function(res) {
       return res.send("I'm a robot--I don't eat food!");
     });

    robot.hear(/Hi!/, function(res){
        return res.send("No but I wish I was!");
    });

    var enterReplies = ['Hogarth, is that you?', 'Welcome to the party!'];
    var leaveReplies = ['Are you still there Hogarth?', "Souls don't die"];

    robot.enter(function(res) {
        return res.send(res.random(enterReplies));
      });
      return robot.leave(function(res) {
        return res.send(res.random(leaveReplies));
    });

    robot.hear(/Bye!/, function(res){
        return res.send("Goodbye!");
    });
};