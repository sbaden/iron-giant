// just trying to get the connection set. 

module.exports = function(robot) {
    robot.hear(/Hello!/, function(res){
        return res.send("Hi there!");
    });
};