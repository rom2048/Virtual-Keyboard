import Control from "../utils/control";
import layouts from "./layouts/layouts";
import style from './styles/app.css';
import buttonCSS from './styles/button.css';
import { set } from "./storage/storage";
import Button from "../utils/button";

class App extends Control {
    constructor(parentNode, languageCode){
        super(parentNode, 'main', style["main"]);
        this.keyBase = layouts[languageCode];
        this.container = new Control(this.node, 'div', style["container"]);
        this.title = new Control(this.container.node, 'h1', style["h1"], 'RSS Virtual Keyboard');
        new Control(this.container.node, 'p', style["description"], 'Created on Windows' );
        new Control(this.container.node, 'p', style["description"], 'Press Ctrl + Shift to switch language' );
        this.textarea = new Control(this.container.node, 'textarea', style["textarea"], '',
            ["rows", 5],
            ["cols", 50],
            ["spellcheck", true],
            ["autocorrect", "on"],
            ["placeholder", "start typing!"]
        );
        this.keyBoardWrapper = new Control(this.container.node, 'div', style['keyboard-container'], '', ['language', languageCode]);
        this.keyPressed = {};
        this.isCaps = false;
    }

    generateKeyboard(rowsOrder) {
        this.keyButtons = [];
        this.rowsOrder = rowsOrder.forEach((row, i) => {
            const rowElement = new Control(this.keyBoardWrapper.node, 'div', style['keyboard-row']);
            row.forEach(code => {
                const btnObj = this.keyBase.find((key) => key.code === code);
                if (btnObj) {
                    const keyButton = new Button(rowElement.node, btnObj);
                    this.keyButtons.push(keyButton);
                }
            })
        });
        window.addEventListener("keydown", this.handleEvent);
        window.addEventListener("keyup", this.handleEvent);
        this.keyBoardWrapper.onmousedown = () => {console.log('mouse down')};
        this.keyBoardWrapper.onmouseup = () => {console.log('mouse up')};
    }

    handleEvent = (e) => {
        const { code, type } = e;
        const btnObj = this.keyButtons.find((key) => key.code === code);
        if (!btnObj) return;
        this.textarea.node.focus();
        //keydown 
        if (type.match(/keydown|mousedown/)) {
            if (!type.match(/mouse/)) e.preventDefault();
            if (code.match(/Shift/)) this.shiftKey = true;
            if (code.match(/Control|Alt|Caps/) && e.repeat) return;
            if (code.match(/Control/)) this.ctrKey = true;
            if (code.match(/Alt/)) this.altKey = true;
            if (this.ctrKey && this.shiftKey) this.switchLanguage();
            btnObj.button.node.classList.add(buttonCSS["active"]);
            // Caps Lock
            if (code.match(/Caps/) && !this.isCaps) {
                this.isCaps = true;
            } else if (code.match(/Caps/) && this.isCaps) {
                this.isCaps = false;
                btnObj.button.node.classList.remove(buttonCSS['active']);
            }
            // sub or default char
            if (!this.isCaps) {
              this.print(btnObj, this.shiftKey ? btnObj.shift : btnObj.small)
            } else if (this.isCaps) {
                //caps on - check shift
                if (this.shiftKey){
                } else {
                    //shift off
                }
            }
            this.keyPressed[btnObj.code] = btnObj;
        } else if (type.match(/keyup|mouseup/)) {
            if (code.match(/Shift/)) this.shiftKey = false;
            if (code.match(/Control/)) this.ctrKey = false;
            if (code.match(/Alt/)) this.altKey = false;
            if (!code.match(/Caps/)) btnObj.button.node.classList.remove(buttonCSS['active']);
        }
    }
    switchUpperCase = (isTrue) => {
      if (isTrue) {
        this.keyButtons.forEach(btn => {
          if (!btn.isFnKey && this.isCaps && !this.shiftKey && !btn.sub.node.innerHTML){
            btn.char.node.innerHTML = btn.shift;
          }
        })
      }
    }

    switchLanguage = () => {
        const layoutAbbr = Object.keys(layouts); // ['ru', 'en']
        let nextLanguage = layoutAbbr.find(lang => lang !== this.keyBoardWrapper.node.dataset.language);
        this.keyBase = layouts[nextLanguage]; //switch language layout
        this.keyBoardWrapper.node.dataset.language = nextLanguage;
        set('keyboardLang', nextLanguage);    
        this.keyButtons.forEach((button) => {
            const btnObj = this.keyBase.find((key) => key.code === button.code);
            if (!btnObj) return;
            button.shift = btnObj.shift;
            button.small = btnObj.small;
            if (btnObj.shift && btnObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
                button.sub.node.innerHTML = btnObj.shift;
            } else {
                button.sub.node.innerHTML = '';
            }
            button.char.node.innerHTML = btnObj.small;
        });
    }

    print = (btnObj, symbol ) => {
        let cursorPos = this.textarea.node.selectionStart;
        const left = this.textarea.node.value.slice(0, cursorPos);
        const right = this.textarea.node.value.slice(cursorPos);
        const textHandlers = {
          Tab: () => {
            this.textarea.node.value = `${left}\t${right}`;
            cursorPos += 1;
          },
          ArrowLeft: () => {
            cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
          },
          ArrowRight: () => {
            cursorPos += 1;
          },
          ArrowUp: () => {
            const positionFromLeft = this.textarea.node.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
            cursorPos -= positionFromLeft[0].length;
          },
          ArrowDown: () => {
            const positionFromLeft = this.textarea.node.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
            cursorPos += positionFromLeft[0].length;
          },
          Enter: () => {
            this.textarea.node.value = `${left}\n${right}`;
            cursorPos += 1;
          },
          Delete: () => {
            this.textarea.node.value = `${left}${right.slice(1)}`;
          },
          Backspace: () => {
            this.textarea.node.value = `${left.slice(0, -1)}${right}`;
            cursorPos -= 1;
          },
          Space: () => {
            this.textarea.node.value = `${left} ${right}`;
            cursorPos += 1;
          },
        };
        if (textHandlers[btnObj.code]) textHandlers[btnObj.code]();
        else if (!btnObj.isFnKey) {
          cursorPos += 1;
          this.textarea.node.value = `${left}${symbol || ''}${right}`;
        }
        this.textarea.node.setSelectionRange(cursorPos, cursorPos);
    }
}

export default App;