class Control {
  constructor(parentNode = null, tagName = 'div', className = '', content = '', ...dataAttr) {
    const element = document.createElement(tagName);
    element.className = className;
    if (content === 'object Object') {
      element.append(content);
    } else {
      element.innerHTML = content;
    }
    if (parentNode) {
      if (parentNode === document.body) {
        parentNode.prepend(element);
      } else {
        parentNode.append(element);
      }
    }
    if (dataAttr.length) {
      dataAttr.forEach(([attrName, attrValue]) => {
        if (attrValue === '') element.setAttribute(attrName, '');
        if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
          element.setAttribute(attrName, attrValue);
        } else {
          element.dataset[attrName] = attrValue;
        }
      });
    }

    this.node = element;
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;
