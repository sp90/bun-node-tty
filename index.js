const tty_1 = require("tty");

if (process.stdout instanceof tty_1.WriteStream) {
  console.log("stdout is a TTY");
}
