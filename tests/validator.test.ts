import { Validator } from '../src/validator/validator';
import { Rule } from '../src/validatorRules/rule';
 
let testLengthRule = new Rule(
    "String length has to be 10",
    (input: string) => { return input.length === 10; }
);

describe('Testing Validator class', () => {
  
  test('Constructor with no rules supplied (empty list)', () => {
    let testValidator = new Validator([]);
    expect(testValidator.rules.length).toBe(0);
  });

  test('Constructor with one rule has one rule', () => {
    let testRule = new Rule("test", (input: string) => { return true; })
    let testValidator = new Validator([testRule]);
    expect(testValidator.rules.length).toBe(1);
  });

  test('Validating without any rules returns true', () => {
    let testValidator = new Validator([]);
    expect(testValidator.validate("some string to validate")).toBe(true);
  });

  test('Validating with a broken rule returns false', () => {
    let testValidator = new Validator([testLengthRule]);
    expect(testValidator.validate("too short")).toBe(false);
  });

  test('Validating with an adhered rule returns true', () => {
    let testValidator = new Validator([testLengthRule]);
    expect(testValidator.validate("just right")).toBe(true);
  });

});