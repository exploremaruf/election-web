// Vote counters
let appleVotes = 0;
let bananaVotes = 0;
let orangeVotes = 0;
let totalVotes = 0;

// Select all vote buttons
const voteButtons = document.querySelectorAll('.vote-btn');

// Add event listeners
voteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const candidate = button.getAttribute('data-candidate');

    if (candidate === 'apple') {
      appleVotes++;
      document.getElementById('apple-votes').textContent = `Votes: ${appleVotes}`;
    } else if (candidate === 'banana') {
      bananaVotes++;
      document.getElementById('banana-votes').textContent = `Votes: ${bananaVotes}`;
    } else if (candidate === 'orange') {
      orangeVotes++;
      document.getElementById('orange-votes').textContent = `Votes: ${orangeVotes}`;
    }

    // Update total votes
    totalVotes++;
    document.getElementById('total-votes').textContent = totalVotes;
  });
});
