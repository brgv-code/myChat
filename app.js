const clipboard = new ClipboardJS('#link-btn');
const { hash } = window.location;

const msg = atob(hash.replace('#',''));
if(msg){
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#msg-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = msg;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector("#msg-form").classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input = document.querySelector('#msg-input');
    const encrypted = btoa(input.value);

    document.querySelector('#link-input').value = `${window.location}#${encrypted}`;
});

