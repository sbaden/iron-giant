module.exports = function(robot) {
  robot.respond(/show users$/i, function(res) {
    var users;
    var key;
    var response = "";
    var ref = robot.brain.data.users;
    var results = [];
    var hasProp = {}.hasOwnProperty;

    for (key in ref) {
      if (!hasProp.call(ref, key)){ 
        continue;
        user = ref[key];
        response += user.id + " " + user.name;

        if (user.email_address) { response += " <" + user.email_address + ">"; }

        results.push(response += "\n");
        //return res.send(response += "\n");
      };
    };

    return res.reply(results[0]);
  });

  robot.hear(/Bye!/, function(res){
      return res.send("Goodbye!");
  });
};