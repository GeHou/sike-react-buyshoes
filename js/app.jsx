// 当窗口页面加载时，渲染 App 组件
const App = require("./components/App");

window.onload = () => {
  React.render(<App/>,document.querySelector("#root"));
}