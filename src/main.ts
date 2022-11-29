import { Validator } from "./validator/validator";
import { CustomRule, Rule } from "./validatorRules/rule";
import { SwedishPersonalNumber, SwedishName } from "./validatorRules/swedishRules";

const ruleMatchesJohan: Rule = new CustomRule().setExplanation('Must match Johan exactly').setCheck( (input: string) => { return (input === 'Johan'); });
const testInputPositive = 'Johan';
const testInputNegative = 'JOHAN';
const validator = new Validator([ruleMatchesJohan]);

console.log(`Validating whether ${testInputPositive} matches the rule for "${ruleMatchesJohan.explanation}": ${validator.validate(testInputPositive)}`);
console.log(`Validating whether ${testInputNegative} matches the rule for "${ruleMatchesJohan.explanation}": ${validator.validate(testInputNegative)}`);

console.log("\n");

// NOTE: For some reason this fails, despite the unit test passing..?
const testInputPersonalNumber = "19640823-3234";
const validatorSwedish = new Validator([SwedishPersonalNumber]);
const result = validatorSwedish.validate(testInputPersonalNumber);
console.log(`Validating whether ${testInputPersonalNumber} matches the rule for "${SwedishPersonalNumber.getExplanation()}": ${result}`);

console.log("\n");

const testName = "Göran";
const validatorName = new Validator([SwedishName]);
const resultName = validatorName.validate(testName);
console.log(`Validating whether ${testName} matches the rule for "${SwedishName.getExplanation()}": ${resultName}`);