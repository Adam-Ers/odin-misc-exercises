const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redp = document.createElement('p');
redp.style.color = 'red';
redp.innerText = "Hey, I'm red!"
container.appendChild(redp);

const blueh3 = document.createElement('h3');
blueh3.style.color = 'blue';
blueh3.innerText = "I'm a blue h3!"
container.appendChild(blueh3);

const divContainer = document.createElement('div');
divContainer.style.border = '2px solid black';
divContainer.style.backgroundColor = 'pink';

const divContainerh1 = document.createElement('h1');
divContainerh1.innerText = "I'm in a div."
divContainer.appendChild(divContainerh1);

const divContainerp = document.createElement('p');
divContainerp.innerText = "ME TOO!"
divContainer.appendChild(divContainerp);

container.appendChild(divContainer);

// Event stuff

const btn = document.querySelector('#btn');
btn.addEventListener('click', e => 
{
    alert("Hello, world?");
    console.log(e);
    console.log(e.target);
    e.target.style.backgroundColor = 'blue';
});

const buttons = document.querySelectorAll('#buttonContainer > button');

buttons.forEach( button =>
    {
        button.addEventListener('click', () => { alert(`This button is ID: ${button.id}`); })
    });