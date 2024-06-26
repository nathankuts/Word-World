document.getElementById('publishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const comicPage = document.getElementById('comicPage').files[0];

    if (comicPage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const comicImageSrc = event.target.result;

            // Save the data to localStorage (or send it to your backend)
            localStorage.setItem('chapterTitle', title);
            localStorage.setItem('comicImageSrc', comicImageSrc);

            // Redirect to chapter.html
            window.location.href = 'chapter.html';
        };
        reader.readAsDataURL(comicPage);
    }
});
