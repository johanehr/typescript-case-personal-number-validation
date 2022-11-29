import { Validator } from '../src/validator/validator';
import { Rule } from '../src/validatorRules/rule';
 
describe('Testing generic validator class', () => {
  
  test('Constructor with no rules', () => {
    let testValidator = new Validator([]);
    expect(testValidator.rules.length).toBe(0);
  });

  test('Constructor with one rule', () => {
    let testRule = new Rule("test", (input: string) => { return true; })
    let testValidator = new Validator([testRule]);
    expect(testValidator.rules.length).toBe(1);
  });

  test('Validating without any rules returns true', () => {
    let testValidator = new Validator([]);
    expect(testValidator.validate("some string to validate")).toBe(true);
  });
  
});