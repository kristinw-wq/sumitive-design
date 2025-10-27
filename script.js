const facts = [
  "Golden Retriever-is a frendly house dog",
  "German Shepherd-is often used as a police dog.",
  "poodle-often used in dog beuty pagents",
  "grand danoa- the worlds tallest dog."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});

