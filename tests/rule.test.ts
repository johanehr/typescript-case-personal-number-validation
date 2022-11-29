import { CustomRule } from '../src/validatorRules/rule';

const exampleLengthCheck = (input: string) => { return input.length === 10; };
const exampleLengthRule = new CustomRule().setCheck(exampleLengthCheck)

describe('Testing Rule class', () => {

  test('Rule validation pass returns true', () => {
    expect(exampleLengthRule.check("0123456789")).toBeTruthy;
  });

  test('Rule validation fail returns false', () => {
    expect(exampleLengthRule.check("123")).toBeFalsy;
  });
  
});