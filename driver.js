const searchingLib = require("./searching.js");

//console.log(searchingLib);

const fs = require("fs/promises");

async function readSampleFile() {
  const data = await fs.readFile("./sample.txt", "utf-8");
  console.log(data);
}

async function writeFile() {
  await fs.writeFile("./sample.txt", "Hello World!");
}

async function appendFile() {
  await fs.appendFile("./sample.txt", " Hello Shruti");
}

readSampleFile();
writeFile();
//appendFile();
