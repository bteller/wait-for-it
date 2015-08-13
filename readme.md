# WaitForIt

## What is it?

I'm currently just playing around with this idea that async loading of javascript files shoudln't be terrifying, or have side effects. In reality, we should be able to add a simple wrapper around existing code to make things async ready.

```js
waitFor('$', function() {
  console.log('Now I can do things!');
});
```

As a simple wrapper we can easily forget about what order scripts are processed by the browser and made available for use.