document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = parseInt(urlParams.get('id'));

    if (isNaN(chapterId)) {
        document.getElementById('chapterTitle').innerText = 'No Chapter Found';
        document.getElementById('chapterBody').innerText = 'Please publish a chapter first.';
        return;
    }

    // Use the mock API to get the published chapter
    getPublishedChapter(chapterId).then(response => {
        if (response.status === 200) {
            const chapter = response.data;

            if (chapter.title && chapter.content) {
                document.getElementById('chapterTitle').innerText = chapter.title;
                document.getElementById('chapterBody').innerHTML = chapter.content;
            } else {
                document.getElementById('chapterTitle').innerText = 'No Chapter Found';
                document.getElementById('chapterBody').innerText = 'Please publish a chapter first.';
            }
        } else {
            document.getElementById('chapterTitle').innerText = 'Error';
            document.getElementById('chapterBody').innerText = 'Failed to load chapter.';
        }
    });
});
