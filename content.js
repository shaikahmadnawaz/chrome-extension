console.log("Hello from Chrome Extension!");

let paragraphs = document.getElementsByTagName("article");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "Nawaz";
}
