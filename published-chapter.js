document.addEventListener('DOMContentLoaded', () => {
    const chapterTitle = document.getElementById('chapterTitle');
    const chapterBody = document.getElementById('chapterBody');
    const nextChapter = document.getElementById('nextChapter');

    // Retrieve from local storage
    const title = localStorage.getItem('publishedTitle');
    const content = localStorage.getItem('publishedContent');

    // Display content and title
    chapterTitle.textContent = title;
    chapterBody.innerHTML = content;  // Use innerHTML to preserve formatting

    // Handle next chapter button click
    nextChapter.addEventListener('click', () => {
        // Load next chapterBody
        alert('not yet implemented');
    });
});
