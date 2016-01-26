// 当窗口页面加载时，渲染 App 组件
const App = require("./components/App");
const React = require("react");

window.onload = () => {
  React.render(<App/>,document.querySelector("#root"));
}