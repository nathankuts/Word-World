document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const errorMessage = document.getElementById('signInErrorMessage');
    
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Signed in successfully!");
            window.location.href = 'publish.html';
        } else {
            return response.json().then(data => {
                if (data.hasOwnProperty('errors')) {
                    errorMessage.textContent = data.errors.map(error => error.message).join(", ");
                } else {
                    errorMessage.textContent = "An error occurred. Please try again.";
                }
            });
        }
    }).catch(() => {
        errorMessage.textContent = "An error occurred. Please try again.";
    });
});
