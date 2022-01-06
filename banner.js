const childProcess = require("child_process");

module.exports = function banner() {
  const user = childProcess.execSync("git config user.name");
  const date = new Date().toLocaleDateString();

  return `Build Date: ${date}\n` + `Anthor: ${user}`;
};
