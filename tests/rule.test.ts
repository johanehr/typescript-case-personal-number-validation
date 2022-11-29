import { Rule } from '../src/validatorRules/rule';

let exampleLengthCheck = (input: string) => { return input.length === 10; };

describe('Testing Rule class', () => {
  
  test('Constructor sets the correct name', () => {
    let name = "testName";
    expect(new Rule(name, (input: string) => { return true; }).name).toBe(name);
  });

  test('Rule validation pass returns true', () => {
    let name = "testName";
    expect(new Rule(name, exampleLengthCheck).check("0123456789")).toBeTruthy;
  });

  test('Rule validation fail returns false', () => {
    let name = "testName";
    expect(new Rule(name, exampleLengthCheck).check("123")).toBeFalsy;
  });
  
});