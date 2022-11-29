import { Validator } from "./validator/validator";
import { Rule } from "./validatorRules/rule";

let ruleMatchesJohan: Rule = new Rule('Johan-matcher', (input: string) => { return (input === 'Johan'); });
let testInputPositive = 'Johan';
let testInputNegative = 'JOHAN';
let validator = new Validator([ruleMatchesJohan]);

console.log(`Validating whether ${testInputPositive} matches the rule for "${ruleMatchesJohan.name}": ${validator.validate(testInputPositive)}`);
console.log(`Validating whether ${testInputNegative} matches the rule for "${ruleMatchesJohan.name}": ${validator.validate(testInputNegative)}`);
