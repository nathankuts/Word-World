const mockDatabase = {
    chapters: []
};

// Mock function to simulate a POST request to save data
function postPublishedChapter(title, content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newChapter = {
                id: mockDatabase.chapters.length + 1,
                title: title,
                content: content
            };
            mockDatabase.chapters.push(newChapter);
            resolve({ status: 200, message: 'Chapter saved successfully', chapter: newChapter });
        }, 500);
    });
}

// Mock function to simulate a GET request to fetch a chapter by ID
function getPublishedChapter(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const chapter = mockDatabase.chapters.find(ch => ch.id === id);
            if (chapter) {
                resolve({ status: 200, data: chapter });
            } else {
                resolve({ status: 404, message: 'Chapter not found' });
            }
        }, 500);
    });
}

// Mock function to simulate a GET request to fetch all chapters
function getAllChapters() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 200, data: mockDatabase.chapters });
        }, 500);
    });
}
