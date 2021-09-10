---
sidebar_position: 1
---

# Introduction

`Either` type values are the pillars of all the **Fat Arrow** ecosystem. They are used to capture any scenario where
there are two possible values resulting from a given function application.

## Type definition

```ts
type Either<E, A> = Right<E, A> | Left<E, A>
```

The `Either` possible scenarios are expressed by its two variants the `Right` type OR the `Left` type.

## Error handling

The most typical use case of `Either` values is error handling. As an example, imagine you have a form with an input
that needs to be validated. As a first step we are going to create a `ValidatedInput` type by aliasing an `Either` type
so that

* in case of validation success it will contain a `string` in the `Right` side
* in case of validation error it will contain a `Error` in the `Left` side:

```ts title="types.ts"
import { Either } from 'fat-arrow-ts'

export type ValidatedInput = Either<Error, string>
```

As second step, create our validation function so that

* if validation passes, it will return a `Right` instance wrapping the trimmed input
* if validation fails, it will return a `Left` instance wrapping an `Error` with a custom message

```ts title="validateChars.ts"
import { right, left } from 'fat-arrow-ts'
import { ValidatedInput } from './types'

const ONLY_CHARS = /^[A-Za-z]+$/;

export const validateChars = (input: string): ValidatedInput => {
  return input.match(ONLY_CHARS) ? right(input.trim()) : left(Error('Please enter alphabets only'))
}
```