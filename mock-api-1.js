// JavaScript Document
const mockDatabase = {
    comics: []
};

// Mock function to simulate a POST request to save data
function postComic(title, imageSrc) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newComic = {
                id: mockDatabase.comics.length + 1,
                title: title,
                imageSrc: imageSrc
            };
            mockDatabase.comics.push(newComic);
            resolve({ status: 200, message: 'Comic saved successfully', comic: newComic });
        }, 500);
    });
}

// Mock function to simulate a GET request to fetch a comic by ID
function getComic(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const comic = mockDatabase.comics.find(com => com.id === id);
            if (comic) {
                resolve({ status: 200, data: comic });
            } else {
                resolve({ status: 404, message: 'Comic not found' });
            }
        }, 500);
    });
}
