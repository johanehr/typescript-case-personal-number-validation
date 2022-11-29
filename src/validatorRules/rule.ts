type ruleValidationFunction = (input: string) => boolean

class Rule {
    name: string;
    rule: ruleValidationFunction;

    constructor(name: string, rule: ruleValidationFunction) {
        this.name = name;
        this.rule = rule;
    }
}

export { Rule };