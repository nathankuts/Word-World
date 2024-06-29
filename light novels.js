document.addEventListener('DOMContentLoaded', () => {
    const publishForm = document.getElementById('publishForm');

    publishForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').innerHTML; // Save innerHTML for rich text

        // Use the mock API to save the chapter
        postPublishedChapter(title, content).then(response => {
            if (response.status === 200) {
                // Redirect to the published chapter page with the chapter ID
                window.location.href = `published-chapter.html?id=${response.chapter.id}`;
            } else {
                // Handle error
                alert('Failed to save chapter');
            }
        });
    });
});
