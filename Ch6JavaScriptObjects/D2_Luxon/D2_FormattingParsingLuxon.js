import {DateTime} from 'luxon';

// Parse the date string in dd/MM/yyyy format
const dateString = "24/12/2024";
const parsedDate = DateTime.fromFormat(dateString,"dd/MM/yyyy");


// Format the parsed date back to the same format
const formattedDate = parsedDate.toFormat("dd/MM/yyyy");

console.log(formattedDate);  // Output: 04/12/2024
