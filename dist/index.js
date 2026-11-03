const consoleUser = document.getElementById('consoleUser');
function msgConsoleClick() {
    if (consoleUser.textContent === 'Eduardo (user)') {
        consoleUser.textContent = 'Click on the consoleUser element';
    }
    else {
        consoleUser.textContent = 'Eduardo (user)';
    }
}
consoleUser.addEventListener('click', msgConsoleClick);
export {};
//# sourceMappingURL=index.js.map