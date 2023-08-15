/* @jsx createElement */
import { render, createElement, Component } from './react';

// react class
class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

// react function
function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title>React 만들기</Title>
    <ul>
      <Item color='red'>첫 번째 아이템</Item>
      <Item color='blue'>두 번째 아이템</Item>
      <Item color='green'>세 번째 아이템</Item>
    </ul>
  </p>
);

// UI에 보여주기
render(<App />, document.querySelector('#root'));
