# TypeScript Case on Validating Swedish Personal Numbers and Names

This is a small case for a backend role, that can also be used as a template for TypeScript projects.

## Case instructions

These instructions are paraphrased from a .pdf provided by a potential employer.

### Intro
Security is important, and validation is part of that process. How validation is done depends on the purpose, buth can be either syntactic (length, illegal characters, etc) or semantic (specific rules).

### Task
Implement a validation framework that validates data by using a set of programmatically configured rules.
Keep reusability in mind, so that more rules can be added over time.
Start with validating a Swedish personal number and a Swedish name.

The main objectives are to demonstrate:
- Understanding of abstractions and polymorphism
- Ability to read and implement an algorithm
- Ability to write clean code using [SOLID principles](https://en.wikipedia.org/wiki/SOLID)

### Requirements

#### Swedish personal number
- 10 or 12 digits representing the birth date (\[yy\]yymmdd) + 3 unique digits + check digit
- Can include a hyphen or plus sign ([used to denote whether the person is over 100 years old](https://www.scb.se/contentassets/8d9d985ca9c84c6e8d879cc89a8ae479/ov9999_2016a01_br_be96br1601.pdf))
- Calculate and validate checksum using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm):
  1. Remove the check digit if present
  1. Starting from the rightmost digit and move left, double every second digit (incl the rightmost).
  1. Sum the digits in each position (e.g. doubling 6 to 12 becomes 1+2=3).
  1. The check digit is calculated as _(1000 - s) mod 10_, which is the least number that must be added to create a multiple of 10.

An example from Wikipedia is 7992739871 -> 79927398713 (where 3 is the check digit).
Additionally, SCB used a fake, but valid personal number as an example: 19640823-3234.
These two can be used as test cases.

#### Swedish name
- Not blank
- Includes alphabetical characters in upper and lower case, including åäö.

This is assumed to be a single non-spaced name, e.g. "Ingvar" and "Kamprad", not "Ingvar Kamprad".

#### Implied requirements and solutions
- The Swedish personal number is all about using the Luhn algorithm to validate the control digit, as well as checking the general format, which can be a regex that is aware of limits (e.g. 12 months).
- The Swedish name can be a regex for 1 or more characters belonging to A-Z, a-z, or åäö, ÅÄÖ. Note that no requirements are mentioned regarding capitalization.
- To demonstrate polymorphism and extensibility, each additional rule should extend a rule base class. It makes sense that this requires a validation function to be overridden for each implementation.
- To be a validation framework, 
## How to run

This project is built with NodeJS v18 LTS (`nvm use lts/hydrogen`). To get started, install the dependencies using npm.
```
npm install
```

To lint the code, use the following command:
```
npm run lint
```

Compile using the following command (configuration in tsconfig.json). The JS-output will be placed in dist.
```
npm run build
```

For quick testing you can simply use ts-node, though:
```
npm run start
```

For unit testing:
```
npm run test
```