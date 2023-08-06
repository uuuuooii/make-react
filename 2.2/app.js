// html을 객체로 만들고 -> 객체를 DOM으로 만든다

// 1. 객체(가짜 DOM)
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
          props: {},
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

// 2. 객체를 입력으로 받아서 DOM으로 변환하는 함수, DOM 만들기
// createDOM

export const createDOM = (node) => {
  // children 안에 children이 문자열이면 문자열 DOM을 만들어서 return 해주기
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  // 태그 만들기
  const element = document.createElement(node.tag);

  // children 렌더링해주기
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
};

// 3. UI에 보여주기
document.querySelector('#root').appendChild(createDOM(vdom));
