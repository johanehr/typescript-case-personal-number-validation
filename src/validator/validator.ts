import { Rule } from "../validatorRules/rule"

class Validator {
    rules: Rule[] = [];

    constructor(rules: Rule[]){
        this.rules = rules;
    }

    validate(input: string): boolean {
        return true;
    }
}

export { Validator };