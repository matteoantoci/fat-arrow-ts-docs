---
sidebar_position: 3
---

# Handling Either

Up to know we were only able to know if our validation results were successfully or not. We are going to discover how to
use values wrapped in our Either instances, unwrap them or trigger side effects.

## Trigger side effects

As next step, let's continue with our previous example and create a click handler that will be called with the input
field value so that

* if validation passes, post the validated and formatted input to server
* if validation fails, it will trigger a browser `alert` containing the validation error's message

To do this we are going to use the `Either`'s `fold` method as it let us use the actual value contained in our `Either`.
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
      // This will be run only in case of error
      window.alert(error.message)
    },
    (input: string): void => {
      // This will be run only in case of success
      postToServer(input)
    }
  )
}
```

## Unwrap values

Now new feature requests appear and our click handler needs to be changed in order to send an event to a logger so that:

* if validation passes, logs an anonymized version of our input
* if validation fails, log's a default string `Invalid user input`

As a first step let's create our logger function. The `fold` method can be used to both run side effects and to return
value. The only constraint `fold` poses is that both returned values, from `Left` and `Right` callbacks, must be of the
same type:

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

Let's now update our main function with the latest requirements:

```ts
import { validateChars } from './validateChars'
import { log } from './log'

// ...

const handleClick = (input: string) => {
  const validatedInput = validate(input)

  log(validatedInput) // Run in both scenarios

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