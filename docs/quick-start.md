---
sidebar_position: 1
---

# Quick start

Get started with **Fat Arrow in less than 5 minutes**.

## Installation

Using npm

```bash  
npm install fat-arrow-ts   
```

Using Yarn

```bash  
yarn add fat-arrow-ts   
```

## A simple example

Let's say we want to write a simple piece of software that can handle **safely** divisions by zero and log the results
to console.

Create a function that handles **safely** divisions by zero by returning a `Right` value in case of success or a `Left`
value in case of error:

```ts title="src/getDivision.ts"
import { left, right, Either } from 'fat-arrow-ts';

export const getDivision = (numerator: number, denominator: number): Either<Error, number> => {
  if (denominator === 0) {
    return left(new Error('Division by zero!'))
  }

  return right(numerator / denominator)
}
```

Create a function that logs **safely** to console using appropriate labels and `console` methods:

```ts title="src/print.ts"
import { Either } from 'fat-arrow-ts';

export const print = (value: Either<Error, number>) =>
  value.fold(
    (error) => console.error(`Doh! ${error.message}`),
    (result) => console.log(`Result is ${result}. Hooray!`)
  )
```

Use our functions!

```ts title="src/index.ts"
import { getDivision } from "./getDivision.ts"
import { print } from "./print.ts"

const divisionByFiveResult = getDivision(10, 5)
print(divisionByFiveResult) // Result is 2. Hooray!  

const divisionByZeroResult = getDivision(10, 0)
print(divisionByZeroResult) // Doh! Division by zero!
```
