const fs = require("fs");
const request = require("request");

module.exports = {
  pwd: function(params, done) {
    done(process.cwd());
  },
  ls: function(params, done) {
    let output = "";
    fs.readdir(".", function(error, files) {
      if (error) throw error;
      files.forEach(function(file) {
        output += file.toString() + "\n";
      });
      done(output);
    });
  },
  date: function(params, done) {
    done(Date());
  },

  echo: function(params, done) {
    let output = "";
    params.forEach(function(arg) {
      if (process.env[command]) {
        output = process.env[command];
      } else {
        output += `${arg}`;
      }
    });
    done(output);
  },
  cat: function(params, done) {
    fs.readFile(`./${params}`, "utf8", (error, data) => {
      if (error) throw error;
      done(data);
    });
  },
  head: function(params, done) {
    fs.readFile(`./${params}`, "utf8", function(error, data) {
      if (error) throw error;

      let splittedLines = data.split("\n");
      let size = 5;
      let output = "";

      output = splittedLines.slice(0, size).join("\n");

      done(output);
    });
  },
  tail: function(params, done) {
    fs.readFile(`./${params}`, "utf8", function(error, data) {
      if (error) throw error;

      let splittedLines = data.split("\n");
      let size = 5;
      let output = "";

      splittedLines
        .slice(splittedLines.length - size, splittedLines.length)
        .map(line => {
          output += `${line}\n`;
        });

      done(output);
    });
  },

  curl: function(params, done) {
    request(params.toString(), function(error, output, body) {
      if (error) throw error;
      done(body);
    });
  }
};
