/*
    CIT 281 Project 1
    Name: Edwin Gutierrez
*/

// .getDay method is how I get the date to show the current day of the week in #'s, then use an array to convert to the day (Sunday, Monday, etc)
console.log("Sunday Monday Tuedsay Wednesday Thursday Friday Saturday".split(" ")[new Date().getDay()]);