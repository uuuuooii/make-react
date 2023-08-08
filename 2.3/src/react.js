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
