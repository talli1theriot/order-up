console.console.log("Hello from script.js");

const tags = ["simple", "spicy", "special"];
const prices = [4,4,4,5.50,6.50,8.25,8.25,8.25];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i ++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}
