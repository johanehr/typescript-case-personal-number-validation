import { Rule, RuleValidationFunction } from './rule';
import { personalNumberRegex, calculateLuhnCheckDigit, swedishNameRegex } from '../helpers';

/**
 * The PersonalNumberRule class is implemented to allow for general one-off rules.
 */
 class PersonalNumberRule implements Rule {
    explanation = 'A personal number should match birth date "[yy]yymmdd" + "-" (or + if aged 100+) + "nnn" + a check digit.'
    check: RuleValidationFunction = (input: string) => { return personalNumberRegex.test(input) && this.lastDigitMatches(input); };

    invokeCheck(input: string): boolean {
        return this.check(input);
    }

    getExplanation(): string {
        return this.explanation;
    }

    /**
     * Verification of personal number check digit using the Luhn algorithm
     * 
     * @param input personal number candidate in format [dd]dddddd-dddd
     * @returns whether the Luhn algorithm gets the same check digit
     */
    private lastDigitMatches(input: string): boolean {

        const personalNumberTrimmed = input.slice(-9).replace('-', '').replace('+', '') // E.g. 19640823-3234 -> 6408233234
        const checkDigit = personalNumberTrimmed.slice(-1);
        const luhnInput = personalNumberTrimmed.slice(0, -1);

        return checkDigit === calculateLuhnCheckDigit(luhnInput);
    }
}

class SwedishNameRule implements Rule {
    explanation = 'A Swedish name can include A-Z and ÅÄÖ (also lowercase).'
    check: RuleValidationFunction = (input: string) => { return swedishNameRegex.test(input); };

    invokeCheck(input: string): boolean {
        return this.check(input);
    }

    getExplanation(): string {
        return this.explanation;
    }
}

// Note: This is done to demonstrate polymorphism, but feels a bit weird. It could just be a CustomRule.
const SwedishPersonalNumber = new PersonalNumberRule();
const SwedishName = new SwedishNameRule();

export { SwedishPersonalNumber, SwedishName };