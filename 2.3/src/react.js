// 여기는 react가 제공하는 기능을 적는 곳입니다.

// Hook
const hooks = [];
let currentComponents = 0;

// react class
export class Component {
  constructor(props) {
    this.props = props;
  }
}

// react function
// 객체를 입력으로 받아서 DOM으로 변환하는 함수, DOM 만들기
// createDOM
export function createDOM(node) {
  // children 안에 children이 문자열이면 문자열 DOM을 만들어서 return 해주기
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  // 태그 만들기
  const element = document.createElement(node.tag);

  // node 안에 들어가 있는 props 속성 안에는 키가 여러개 있다.
  // 키를 Object.entries을 사용해서 문자열로 뺸다.
  Object.entries(node.props).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );

  // children 렌더링해주기
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

function useState(initValue) {
  let position = currentComponent - 1;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

//  tag, props, children 3개의 속성을 갖고 있는 객체를 반복 호출
export function createElement(tag, props, ...children) {
  props = props || {};

  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));

      // render 함수의 반환값은 jsx니까 render를 return 해준다.
      return instance.render();
    }

    // Hook 생성
    hooks[currentComponents] = null;
    currentComponents++;

    if (children.length > 0) {
      return tag(makeProps(props, children));
    } else {
      return tag(props);
    }
  }

  return { tag, props, children };
}

// UI에 보여주기에서  container.appendChild(createDOM(vdom)) 이 내부 구조를
// 굳이 알려줄 필요가 없으니까 react로 가져옴
// export function render(vdom, container) {
//   container.appendChild(createDOM(vdom));
// }

export const render = (function () {
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    // diff
    container.appendChild(createDOM(vdom));
  };
})();
