document.addEventListener('DOMContentLoaded', () => {
    const publishForm = document.getElementById('publishForm');

    publishForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').innerHTML; // Save innerHTML for rich text

        // Store the title and content in local storage
        localStorage.setItem('publishedTitle', title);
        localStorage.setItem('publishedContent', content);

        // Redirect to the published chapter page
        window.location.href = 'published-chapter.html';
    });
});
