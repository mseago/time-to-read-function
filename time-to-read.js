

function timeToRead(string) {
  var wordCount = 0;
  for (var idx = 0; idx < string.length; idx++) {
    wordCount++;
  }
  var wpm = 230;
  time = wordCount/wpm;
  return time;
}
timeToRead();
