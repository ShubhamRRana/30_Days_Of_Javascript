// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of Javascript";
console.log(challenge);

//dislays the legth of the string
console.log(challenge.length);

//displays the whole string in uppercase
console.log(challenge.toUpperCase());

//displays the whole string in lowercase
console.log(challenge.toLowerCase());

//gives us a substring,first is starting point and second number is ending point
//It dosen't include the charcater at the second index
console.log(challenge.substring(0, 2));
console.log(challenge.substring(2));

//checks if the substring is present in the string
console.log(challenge.includes("Script"));

//it splits the string into an array
console.log(challenge.split(""));
console.log(challenge.split(" "));
let comp = "Facebook,Google,Microsoft,Apple,Oracle,Amazon";
console.log(comp.split(","));

//it replaces old character with new character
console.log(challenge.replace("Javascript", "Python"));

//gives the ascii value of the character at the given position
console.log(challenge.charCodeAt(11));

//gives the first occurence of the given character
console.log(challenge.indexOf("a"));

//gives the last occurence of the given character
console.log(challenge.lastIndexOf("a"));

let be =
  "You cannot end a sentence with because because because is a conjuction";
console.log(be.indexOf("because"));
console.log(be.lastIndexOf("because"));

//gives the first occurence of the given parameter
console.log(be.search("because"));

//removes the white spaces from front and rear
console.log(challenge.trim());

//checks if the string starts with the given input
console.log(challenge.startsWith(30));

//checks if the string ends with the given input
console.log(challenge.endsWith("script"));

//returns an array with total number of substring present in the string
//here it displays total a's present in the string
pattern = /a/gi;
console.log(challenge.match(pattern));

//used to concat two strings and can have n inputs seperated with comma
console.log(challenge.concat(" ,Python", " and ReactJS"));

//used to repeat the sting n times
console.log(challenge.repeat(2));
