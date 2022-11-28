import { add } from '../src/main';
 
describe('Testing main.ts file', () => {
  
  test('1 + 1 = 2', () => {
    expect(add(1,1)).toBe(2);
  });

  test('-3 + 1 = -2', () => {
    expect(add(-3,1)).toBe(-2);
  });
  
});