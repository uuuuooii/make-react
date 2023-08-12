/* @jsx createElement */
import { createDOM, render, createElement } from './react';

function Title() {
  return <h1>React 만들기</h1>;
}

const vdom = (
  <p>
    <Title />
    <ul>
      <li style='color: red'>첫 번째 아이템</li>
      <li style='color: blue'>두 번째 아이템</li>
      <li style='color: green'>세 번째 아이템</li>
    </ul>
  </p>
);

console.log(vdom);
// UI에 보여주기
render(vdom, document.querySelector('#root'));
