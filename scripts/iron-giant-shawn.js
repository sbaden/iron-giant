module.exports = function(robot) {
    robot.respond(/What's your favorite food?/, function(res) {
       return res.send("I'm a robot--I don't eat food!");
     });
    robot.hear(/Hi!/, function(res){
        return res.send("No but I wish I was!");
    });
};