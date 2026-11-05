const consoleUser = document.getElementById("consoleUser");

function msgConsoleClick() {
  if (consoleUser) {
    if (consoleUser.textContent === "Eduardo (user)") {
      return consoleUser.textContent = "Click on the consoleUser element";
    } 
  }
}

if (consoleUser == null) {
  console.log("Element with ID 'consoleUser' not found");
} else {
  consoleUser.addEventListener("click", msgConsoleClick);
}