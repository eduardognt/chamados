const consoleUser = document.getElementById('consoleUser') as HTMLElement;

function msgConsoleClick () {
    if (consoleUser.textContent === 'Eduardo (user)') {
        consoleUser.textContent = 'Click on the consoleUser element';
    } else {
        consoleUser.textContent = 'Eduardo (user)';
    }
}

consoleUser.addEventListener('click', msgConsoleClick);