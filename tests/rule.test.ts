import { Rule } from '../src/validatorRules/rule';

const exampleLengthCheck = (input: string) => { return input.length === 10; };

describe('Testing Rule class', () => {
  
  test('Constructor sets the correct name', () => {
    const name = "testName";
    expect(new Rule(name, exampleLengthCheck).name).toBe(name);
  });

  test('Rule validation pass returns true', () => {
    const name = "testName";
    expect(new Rule(name, exampleLengthCheck).check("0123456789")).toBeTruthy;
  });

  test('Rule validation fail returns false', () => {
    const name = "testName";
    expect(new Rule(name, exampleLengthCheck).check("123")).toBeFalsy;
  });
  
});