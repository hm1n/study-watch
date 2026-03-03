/** @format */

import './style/reset.css';
import './style/style.css';
import { render as watchRender } from './components/watch.js';
import { render as dateRender } from './components/date.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <div>
    <header>
      <h3 id="title">인프런 작심삼일 챌린지 🌱</h3>
    </header>
    <main class="container">
      <div id="date"></div>
      <section id="watch"></section>
    </main>
  </div>
`;

const dateContainer = document.querySelector('#date');
const watchContainer = document.querySelector('#watch');
dateRender(dateContainer);
watchRender(watchContainer);
