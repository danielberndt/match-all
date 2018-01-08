const matchAll = require("../index");

console.log(matchAll("test:0 Foo:2", /\b[a-z]+:(\d+)/i).map(m => m[1]));
