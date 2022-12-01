import { calculateLuhnCheckDigit, personalNumberRegex, swedishNameRegex } from '../src/validatorRules/helpers';

describe('Testing helpers file', () => {

    test('Luhn check digit works on fake personal number 19640823-3234', () => {
      expect(calculateLuhnCheckDigit("640823323")).toBe("4");
    });

    test('Luhn check digit works on Wikipedia example', () => {
        expect(calculateLuhnCheckDigit("7992739871")).toBe("3");
    });

    test('Personal number regex works for a positive 10 digit example', () => {
        expect(personalNumberRegex.test("640823-3234")).toBeTruthy();
    });

    test('Personal number regex works for a positive 12 digit example', () => {
      expect(personalNumberRegex.test("19640823-3234")).toBeTruthy();
  });

    test('Personal number regex fails for a negative example', () => {
      expect(personalNumberRegex.test("19640823-323x")).toBeFalsy();
  });

    test('Swedish name regex works for a positive example', () => {
        expect(swedishNameRegex.test("Johan")).toBeTruthy();
    })

    test('Swedish name regex fails for a negative example', () => {
      expect(swedishNameRegex.test("12345")).toBeFalsy();
  })
    
  });