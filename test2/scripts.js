document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button clicked!');
});

const draggable = document.getElementById('draggable');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    alert('Dropped: ' + data);
});


