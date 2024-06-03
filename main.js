// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only 
// those words.
var mixArray = ["Apple", 1, "Banana", true, 3, "Dare", 2];
var StringsArray = mixArray.filter(function (item) { return typeof item === "string"; });
console.log(StringsArray);
var numbersArray = mixArray.filter(function (item) { return typeof item === "number"; });
console.log(numbersArray);
