import { Rule } from "../validatorRules/rule"

class Validator {
    rules: Rule[] = [];

    constructor(rules: Rule[]){
        this.rules = rules;
    }

    validate(input: string): boolean {
        return this.rules.map( (rule) => { return rule.check(input); }).every((pass) => { return pass; } )
    }
}

export { Validator };