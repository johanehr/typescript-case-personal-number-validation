import { Validator } from '../src/validator/validator';
import { Rule } from '../src/validatorRules/rule';
 
const testLengthRule = new Rule(
    "String length has to be 10",
    (input: string) => { return input.length === 10; }
);

const testDinosaurRule = new Rule(
    "String has to be 'Dinosaur'",
    (input: string) => { return input === 'Dinosaur'; }
);

describe('Testing Validator class', () => {
  
  test('Constructor with no rules supplied (empty list)', () => {
    const testValidator = new Validator([]);
    expect(testValidator.rules.length).toBe(0);
  });

  test('Constructor with one rule has one rule', () => {
    const testValidator = new Validator([testLengthRule]);
    expect(testValidator.rules.length).toBe(1);
  });

  test('Validating without any rules returns true', () => {
    const testValidator = new Validator([]);
    expect(testValidator.validate("some string to validate")).toBe(true);
  });

  test('Validating with a broken rule returns false', () => {
    const testValidator = new Validator([testLengthRule]);
    expect(testValidator.validate("too short")).toBe(false);
  });

  test('Validating with an adhered rule returns true', () => {
    const testValidator = new Validator([testLengthRule]);
    expect(testValidator.validate("just right")).toBe(true);
  });

  test('Validating with both a broken and adhered rule returns false', () => {
    const testValidator = new Validator([testLengthRule, testDinosaurRule]);
    expect(testValidator.validate("rhinoceros")).toBe(false);
  });

});