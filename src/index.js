/* @jsx createElement */
function renderElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (node === undefined) return;

  const $el = document.createElement(node.type);

  node.children.map(renderElement).forEach((element) => {
    $el.appendChild(element);
  });

  return $el;
}

function render(vdom, container) {
  container.appendChild(renderElement(vdom));
}

function createElement(type, props, ...children) {
  if (typeof type === "function") {
    return type.apply(null, [props, ...children]);
  }
  return { type, props, children };
}

function App() {
  return (
    <div>
      <h1>메가테라 프론트엔드</h1>
      <h2>안녕하세요</h2>
    </div>
  );
}

render(<App />, document.getElementById("root"));
