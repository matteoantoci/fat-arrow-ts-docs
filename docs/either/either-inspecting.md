---
sidebar_position: 2
---

# Inspecting Either instances

Let's now use our `validateChars` function and inspect our Either instances:

```ts
import { validateChars } from './validateChars'

const success = validateChars('abc')
console.log(success.isRight) // true
console.log(success.isLeft) // false

const failure = validateChars('123')
console.log(failure.isLeft) // true
console.log(failure.isRight) // false
```

By reading the `isRight` and `isLeft` properties we can easily know which variant of `Either` our instance is.
