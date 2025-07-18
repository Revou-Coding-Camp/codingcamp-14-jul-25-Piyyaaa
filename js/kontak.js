const form = document.getElementById('contactForm');
const successAlert = document.getElementById('successAlert');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            successAlert.classList.remove('d-none');
            form.reset();
        } else {
            alert("There was an error. Please try again.");
        }
    }).catch(error => {
        console.error('Error!', error.message);
    });
});