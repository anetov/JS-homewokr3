// 1 задание
function stringStatistics(str) { 
    let letterCount = 0; 
    let digitCount = 0; 
    let otherCount = 0; 

    for (let i = 0; i < str.length; i++) { 
        const char = str.charAt(i); 
        if (/[a-zA-Z]/.test(char)) { 
            letterCount++; 
        } else if (/\d/.test(char)) { 
            digitCount++; 
        } else { 
            otherCount++; 
        } 
    } 

    return { letters: letterCount,  
        digits: digitCount, other:  
        otherCount }; 
} 

const result = stringStatistics("Hello 123!"); 
console.log(result); 

// 2 задание
function numberToText(num) { 
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]; 
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]; 

    if (num < 10 || num > 99) { 
        return "Invalid number"; 
    } else if (num < 20) { 
        return teens[num - 10]; 
    } else { 
        const onesDigit = num % 10; 
        const tensDigit = Math.floor(num / 10); 
        return tens[tensDigit] + " " + ones[onesDigit]; 
    } 
} 

const result = numberToText(prompt()); 
console.log(result); 

// 3 задание
function convertToCamelCase(cssProp) {
    let words = cssProp.split("-");
    
    for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join("");
}

  console.log(convertToCamelCase("font-size")); // "fontSize"
  console.log(convertToCamelCase("background-color")); // "backgroundColor"
  console.log(convertToCamelCase("text-align")); // "textAlign"