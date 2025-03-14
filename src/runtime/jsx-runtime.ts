export const h = (
  element:
    | JSX.Element
    | ((props?: { [key: string]: any } | null) => JSX.Element),
  props: { [key: string]: any } | null,
  ...children: JSX.VNode[]
): JSX.Element => {
  switch (typeof element) {
    case "function":
      return element(props);
    case "string":
      return {
        element,
        props: props || {},
        children: children.flat(),
      };
    default:
      return element;
  }
};

const buildDomNodes = (vnode: JSX.Element) => {
  switch (typeof vnode) {
    case "object":
      const el = document.createElement(vnode.element);
      Object.entries(vnode.props || {}).forEach(([key, value]) => {
        if (key.startsWith("on") && typeof value === "function") {
          el.addEventListener(key.substring(2).toLowerCase(), value);
        } else {
          el.setAttribute(key, value);
        }
      });

      if (!vnode.children) {
        throw Error("Objects are not valid as a JSX child");
      }

      vnode.children.forEach((node) => {
        const child = buildDomNodes(node);
        if (child) el.appendChild(child);
      });
      return el;
    case "boolean":
      return null;
    default:
      return document.createTextNode(vnode.toString());
  }
};

export const render = (root: HTMLElement, element: JSX.Element) => {
  const nodes = buildDomNodes(element);
  if (nodes) root.replaceChildren(nodes);
};
