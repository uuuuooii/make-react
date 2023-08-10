import { createDOM, render, createElement } from './react';
// html을 객체로 만들고 -> 객체를 DOM으로 만든다

// 객체(가짜 DOM)
const vdom = createElement(
  'p',
  {},
  createElement('h1', {}, 'React 만들기'),
  createElement(
    'ul',
    {},
    createElement('li', { style: 'color: red' }, '첫 번째 아이템'),
    createElement('li', { style: 'color: blue' }, '두 번째 아이템'),
    createElement('li', { style: 'color: green' }, '세 번째 아이템')
  )
);

console.log(vdom);
// UI에 보여주기
render(vdom, document.querySelector('#root'));
