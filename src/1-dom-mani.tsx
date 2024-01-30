// **Hover a lot!**
// https://keep.google.com/u/0/#NOTE/1M_5-f_aWdYtHORqakeMPL5FLAcg9-frd9v0IATZvtqIup0pKw75yRLasTz5nEyk
// https://www.typescriptlang.org/docs/handbook/dom-manipulation.html

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);

const div = document.getElementsByTagName("div")[0];
const sons = div.children;
const sons2 = div.childNodes;

const first = document.querySelector("li"); // returns the first li element
const all = document.querySelectorAll("li"); // returns the list of all li elements

//
interface Xanax {
  name: string;
  age: number;
}

function heyo<X extends Xanax>(x: X): X {
  // X must be child type of Xanax
  return x;
}

const obj = {
  name: "An",
  age: 24,
  favorite: "cat",
};

heyo(obj);
