// import './hello-world-button.css';
import './hello-world-button2.scss';
class helloWorldButton {
    buttonCssClass = 'hello-world-button';
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world!';
        button.classList.add(this.buttonCssClass);
        const body = document.querySelector('body');
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world clicked';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}
export default helloWorldButton;