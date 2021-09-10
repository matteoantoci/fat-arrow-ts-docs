---
sidebar_position: 2
---

# Introduction

This library takes inspiration from many other functional programming libraries and languages out there, a few examples
may include:

* fp-ts, True Myth (TypeScript)
* Arrow (Kotlin)
* Haskell
* Rust

What all of these have in common? They deal brilliantly and **safely** with values that represent the _possibility of
two values_.

## Values with two possibilities

The most straightforward example of this kind of values is the ES `Promise`:

```ts
type MyValue = Promise<number>

const getValue = async (): MyValue => {
  // Some async logic...
}

const value = await getValue()
```

In this example, our `value` maybe containing a `number` or an `Error`. To have access to the actual result of our async
operation, we must use the `Promise` accessor methods `.then(successCallbackFn)` to handle the success scenario
and `.catch(failureCallbackFn)` to handle the failure scenario.

In other words, the ES language is nudging us to describe how to handle both the possible results by using different
logics (`successCallbackFn` and `failureCallbackFn`). The compiler then will take care to run the appropriate callback
based on the outcome of our async operation (e.g., we can be sure the `failureCallbackFn` won't be called in case of
success).

Moreover, since we are using TypeScript, our code will be _type safe_ while handling our different cases:

```ts
const value = await getValue()
  .then((value: number) => value + 2)
  .catch((err: Error) => {
    console.error(err)
  })
```



