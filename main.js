const form = document.getElementById('satisfactionForm');
const ratings = [
    { id: 'rating1', feedbackId: 'feedback1', reactionId: 'reaction1' },
    { id: 'rating2', feedbackId: 'feedback2', reactionId: 'reaction2' },
    { id: 'rating3', feedbackId: 'feedback3', reactionId: 'reaction3' }
];

ratings.forEach(rating => {
    const slider = document.getElementById(rating.id);
    const feedback = document.getElementById(rating.feedbackId);
    const reaction = document.getElementById(rating.reactionId);

    slider.addEventListener('input', function() {
        const value = slider.value;
        let feedbackText = '';
        let reactionEmoji = ''; 
        let feedbackColor = '#eaf1e6'; 
        let feedbackBackgroundColor = '#3e73d4';

        switch(value) {
            case '1': 
                feedbackText = 'Malo'; 
                reactionEmoji = '&#128532';
                feedbackColor = '#FDFFFC';
                feedbackBackgroundColor = '#D62839';
                break;
            case '2': 
                feedbackText = 'Poco Satisfecho'; 
                reactionEmoji = '&#128577';
                feedbackColor = '#FDFFFC'; 
                feedbackBackgroundColor = '#FFC100';
                break;
            case '3': 
                feedbackText = 'Satisfecho'; 
                reactionEmoji = '&#128512';
                break;
            case '4': 
                feedbackText = 'Muy Satisfecho'; 
                reactionEmoji = '&#128513';
                feedbackColor = '#FDFFFC';
                feedbackBackgroundColor = '#5FAD41';
                break;
            case '5': 
                feedbackText = 'Sumamente Satisfecho'; 
                reactionEmoji = '&#128525';
                feedbackColor = '#FDFFFC';
                feedbackBackgroundColor = '#98CE00';
                break;
        }

        feedback.textContent = feedbackText;
        feedback.style.color = feedbackColor;
        feedback.style.backgroundColor = feedbackBackgroundColor;
        reaction.innerHTML = reactionEmoji; 
    });
});
