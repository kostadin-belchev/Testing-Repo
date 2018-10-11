function getFlags(re) {
  var text = re.toString();
  text.substring()
  return text.substring(text.lastIndexOf("/") + 1);
}

// toString() is "/ab/g"
var re = /ab/giu;

console.log(getFlags(re));  