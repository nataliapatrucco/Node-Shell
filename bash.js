var commands = require("./commands");

process.stdout.write("prompt > ");
var done = function(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
process.stdin.on("data", function(data) {
  var parametros = data.toString().trim();
  parametros = parametros.split(" ");

  var cmd = parametros[0];
  if (parametros.length > 1) parametros.shift();
  commands[cmd](parametros, done);
});
