module.exports = function matchAll(str, rawRegex) {
  var regex = rawRegex.global ? rawRegex : new RegExp(rawRegex, rawRegex.flags + "g");
  var res = [];
  var m;
  while ((m = regex.exec(str))) res.push(m);
  return res;
};
