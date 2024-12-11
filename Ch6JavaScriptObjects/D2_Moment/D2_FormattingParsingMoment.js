const moment = require("./modules/moment.min.js");

const dateString = "23/08/2013";

// Parse the date string
const parsedDate = moment(dateString, "DD/MM/YYYY");

// Format the parsed date back into dd/MM/yyyy
const formattedDate = parsedDate.format("DD/MM/YYYY");

console.log("Parsed Date:", parsedDate.toDate());
console.log("Formatted Date:", formattedDate);
