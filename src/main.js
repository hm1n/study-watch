/** @format */

import './style/reset.css';
import './style/style.css';
import { render as watchRender } from './components/watch.js';
import { render as dateRender } from './components/date.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="container">
    <h3 id="title">인프런 작심삼일 챌린지 🌱</h3>
    <div id="date"></div>
    <section id="watch"></section>
  </main>
  <footer>
    <div>🌱 인프런 작심삼일 챌린지를 위한 스탑워치</div>
    <div>Background Image from
      <a href="https://www.inflearn.com/challenge/inf-challenge-202603-%EB%9E%9C%EB%8D%A4%EC%B1%8C%EB%A6%B0%EC%A7%80/dashboard?cid=340666" target="_blank" rel="noopener noreferrer">[인프런] 3월 무한 작심삼일 챌린지 - 공부한 만큼 상금이 커져요!</a>
    </div>
    <div>© 2026 Study Watch • Made for 인프런 작심삼일 챌린지</div>
  </footer>
`;

const dateContainer = document.querySelector('#date');
const watchContainer = document.querySelector('#watch');
dateRender(dateContainer);
watchRender(watchContainer);
