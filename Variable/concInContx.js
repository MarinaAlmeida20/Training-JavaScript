const button = document.querySelector('button')

button.onclick = () => {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you');
}