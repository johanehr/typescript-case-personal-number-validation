import { CustomRule } from '../src/validatorRules/rule';
import { SwedishPersonalNumber, SwedishName } from '../src/validatorRules/swedishRules';

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

describe('Testing SwedishRules file', () => {

  test('Example personal number passes the validation', () => {
    expect(SwedishPersonalNumber.check("19640823-3234")).toBeTruthy;
  });

  test('Example short personal number passes the validation', () => {
    expect(SwedishPersonalNumber.check("640823+3234")).toBeTruthy;
  });

  test('Corrupted example personal number fails the validation', () => {
    expect(SwedishPersonalNumber.check("19640823-3235")).toBeTruthy;
  });

  test('Example Swedish name passes the validation', () => {
    expect(SwedishName.check("Göran")).toBeTruthy;
  });

  test('Example Japanese name fails the validation', () => {
    expect(SwedishName.check("ひろし")).toBeFalsy;
  });
  
});