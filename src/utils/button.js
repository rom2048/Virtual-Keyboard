import Control from './control';
import button from '../app/styles/button.css';

class Button {
  constructor(parentNode, { small, shift, code }) {
    this.code = code;
    this.small = small;
    this.shift = shift;
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps/));
    this.button = new Control(parentNode, 'div', button.button__wrapper, '', ['code', this.code], this.isFnKey ? ['fn', 'true'] : ['fn', 'false']);
    if (this.isFnKey) {
      this.button.node.classList.add(button['key-fn']);
    }
    this.char = new Control(this.button.node, 'div', button.key, this.small);
    if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
      this.sub = new Control(this.button.node, 'div', button.sub, this.shift);
    } else {
      this.sub = new Control(this.button.node, 'div', button.sub);
    }
  }
}

export default Button;
