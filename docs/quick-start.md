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

Here is the plan:

1. Create a `safeDivision` function that can handle divisions by zero by returning a `Right` value in case of success or
   a `Left` value in case of error.

2. Create a `safePrint` function that can log the `safeDivision` output to console using appropriate labels
   and `console`
   methods.

3. Use our functions!

```ts
import { left, right, Either } from 'fat-arrow-ts';

const safeDivision = (numerator: number, denominator: number): Either<Error, number> => {
   if (denominator === 0) {
      return left(new Error('Division by zero!'))
   }

   return right(numerator / denominator)
}

const safePrint = (value: Either<Error, number>) =>
        value.fold(
                (error) => console.error(`Doh! ${error.message}`),
                (result) => console.log(`Result is ${result}. Hooray!`)
        )

const divisionByFiveResult = safeDivision(10, 5)
safePrint(divisionByFiveResult) // Result is 2. Hooray!  

const divisionByZeroResult = safeDivision(10, 0)
safePrint(divisionByZeroResult) // Doh! Division by zero!
```
