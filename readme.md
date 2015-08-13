# WaitForIt

Are you confused about how to manage dependencies in an async world? So am I. What I know is that I have *a ton* of JavaScript that powers my sites, I like performance, and I also like my site to work. Enter `waitFor`.

```js
function waitFor(thing, callback) {
  var intervalId = setInterval(function() {
    if (window[thing] != undefined) {
      clearInterval(intervalId);
      callback();
    }
  }, 10);
}
```

How simple is that?

I'm currently just playing around with this idea that async loading of javascript files shoudln't be terrifying, or have side effects. In reality, we should be able to add a simple wrapper around existing code to make things async ready.

```js
waitFor('$', function() {
  console.log('Now I can do things!');
});
```

As a simple wrapper we can easily forget about what order scripts are processed by the browser and made available for use.

## How do I use it?

If you want to use it, I recommend you include the `waitFor` code directly inline with your page and then `async` reference every last bit of remaining JavaScript you need to power your site. 