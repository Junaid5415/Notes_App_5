const button = document.querySelector('#title .create');
const textDiv = document.querySelector('#text');

const save = document.querySelector('#title .save')

let p;

save.addEventListener('click', ()=>{
    saveData()
})

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
    const deleteImages = document.querySelectorAll('.p .delete');
    deleteImages.forEach((image, index) => {
        const paragraph = image.parentElement;
        deleteText(image, paragraph);
    });
}

button.addEventListener('click', () => {
    p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.classList.add('p');
    textDiv.appendChild(p);
    let image = document.createElement('img');
    image.classList.add('delete');
    image.src = 'images/delete.png';
    p.appendChild(image);
    deleteText(image, p);
});
showData();



