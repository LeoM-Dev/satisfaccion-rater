const form = document.getElementById('satisfactionForm');
const ratings = [
    { id: 'rating1', feedbackId: 'feedback1', reactionId: 'reaction1' },
    { id: 'rating2', feedbackId: 'feedback2', reactionId: 'reaction2' },
    { id: 'rating3', feedbackId: 'feedback3', reactionId: 'reaction3' },
    { id: 'rating4', feedbackId: 'feedback4', reactionId: 'reaction4' },
    { id: 'rating5', feedbackId: 'feedback5', reactionId: 'reaction5' },
    { id: 'rating6', feedbackId: 'feedback6', reactionId: 'reaction6' },
    { id: 'rating7', feedbackId: 'feedback7', reactionId: 'reaction7' },
];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    let ratingValues = '';

    ratings.forEach(rating => {
        const slider = document.getElementById(rating.id);
        const feedback = document.getElementById(rating.feedbackId);
        ratingValues += `${feedback.textContent}: ${slider.value}/5`;
    });

    const body = `
    Nombre: ${name}

    Calificaciones:
    ${ratingValues}
    Reseña: ${review}
    `;

    const mailtoLink = `mailto:leomeza152463@gmail.com?subject=Nueva Evaluación de Satisfacción&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});


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
                feedbackText = 'Nada Satisfecho'; 
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
