const personalNumberRegex = new RegExp('^(\d{6}|[12]\d{7})[+-]\d{4}$'); // Naive regex for date of birth, since e.g. 20299999-1234 would pass. I suppose the + isn't valid for the yyyy format either.
const swedishNameRegex = new RegExp('^[A-ZÅÄÖ][a-zåäö]+$'); // Assume starts with uppercase, and no spaces (slightly less naive then what was specified in assignment)

function calculateLuhnCheckDigit(input: string): string {
    const numbers = input.split('');
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (i % 2 === (numbers.length - 1) % 2) { // Rightmost digit should be doubled, and every second from there.
            numbers[i] = String(2*Number(numbers[i]));
        }
    }
    //console.log(`Performed doubling on every second value: ${input.split('')} -> ${numbers}`)

    const individualDigits = [...numbers.join('')];
    //console.log(`Split into individual digits: ${individualDigits}`);
    
    let sum = 0;
    individualDigits.forEach(n => { sum += Number(n); }) // Sum each individual digit
    
    const checkDigit = (1000-sum) % 10;

    return String(checkDigit);
}


export { personalNumberRegex, calculateLuhnCheckDigit, swedishNameRegex }