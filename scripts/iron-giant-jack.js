// just trying to get the connection set. 

module.exports = function(robot) {

​    robot.respond(/What's your favorite drink?/, function(res) {
       return res.send("I'm a robot--I don't drink!");
     });

}