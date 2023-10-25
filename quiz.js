async function checkAnswer() {
    let correctAnswers = {
        'question1': 'B',
        // ... Add correct answers for more questions here ...
    };
    let score = 0;
    for (let question in correctAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    
    let username = prompt(`Your score is ${score}. Enter your name for the rankings:`);

    // POST request to save the score
    const response = await fetch('/.netlify/functions/saveRanking', {
        method: 'POST',
        body: JSON.stringify({ name: username, score: score })
    });
    const updatedRankings = await response.json();
    updateRankings(updatedRankings); // This function needs to be implemented
}