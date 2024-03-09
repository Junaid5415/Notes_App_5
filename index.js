const button = document.querySelector('#title button');
const textDiv = document.querySelector('#text');

let p;

function deleteText(image, paragraph) {
    image.addEventListener('click', () => {
        if (paragraph) {
            paragraph.style.transition = 'all 800ms';
            paragraph.style.transform = 'translateX(150vw)';
            setTimeout(() => {
                textDiv.removeChild(paragraph);
                saveData();
            }, 500);
        }
    });
}

function saveData() {
    localStorage.setItem('item', textDiv.innerHTML);
}

function showData() {
    textDiv.innerHTML = localStorage.getItem('item');
    // Add event listener for delete function after loading content
    const deleteImages = document.querySelectorAll('.p .delete');
    console.log(deleteImages);

    deleteImages.forEach((image, index) => {
        const paragraph = image.parentElement;
        deleteText(image, paragraph);
        saveData()
    });
}

button.addEventListener('click', () => {
    p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.classList.add('p');
    textDiv.appendChild(p);

    let image = document.createElement('img');
    image.classList.add('delete'); // Make sure the image has the correct class
    image.src = 'images/delete.png';
    p.appendChild(image);

    deleteText(image, p);
    saveData();
    showData();
});;    
showData();
