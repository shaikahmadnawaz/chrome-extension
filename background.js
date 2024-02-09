console.log("Hello from background.js!");

console.log("Hello from background.js!");

chrome.browserAction.onClicked.addListener((tab) => {
  // Handle the browser action click event here
  console.log("Browser action clicked!");
  // Add your logic or open a popup/page if needed
});
