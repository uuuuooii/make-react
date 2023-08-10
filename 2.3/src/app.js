import { createDOM, render } from './react';
// html을 객체로 만들고 -> 객체를 DOM으로 만든다

// 객체(가짜 DOM)
export const vdom = {
  tag: 'p',
  // 배열은 이름을 가질 수 없으니까 객체로
  props: {},
  // 자식 요소가 n개 있을 수 있으니까 배열
  children: [
    {
      tag: 'h1',
      props: {},
      children: ['React 만들기'],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {
            style: 'color: red',
          },
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: {
            style: 'color: blue',
          },
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: {
            style: 'color: green',
          },
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

// UI에 보여주기
render(vdom, document.querySelector('#root'));
