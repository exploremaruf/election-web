// Initialize vote data
const votes = {
  apple: 0,
  banana: 0,
  orange: 0
};

let totalVotes = 0;

// Select elements
const voteButtons = document.querySelectorAll('.vote-btn');
const totalDisplay = document.getElementById('total-votes');

// Add click event to all buttons
voteButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the fruit name from data attribute
    const candidate = button.getAttribute('data-candidate');

    // 1. Update the data logic
    votes[candidate]++;
    totalVotes++;

    // 2. Update the specific fruit count in HTML
    document.getElementById(`${candidate}-votes`).textContent = votes[candidate];

    // 3. Update the total count in HTML
    totalDisplay.textContent = totalVotes;

    // 4. Visual feedback
    const originalText = button.textContent;
    button.textContent = 'Voted! ✓';
    button.classList.add('voted');
    
    // Reset button appearance after 800ms
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('voted');
    }, 800);
  });
});