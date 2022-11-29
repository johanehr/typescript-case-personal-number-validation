import { calculateLuhnCheckDigit, personalNumberRegex } from '../src/helpers';

describe('Testing helpers file', () => {

    test('Luhn check digit works on fake personal number 19640823-3234', () => {
      expect(calculateLuhnCheckDigit("640823323")).toBe("4");
    });

    test('Luhn check digit works on Wikipedia example', () => {
        expect(calculateLuhnCheckDigit("7992739871")).toBe("3");
    });

    test('Personal number regex works for a positive example', () => {
        expect(personalNumberRegex.test("19640823-3234")).toBeTruthy;
    });
    
  });