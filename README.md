## Enhanced Version of The Fetch API

This is a small code snippet I've created to wrap the built in _Fetch API_ with function to enhance the following:

1. With a fulfilled promise you have to write two `then()` methods to take a snapshot from the data stream using `json()` function, with this enhanced version you shouldn't do that, with a single `then()` method you can consume the data.

2. If the server sends a response to inform you that your request was unsuccessful by setting the status code in range 400-500, The Fetch API handles this response as a fulfilled promise and you can't catch it using `catch()` method, with this enhanced version this scenario will throw an error gives you the ability to catch it using `catch()` method.

`httpRequest()` is the wrapper method takes the same argument as The Fetch API `httpRequest(resource,configuration = {}))`
