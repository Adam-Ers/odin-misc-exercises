const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function buttonClick() {
    let inputValue = input.value;
    input.value = "";

    const newList = document.createElement('li');
    const newSpan = document.createElement('span');
    const newButton = document.createElement('button');

    newSpan.textContent = inputValue;
    newButton.textContent = "Delete";
    newButton.addEventListener('click', () => { newList.remove(); })

    newList.append(newSpan, newButton);
    ul.appendChild(newList);

    focus(input);
}

button.addEventListener('click', buttonClick);
input.addEventListener('keypress', e => { if (e.key === "Enter") { button.click(); } });