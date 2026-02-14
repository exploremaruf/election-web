// Load data from LocalStorage or start fresh
let votes = JSON.parse(localStorage.getItem('pollVotes')) || { apple: 0, banana: 0, orange: 0 };
let totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

const voteButtons = document.querySelectorAll('.vote-btn');
const totalDisplay = document.getElementById('total-votes');
const resetBtn = document.getElementById('reset-btn');

function updateUI() {
    totalDisplay.textContent = totalVotes;
    
    let maxVotes = Math.max(...Object.values(votes));

    for (const fruit in votes) {
        // Update text
        document.getElementById(`${fruit}-votes`).textContent = votes[fruit];
        
        // Update Progress Bar
        const percentage = totalVotes > 0 ? (votes[fruit] / totalVotes) * 100 : 0;
        document.getElementById(`bar-${fruit}`).style.width = percentage + "%";

        // Update Leader Styling
        const card = document.getElementById(`card-${fruit}`);
        if (votes[fruit] === maxVotes && maxVotes > 0) {
            card.classList.add('leading');
        } else {
            card.classList.remove('leading');
        }
    }
    // Save to browser memory
    localStorage.setItem('pollVotes', JSON.stringify(votes));
}

voteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const candidate = button.getAttribute('data-candidate');
        votes[candidate]++;
        totalVotes++;
        
        button.textContent = 'Voted! ✓';
        button.classList.add('voted');
        setTimeout(() => { button.textContent = 'Vote'; button.classList.remove('voted'); }, 800);
        
        updateUI();
    });
});

resetBtn.addEventListener('click', () => {
    if(confirm("Are you sure you want to reset all votes?")) {
        votes = { apple: 0, banana: 0, orange: 0 };
        totalVotes = 0;
        updateUI();
    }
});

// Initial load
updateUI();