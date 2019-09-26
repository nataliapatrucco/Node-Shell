var commands = require("./commands");

process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
var done = function(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
process.stdin.on("data", function(data) {
  var parametros = data.toString().trim();
  parametros = parametros.split(" ");

  var cmd = parametros[0];
  if (parametros.length > 1) parametros.shift();
  //var userCommand = cmd;
  commands[cmd](parametros, done);
});
