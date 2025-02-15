document.getElementById('raise-ticket').addEventListener('click', function() {
    const requestId = document.getElementById('request-id').value;
    const module = document.getElementById('module').value;
    const doubt = document.getElementById('doubt').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;

    const imageInput = document.getElementById('image-upload');
    const imageFile = imageInput.files[0];

    if (!requestId || !module || !subject || !description) {
        alert('Please fill in all required fields');
        return;
    }

    // Simulation of raising a ticket, you can implement actual functionality here
    alert('Ticket Raised!\n\n' +
          `Request ID: ${requestId}\n` +
          `Module: ${module}\n` +
          `Subject: ${subject}\n` +
          `Description: ${description}`);

    // Reset fields after submission
    document.getElementById('request-id').value = '';
    document.getElementById('module').value = '';
    document.getElementById('doubt').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('description').value = '';
    imageInput.value = '';
});
