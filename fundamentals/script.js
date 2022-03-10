const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!"
container.appendChild(para);

const head3 = document.createElement('h3');
head3.style.color = 'blue';
head3.textContent = "I'm a blue h3!"
container.appendChild(head3);

const bpdiv = document.createElement('div');
bpdiv.setAttribute('style', 'border: 1px solid black; background-color: pink')
container.appendChild(bpdiv);

const inDiv = document.createElement('h1');
inDiv.textContent = "I'm in a div";
bpdiv.appendChild(inDiv);

const pToo = document.createElement('p');
pToo.textContent = "ME TOO!";
bpdiv.appendChild(pToo);