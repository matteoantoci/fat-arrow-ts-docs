---
sidebar_position: 4
---

# Mapping Either

When we talk about _mapping_ we are referring to the process of taking an input and transforming it to an output (of the
same or another type).

Let's see an example:

```ts
type DataFromServer = {
  name: string
  surname: string
}

const getDataFromServer = (): Promise<DataFromServer> => {
  // ...
}

const expectedOutput: Promise<string> = getDataFromServer()
  .then((data) => `${data.name} ${data.surname}`)
```

In this example, we _mapped_ the `Promise<DataFromServer>` to `Promise<string>` using the `then` method; similarly, we
could also have mapped the rejected Promise result by using the `catch` method.

Having in mind this concept, we can understand how to apply it to `Either` instances.

## Mapping Right variant

Like `then` in Promises, we can use the `flatMap` method to map the `Right` scenarios.

Going on with our previous validation example, suppose we need to convert our input to uppercase before sending it to
the server while preserving the original input value for our logger. Here is how we will proceed:

* create a new variable called `inputToBeSent` that will be the `Either` resulting from our `flatMap` method
* `flatMap` method will receive a mapping function (as a callback) in input, and it will return a new `Either` instance
  containing our mapped value
* the mapping function will be called **if and only if `validatedInput` Either has `Right` variant**, it will receive
  the actual value contained in our Either as input, and it will return our mapped value as output

```ts
import { validateChars } from './validateChars'
import { log } from './log'

// ...

const handleClick = (input: string): void => {
  const validatedInput = validateChars(input)

  log(validatedInput)

  const inputToBeSent = validatedInput
    .flatMap((inputValue: string) => inputValue.toUpperCase())

  inputToBeSent
    .fold(
      (error: Error): void => {
        window.alert(error.message)
      },
      (input: string): void => {
        postToServer(input)
      }
    )
}
```
