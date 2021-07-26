import { createElement } from 'lwc';
import MyApp from 'my/app';
const app = createElement('my-app', { is: MyApp });
document.querySelector('#main').appendChild(app);