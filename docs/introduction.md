---
sidebar_position: 2
---

# Introduction

**Fat Arrow** is a library for Typed Functional Programming in TypeScript compatible with Node.js and all major
browsers.

## Values with two possibilities

**Fat Arrow**'s main goal is to deal **safely** with values that represent the **possibility of two values**. The most
straightforward example of this kind of values is the ES `Promise`:

```ts
type MyValue = Promise<number>

const getValue = async (): MyValue => {
  // Some async logic...
}

const value = getValue()
```

In this example, our `value` maybe containing a `number` or an `Error`. ES deals elegantly with this binary scenario: to
have access to the actual result of our async operation, we must use the `Promise` methods `.then(successCallbackFn)`
and `.catch(failureCallbackFn)` to address the success or the failure scenarios, respectively.

Moreover, ES gives use the possibility to **chain** the Promise's outputs to describe complex flows, and the compiler
will take care of running lazily the correct callbacks without the need for us to check explicitly if the Promise was
successful or not:

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

## Inspiration

This library takes inspiration from many other functional programming libraries and languages out there, a few examples
may include:

* fp-ts, True Myth (TypeScript)
* Folktale, Sanctuary (Javascript)
* Arrow (Kotlin)
* Haskell
* Rust

Talking about TypeScript-first libraries, "fp-ts" is the most feature-rich, but it has a very steep learning curve due
to its academic jargon and its full-blown functional programming syntax.

On the other hand, **Fat Arrow** (like "True Myth") is lean, and it tries to keep a shallow entry barrier by abstracting
the most theoretical concepts and keeping the API surface at the minimum. **Fat Arrow** uses a mixture of FP and
OOP paradigms and strongly opinionated design decisions to achieve the right balance between ease of
use and flexibility.
