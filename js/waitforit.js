function waitFor(thing, callback) {
  var intervalId = setInterval(function() {
    if (window[thing] != undefined) {
      clearInterval(intervalId);
      callback();
    }
  }, 10);
}