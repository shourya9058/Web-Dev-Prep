let dice = document.getElementById("dice");

function rollDice() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    dice.className = `show-${randomNum}`;
}

// Roll dice every 2 seconds (for demo)
setInterval(rollDice, 2000);
