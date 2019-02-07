
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setAbility);

function setAbility() {
    var choice = select.value;

    if (choice === 'No') {
        para.textContent = 'Let us write for you!';
    } else if (choice === 'Somewhat') {
        para.textContent = 'Let us edit or proofread your work!';
    } else if (choice === 'Yes') {
        para.textContent = 'Good for you!';
    } else {
        para.textContent = '';
    }
}