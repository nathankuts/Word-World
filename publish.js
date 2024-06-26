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
// Form validation and redirection after signup
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
//Implement Animation between sections
document.addEventListener('DOMContentLoaded', function() {
    const lightNovelsSection = document.querySelectorAll('.teasers')[0];
    const comicsSection = document.querySelectorAll('.teasers')[1];
    const publishButton = document.getElementById('signupButton');
    let animationInterval;
    let publishClickCount = 0;

    function startAnimation() {
        lightNovelsSection.classList.add('highlight');
        comicsSection.classList.remove('highlight');

        animationInterval = setInterval(() => {
            if (lightNovelsSection.classList.contains('highlight')) {
                lightNovelsSection.classList.remove('highlight');
                comicsSection.classList.add('highlight');
            } else {
                lightNovelsSection.classList.add('highlight');
                comicsSection.classList.remove('highlight');
            }
        }, 3000);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
        lightNovelsSection.classList.remove('highlight');
        comicsSection.classList.remove('highlight');
    }

    function highlightSection() {
        publishClickCount++;
        if (publishClickCount % 2 !== 0) {
            lightNovelsSection.classList.add('highlight-novel', 'zoom');
            comicsSection.classList.remove('highlight-comics', 'zoom');
        } else {
            comicsSection.classList.add('highlight-comics', 'zoom');
            lightNovelsSection.classList.remove('highlight-novel', 'zoom');
        }
    }

    lightNovelsSection.addEventListener('mouseover', stopAnimation);
    comicsSection.addEventListener('mouseover', stopAnimation);

    lightNovelsSection.addEventListener('mouseout', startAnimation);
    comicsSection.addEventListener('mouseout', startAnimation);

    publishButton.addEventListener('click', highlightSection);

    startAnimation();
});
document.getElementById('publishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const publishMessage = document.getElementById('publishMessage');
    
    // Store the new work locally (In a real application, this should be sent to the server)
    let newWorks = JSON.parse(localStorage.getItem('newWorks')) || [];
    newWorks.push({ title: title, content: content, link: 'light novels.html' });
    localStorage.setItem('newWorks', JSON.stringify(newWorks));
    
    // Display success message
    publishMessage.textContent = 'Chapter published successfully!';
    publishMessage.classList.add('success');
    
    // Clear the form
    document.getElementById('publishForm').reset();
    
    //Notify script.js to update notice board
    window.dispatchEvent(new Event('newPublication'));
});

document.getElementById('nextChapterButton').addEventListener('click', function() {
    window.location.href = 'publish-chapter.html';
});
