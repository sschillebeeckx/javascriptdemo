// Access Node Properties
const para1 = document.getElementById("first-para");
console.log("Node Name:", para1.nodeName); // Logs "P"
console.log("Node Type:", para1.nodeType); // Logs 1 (Element Node)

// Append a new child
const newPara = document.createElement("p");
newPara.innerText = "This is a dynamically added paragraph.";
const container = document.getElementById("container");
container.appendChild(newPara);

// Replace a child node
const span = document.querySelector("span");
const replacement = document.createElement("strong");
replacement.innerText = "This is a replaced strong element.";
container.replaceChild(replacement, span);

// Remove a child node
const secondPara = container.querySelector("p:nth-child(2)");
container.removeChild(secondPara);

// Clone a node
const clonedNode = para1.cloneNode(true);
container.appendChild(clonedNode);

// Style manipulation (example of adding a class)
clonedNode.classList.add("highlight");

// Using Sibling and Next Node Properties
const firstChild = container.firstChild; // First node, could be text
console.log("First Child Node Type:", firstChild.nodeType); // Logs 3 (Text node)

const firstElementChild = container.firstElementChild; // First element node
console.log("First Element Child:", firstElementChild.tagName); // Logs "P"

// Highlight the next sibling of the first paragraph
const nextSibling = para1.nextElementSibling; // Get the next element sibling
if (nextSibling) {
    nextSibling.style.border = "2px dashed red";
}

// Traverse to the last child and style its previous sibling
const lastChild = container.lastChild; // Last node (could be text or element)
if (lastChild.previousElementSibling) {
    lastChild.previousElementSibling.style.fontWeight = "bold";
}

