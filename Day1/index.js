const child_process = require("child_process");

const fib_30_proc = child_process.spawn("node", ["./fib30.js"], {stdio: "inherit"});
const fib_neg10_proc = child_process.spawn("node", ["./fib-10.js"], {stdio: "inherit"});

