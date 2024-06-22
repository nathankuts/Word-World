// Sample data for newly published works
const newWorks = [
    { title: 'The Adventures of Tom', link: 'light-novels.html' },
    { title: 'Mystery in the Woods', link: 'comics.html' },
    { title: 'Love in the Time of Dragons', link: 'light-novels.html' }
];

// Function to load notices into the notice board
function loadNotices() {
    const noticeList = document.getElementById('noticeList');
    newWorks.forEach(work => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = work.link;
        anchor.textContent = work.title;
        listItem.appendChild(anchor);
        noticeList.appendChild(listItem);
    });
}

// Load notices when the page loads
window.onload = loadNotices;

// Form validation
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return;
    }

    // Clear error message
    errorMessage.textContent = '';

    // Here you would typically send the form data to the server
    // For now, just display a success message
    alert('Account created successfully!');

    // Redirect to the publish page
    window.location.href = 'publish.html';
});

const signupButton = document.getElementById('signupButton');
const popupForm = document.getElementById('popupForm');
const popupOverlay = document.getElementById('popupOverlay');

signupButton.addEventListener('click', () => {
    popupForm.classList.add('active');
    popupOverlay.classList.add('active');
});

popupOverlay.addEventListener('click', () => {
    popupForm.classList.remove('active');
    popupOverlay.classList.remove('active');
});
//close form when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupForm.classList.remove('active');
        popupOverlay.classList.remove('active');
    }
});
// Profile picture update and sign-out
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profilePic');
    const signOut = document.getElementById('signOut');

    if (profilePic) {
        profilePic.addEventListener('click', () => {
            // Trigger file input or any other method to update profile picture
            alert('Update profile picture functionality is not implemented yet.');
        });
    }

    if (signOut) {
        signOut.addEventListener('click', () => {
            // Implement sign-out functionality
            alert('Signed out successfully!');
            window.location.href = 'index.html';
        });
    }
});
