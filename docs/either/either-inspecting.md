---
sidebar_position: 2
---

# Inspecting Either

Let's now use our `validateChars` function, create a successful validation Either (`Right`) and a failing one (`Left`)
and inspect them:

## Inspect Either variant

```ts
import { left, right } from 'fat-arrow-ts'
import { validateChars } from './validateChars'

const success = validateChars('abc')

if (success.isRight) {
  console.log('Validation is successful!')
}

const failure = validateChars('123')

if (failure.isLeft) {
  console.log('Validation has failed!')
}
```

By using the `isRight` and `isLeft` properties we can easily know which variant of `Either` our instance is.

## Either comparison

We can also compare Either instances by using the method `equals`:

```ts
import { right, left } from 'fat-arrow-ts'
import { validateChars } from './validateChars'

const success = validateChars('abc')
success.equals(right('abc')) // true

const failure = validateChars('123')
success.equals(left(Error('Please enter alphabets only'))) // true
```

:::tip Structural equality

`equals` method checks for **structural equality**:

```ts
import { right } from 'fat-arrow-ts'

right({ foo: 'bar' }).equals(right({ foo: 'bar' })) // true
```
:::