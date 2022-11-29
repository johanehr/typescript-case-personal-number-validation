type ruleValidationFunction = (input: string) => boolean

class Rule {
    name: string;
    check: ruleValidationFunction;

    constructor(name: string, check: ruleValidationFunction) {
        this.name = name;
        this.check = check;
    }
}

export { Rule };