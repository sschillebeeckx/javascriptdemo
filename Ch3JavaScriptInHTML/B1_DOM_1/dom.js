let lis = document.getElementsByTagName("li");
lis[2].innerText="Java";

let tab= document.querySelector(".programming-languages").style.backgroundColor="lightblue";

const table = document.getElementById('sample-table');

// Insert a new row at the end of the table
const newRow = table.insertRow();

// Insert new cells into the row
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);

// Add content to the cells
cell1.textContent = 'Cobol';
cell2.textContent = 'Low';

