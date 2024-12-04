//leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024)); // Outputs: 2024 is a leap year.
console.log(isLeapYear(1900)); // Outputs: 1900 is not a leap year.


//ticketPrice
function ticketPrice(age) {
    if (age <= 12) {
        return "$10 (Child)";
    } else if (age >= 13 && age <= 17) {
        return "$15 (Teenager)";
    } else {
        return "$20 (Adult)";
    }
}

console.log(ticketPrice(10)); // Outputs: $10 (Child)
console.log(ticketPrice(16)); // Outputs: $15 (Teenager)
console.log(ticketPrice(30)); // Outputs: $20 (Adult)



//fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Outputs: 8




//palindrome checker
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("A man a plan a canal Panama")); // Outputs: true
console.log(isPalindrome("hello")); // Outputs: false
