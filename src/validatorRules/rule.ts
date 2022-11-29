type ruleValidationFunction = (input: string) => boolean

abstract class Rule {
    abstract explanation: string;
    abstract check: ruleValidationFunction;

    abstract invokeCheck(input: string): boolean;
}

class CustomRule implements Rule {
    explanation: string = 'No explanation provided for this rule.'
    check: ruleValidationFunction = (input: string) => { return true; };
    
    invokeCheck(input: string): boolean {
        return this.check(input);
    }

    setExplanation(expl: string) {
        this.explanation = expl;
        return this;
    }

    setCheck(check: ruleValidationFunction) {
        this.check = check;
        return this;
    }
}

export { Rule, CustomRule };