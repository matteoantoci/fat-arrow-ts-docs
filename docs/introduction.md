---
sidebar_position: 2
---

# Introduction

## Inspiration

This library takes inspiration from many other functional programming libraries and languages out there, a few examples
may include:

* fp-ts, True Myth (TypeScript)
* Folktale, Sanctuary (Javascript)
* Arrow (Kotlin)
* Haskell
* Rust

Talking strictly about TypeScript first libraries, "fp-ts" is the most feature-rich, but it has a very steep learning
curve due to its academic jargon and extensive API. On the other hand, **Fat Arrow** (like "True Myth") is lean, and it
tries to keep a low entry barrier by abstracting the most complex math concepts.

What do all of the mentioned libraries have in common? They deal **safely** with values that represent the **possibility
of two values**.

## Values with two possibilities

The most straightforward example of this kind of values is the ES `Promise`:

```ts
type MyValue = Promise<number>

const getValue = async (): MyValue => {
  // Some async logic...
}

const value = getValue()
```

In this example, our `value` maybe containing a `number` or an `Error`. JS deals elegantly with this binary scenario: to
have access to the actual result of our async operation, we must use the `Promise` methods `.then(successCallbackFn)` to
handle the successful scenario and `.catch(failureCallbackFn)` to address the failing one.

Moreover, we can **chain** the Promise's methods to express complex flows, and the compiler will take care of running
lazily the correct callbacks without the need for us to check explicitly if the Promise was successful or not:

```ts
const value = getValue()
  .then(/* This will be called ONLY IN CASE OF SUCCESS */)
  .then(/* This will be called ONLY IN CASE OF SUCCESS */)
  .catch(/* This will be called ONLY IN CASE OF FAILURE */)
  .then(/* This will be called ONLY IN CASE OF SUCCESS */)
  .catch(/* This will be called ONLY IN CASE OF FAILURE */)
```

## Success, failure, and nullable values

Async results (aka Promises) are just the tip of the iceberg of _binary possibility values_ in the
TypesScript/Javascript world.

If you think about a form field validation result, it may express the success path with a `string` and the failure path
with an `Error`; _nullable_ values are another excellent example as they describe two possibilities: the presence or the
absence of something. Wouldn't it be nice if we could express and manipulate those values in a similar way as Promises
do?

**Fat Arrow** provides you with the essential tools to create _binary possibility values_ and _chain_ actions on them by
leveraging on the type-safety that TypeScript offers.

Keep reading!
