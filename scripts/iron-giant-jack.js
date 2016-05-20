// just trying to get the connection set. 

module.exports = function(robot) {

    robot.respond(/What's your favorite drink?/, function(res) {
       return res.send("I'm a robot--I do not drink!");
     });

    // robot.respond(/help/, function(msg){​
    //      return msg.reply("I fix");
    // });

    // robot.respond(/hello Jacob)\s?\?/i, function(msg){​
    //     msg.reply("I'm not Jacob. I am the iron giant");
    // });

    // robot.hear(/bang/i, function(msg){
    //     msg.send("I am not a gun");
    // });
}