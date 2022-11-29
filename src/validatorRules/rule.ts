type RuleValidationFunction = (input: string) => boolean

abstract class Rule {
    abstract explanation: string;
    abstract check: RuleValidationFunction;

    invokeCheck(input: string): boolean {
        return this.check(input);
    }

    getExplanation(): string {
        return this.explanation;
    }
}

/**
 * The CustomRule class is implemented to allow for general one-off rules.
 */
class CustomRule implements Rule {
    explanation = 'No explanation provided for this rule.'
    check: RuleValidationFunction = (input: string) => { return true; };

    setExplanation(expl: string) {
        this.explanation = expl;
        return this;
    }

    setCheck(check: RuleValidationFunction) {
        this.check = check;
        return this;
    }

    invokeCheck(input: string): boolean {
        return this.check(input);
    }

    getExplanation(): string {
        return this.explanation;
    }
}

export { Rule, CustomRule, RuleValidationFunction };