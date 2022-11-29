import { Rule } from '../src/validatorRules/rule';
 
describe('Testing Rule class', () => {
  
  test('Constructor sets the correct name', () => {
    let name = "testName";
    expect(new Rule(name, (input: string) => { return true; }).name).toBe(name);
  });
  
});