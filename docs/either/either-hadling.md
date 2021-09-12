---
sidebar_position: 3
---

# Handling Either

Up to know we were only able to know if our validation results were successfully or not. We are going to discover how to
use values wrapped in our Either instances, unwrap them or trigger side effects.

## Triggering side effects

As the next step, let's continue with our previous example and create a _click handler_ that will be called with the
input field value so that

* if validation passes, it posts the validated and formatted input to the server
* if validation fails, it triggers a browser `alert` containing the validation error's message

To do this, we will use the `Either`'s `fold` method as it lets us operate the actual value contained in our `Either`.
`fold` requires us to handle both the scenarios of our validation result by passing two callbacks, the first one for
the `Left` scenario, the second one for the `Right` one:

```ts
import { validateChars } from './validateChars'

const postToServer = async (input: string): void => {
  // Run server request...
}

const handleClick = (input: string) => {
  const validatedInput = validate(input)

  validatedInput.fold(
    (error: Error): void => {
      window.alert(error.message) // Runs only in case of error
    },
    (input: string): void => {
      postToServer(input) // Runs only in case of success
    }
  )
}
```

## Unwrapping values

Now new feature requests appear and our click handler needs to be changed in order to send an event to a logger so that:

* if validation passes, logs an anonymized version of our input
* if validation fails, log's a default string `Invalid user input`

As a first step let's create our logger function; the `fold` method can be used to both run side effects and to return
values.

```ts title="log.ts"
import { right, left } from 'fat-arrow-ts'
import { ValidatedInput } from './types'

const anonymizeInput = (input: string): string => {
  // Returns anonymized input
}

const logUserEvent = async (input: string): void => {
  // Log user event...
}

export const log = (input: ValidatedInput): void => {
  const eventPayload = validatedInput.fold(
    (): string => 'Invalid user input',
    (input): string => anonymizeInput(input)
  )

  logUserEvent(eventPayload)
}
```

Now update our main function with the latest requirements:

```ts
import { validateChars } from './validateChars'
import { log } from './log'

// ...

const handleClick = (input: string) => {
  const validatedInput = validate(input)

  log(validatedInput) // Runs in both scenarios

  validatedInput.fold(
    (error: Error): void => {
      window.alert(error.message)
    },
    (input: string): void => {
      postToServer(input)
    }
  )
}
```

## `fold` overloads

So far, we've seen a couple of ways to use the `fold` method, but it actually comes with two other overloads.

### No arguments

You can unwrap your values without pre-processing them by calling `fold` without arguments:

```ts
import { right } from 'fat-arrow-ts'

const either = right<Error, string>('It works!')

console.log(either.fold()) // Prints 'It works!'
```

### Only left argument

You can also unwrap your values by passing just the first argument (the _left_ handler) to the `fold` method:

```ts
import { right } from 'fat-arrow-ts'

const either = left<Error, string>(Error("An error occured!"))

const message: string = either.fold(error => error.message) 

console.log(message) // Prints 'An error occured!'
```