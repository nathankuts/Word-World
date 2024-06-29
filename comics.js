document.getElementById('publishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const comicPage = document.getElementById('comicPage').files[0];

    if (comicPage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const comicImageSrc = event.target.result;

            // Use the mock API to save the comic
            postComic(title, comicImageSrc).then(response => {
                if (response.status === 200) {
                    // Redirect to the chapter page with the comic ID
                    window.location.href = `chapter.html?id=${response.comic.id}`;
                } else {
                    // Handle error
                    alert('Failed to save comic');
                }
            });
        };
        reader.readAsDataURL(comicPage);
    }
});
