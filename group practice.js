
// Task 1 Write a function that generates an attendee badge given a name and role
const readline = require('readline-sync');

let attendeeName = readline.question("Please enter your name. ");
let attendeeRole = readline.question("What is your role? ");

function printBadge(Name, Role) {
    console.log("Name: " + attendeeName + ", Role: " + attendeeRole);
}

printBadge(attendeeName, attendeeRole);

