// just trying to get the connection set. 

module.exports = function(robot) {
    robot.hear(/Hello!/, function(res){
        return res.send("Hi there!");
    });


var enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];

var leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];

robot.enter(function(res) {
  return res.send(res.random(enterReplies));
});

robot.leave(function(res) {
  return res.send(res.random(leaveReplies));
});


robot.respond(/(image|img)( me)? (.+)/i, function(msg) {
  return imageMe(msg, msg.match[3], function(url) {
    return msg.send(url);
  });
});


};



//// stuff 