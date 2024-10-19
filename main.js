const form = document.getElementById('satisfactionForm');
const ratings = [
    { id: 'rating1', feedbackId: 'feedback1' },
    { id: 'rating2', feedbackId: 'feedback2' },
    { id: 'rating3', feedbackId: 'feedback3' }
];

ratings.forEach(rating => {
    const slider = document.getElementById(rating.id);
    const feedback = document.getElementById(rating.feedbackId);

    slider.addEventListener('input', function() {
        const value = slider.value;
        let feedbackText = '';

        switch(value) {
            case '1': feedbackText = 'Malo'; break;
            case '2': feedbackText = 'Poco Satisfecho'; break;
            case '3': feedbackText = 'Satisfecho'; break;
            case '4': feedbackText = 'Muy Satisfecho'; break;
            case '5': feedbackText = 'Sumamente Satisfecho'; break;
        }

        feedback.textContent = feedbackText;
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    const rating1 = document.getElementById('rating1').value;
    const rating2 = document.getElementById('rating2').value;
    const rating3 = document.getElementById('rating3').value;

    const mailtoLink = `mailto:leomeza152463@gmail.com?subject=Reseña%20de%20${name}&body=
    Nombre: ${name}%0D%0A
    Atención al cliente: ${rating1}%0D%0A
    Rapidez en el servicio: ${rating2}%0D%0A
    Satisfacción con el precio: ${rating3}%0D%0A
    Reseña: ${review || 'No se dejó reseña.'}`;

    window.location.href = mailtoLink;
});
