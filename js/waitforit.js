function waitFor(thing, callback) {
  var intervalId = setInterval(function() {
    var exists  = false;

    if (eval(thing) !== undefined) {
        clearInterval(intervalId);
        callback();
    }
  }, 10);
}
