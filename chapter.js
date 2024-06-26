document.addEventListener('DOMContentLoaded', function() {
	// Retrieve the data from localStorage
	const title = localStorage.getItem('chapterTitle');
	const comicImageSrc = localStorage.getItem('comicImageSrc');
	
	// Set the data in the page
	if (title) {
		document.getElementById('chapterTitle').innerText = title;
	}
	if (comicImageSrc) {
		document.getElementById('comicImage').src = comicImageSrc;
		document.getElementById('comicImage').style.display = 'block';
	}
});

document.getElementById('nextChapterButton').addEventListener('click', function() {
	// Logic to load the next chapter
	 window.location.href = 'next_chapter.html'; // Update with actual next chapter URL
});
