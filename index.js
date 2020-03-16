const bplist = require("bplist");

console.log(process.argv);

const filepath = process.argv[2];
console.log(`read: ${filepath}`);

bplist.parseFile(filepath, function(err, object) {
  if (err) {
    console.error(err);
  } else {
    console.log(object);
  }
});
