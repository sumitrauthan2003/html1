const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

let noClickCount = 0;
const messages = [
    "Are you sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking Sumit's heart ;(",
    "Give it a thought!",
    "Just say yes!",
    "Sumit will be very sad..."
];

noBtn.addEventListener('click', () => {
    // Change "No" button text
    noBtn.innerText = messages[noClickCount % messages.length];
    noClickCount++;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 15) + 'px';
    yesBtn.style.padding = (currentSize / 2 + 10) + 'px ' + (currentSize + 20) + 'px';
});