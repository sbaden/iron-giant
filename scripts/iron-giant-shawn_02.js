var hasProp = {}.hasOwnProperty;

module.exports = function(robot) {
  return robot.respond(/show users$/i, function(msg) {
    var key, ref, response, results, user;
    response = "";
    ref = robot.brain.data.users;
    results = [];
    for (key in ref) {
      if (!hasProp.call(ref, key)) continue;
      user = ref[key];
      response += user.id + " " + user.name;
      if (user.email_address) {
        response += " <" + user.email_address + ">";
      }
      results.push(response += "\n");
    }
    return results;
  });
};