document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = parseInt(urlParams.get('id'));

    if (isNaN(comicId)) {
        document.getElementById('chapterTitle').innerText = 'No Comic Found';
        document.getElementById('comicImage').style.display = 'none';
        return;
    }

    // Use the mock API to get the published comic
    getComic(comicId).then(response => {
        if (response.status === 200) {
            const comic = response.data;

            if (comic.title && comic.imageSrc) {
                document.getElementById('chapterTitle').innerText = comic.title;
                document.getElementById('comicImage').src = comic.imageSrc;
                document.getElementById('comicImage').style.display = 'block';
            } else {
                document.getElementById('chapterTitle').innerText = 'No Comic Found';
                document.getElementById('comicImage').style.display = 'none';
            }
        } else {
            document.getElementById('chapterTitle').innerText = 'Error';
            document.getElementById('comicImage').style.display = 'none';
        }
    });
});

document.getElementById('nextChapterButton').addEventListener('click', function() {
    // Logic to load the next chapter
    window.location.href = 'next_chapter.html'; // Update with actual next chapter URL
});
