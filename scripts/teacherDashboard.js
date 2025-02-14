document.getElementById('submitBtn').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const doubt = document.getElementById('doubt').value;
    const response = document.getElementById('response').value;
    const date = document.getElementById('date').value;

    if (subject && doubt && response && date) {
        alert(`Submitted:\nSubject: ${subject}\nDoubt: ${doubt}\nResponse: ${response}\nDate: ${date}`);
    } else {
        alert('Please fill in all fields.');
    }
});