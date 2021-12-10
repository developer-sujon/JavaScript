/**
 * Regular Expression.
 * Pattern Matching Technique;
 */

 let re, str;
 re = /hello/i; // i = case insensitive
 
 // exec() - Returns result in an array or null 
 let result = re.exec(str);
 
 // test() - true/false 
 result = re.test(str);
 
 // match() - Returns array or null 
 str = "Again Hello World Hello";
 result = str.match(re);
 
 // search() - Returns index of the first match index or -1 
 result = str.search(re);
 
 //replace() - Returns new string
 str = "Again Hello World";
 let newStr = str.replace(re, 'Hi');
 
 // Literal Character 
 re = /hello/; 
 re = /hello/i; 
 re = /hell/i; 
 re = /lo W/i; 
 re = /10W/i;
 
 // Meta Characters 
 re = /^hello/; // Must start with 
 re = /hello$/; // Must end with 
 re = /world$/; 
 re = /^hello$/; // Must start and end wit 
 re = /^h.llo$/; // Matches any one charag 
 re = /h.llo/; re = /h*llo/; // 0 or more times 
 re = /he? a?llo/; // Optional but after before any characters incloud
 re = /hellol?/; // escaping;
 
 // Character Set using Brackets [] 
 re = /h[eai]llo/; // Must be one of them inside brackets 
 re = /[HA]ello/i; re = /[^ha]ello/; // Anything except those inside brackets 
 re = /^[ha]ello/; // Must start with h or a 
 re = /[A-Z]ello/; // Start with Uper Case 
 re = /[ATA-Z]/; // First Letter must be upper case 
 re = /^[a-z]/; 
 re = /[A-Za-Z]ello/; 
 re = /[0-9]ello/; 
 re = /^[0-9]ello/; 
 re = /[^0-9]ello/; // Not digit 
 re = /^[0-9][0-9][0-9]ello/; // three digits
 
 // Braces {} - Quantifier 
 re = /el{2}o/; // Must occur exactly 2 times 
 re = /hel{2,5}o/; // Min 2 - max 5
 re = /hel{2, }o/; // At least 2 times
 
 // Parentheses () - Grouping 
 re = /([0-9]){5}/;
 re = /^([0-9]xy){4}/;
 str = "2xy3xy7xy8xy";
 
 // Bangladeshi Phone Number // total 11 digits //
 re = /^01[0-9]{9}$/;
 re = /^\+8801[0-9]{9}$/;
 str = "01788888888"; 
 str = "+8801811888889"; 
 
 // Shorthand Character Classes 
 re = /w/; // Word Character - alpha numeric 
 re = /\w+/; // One or more 
 re = /\W/; // Non Word Character 
 re = /\W+/; // one or more
 re = /\d/; // Digit 
 re = /\d+/;
 re = /\D/; // Non digit 
 re = /\s/; // Match white space 
 re = /S/; // Match non white space, 
 re = /Hello\b/; // Word Boundary 
 re = /bHello\b/;
 
 //Assertions 
 re = /x(?=yz)/; //Matches X before yz 
 re = / x(?!yz)/; //Matches X ! before yz

// Examples 
// Postal Code // 4700, 4000 
re = /^[0-9]{4}$/; 
str = "4000";

// Phone Number // 01717888888 +8801717888888 8801717888888 
re = /^(\+)?(88)?01[0-9]{9}$/; 
str = "+8801755888888";

// Email Address // mohammad.sujon.com.bd 
re = /^([a-zA-Z0-9]\.?)+[^.]@([a-zA-Z0-9]\.?)+[^\.]$/ ; 
str = "mohammad.sujon.com.bd" ;