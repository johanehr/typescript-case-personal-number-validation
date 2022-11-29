import { Validator } from "./validator/validator";
import { CustomRule, Rule } from "./validatorRules/rule";

const ruleMatchesJohan: Rule = new CustomRule().setExplanation('Must match Johan exactly').setCheck( (input: string) => { return (input === 'Johan'); });
const testInputPositive = 'Johan';
const testInputNegative = 'JOHAN';
const validator = new Validator([ruleMatchesJohan]);

console.log(`Validating whether ${testInputPositive} matches the rule for "${ruleMatchesJohan.explanation}": ${validator.validate(testInputPositive)}`);
console.log(`Validating whether ${testInputNegative} matches the rule for "${ruleMatchesJohan.explanation}": ${validator.validate(testInputNegative)}`);
