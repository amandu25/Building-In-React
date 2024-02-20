function reactDOMrender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href); Here it causes issues because then we have to set for multiple attributes multiple times.
  // domElement.setAttribute("target", reactElement.props.target);
  // container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.querySelector("#root");

reactDOMrender(reactElement, mainContainer);
