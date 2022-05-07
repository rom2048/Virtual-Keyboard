(()=>{"use strict";function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var o,n,s=[],a=!0,i=!1;try{for(l=l.call(e);!(a=(o=l.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}return s}}(e,l)||function(e,l){if(e){if("string"==typeof e)return t(e,l);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,l):void 0}}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,o=new Array(t);l<t;l++)o[l]=e[l];return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const n=function(){function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";l(this,t);var i=document.createElement(n);i.className=s,"object Object"===a?i.append(a):i.innerHTML=a,o&&(o===document.body?o.prepend(i):o.append(i));for(var r=arguments.length,c=new Array(r>4?r-4:0),f=4;f<r;f++)c[f-4]=arguments[f];c.length&&c.forEach((function(t){var l=e(t,2),o=l[0],n=l[1];""===n&&i.setAttribute(o,""),o.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)?i.setAttribute(o,n):i.dataset[o]=n})),this.node=i}var n,s;return n=t,(s=[{key:"destroy",value:function(){this.node.remove()}}])&&o(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),t}(),s={ru:[{small:"Caps Lock",shift:null,code:"CapsLock"},{small:"ё",shift:"Ё",code:"Backquote"},{small:"1",shift:"!",code:"Digit1"},{small:"2",shift:'"',code:"Digit2"},{small:"3",shift:"№",code:"Digit3"},{small:"4",shift:";",code:"Digit4"},{small:"5",shift:"%",code:"Digit5"},{small:"6",shift:":",code:"Digit6"},{small:"7",shift:"?",code:"Digit7"},{small:"8",shift:"*",code:"Digit8"},{small:"9",shift:"(",code:"Digit9"},{small:"0",shift:")",code:"Digit0"},{small:"-",shift:"_",code:"Minus"},{small:"=",shift:"+",code:"Equal"},{small:"Backspace",shift:null,code:"Backspace"},{small:"Del",shift:null,code:"Delete"},{small:"Tab ↹",shift:null,code:"Tab"},{small:"й",shift:"Й",code:"KeyQ"},{small:"ц",shift:"Ц",code:"KeyW"},{small:"у",shift:"У",code:"KeyE"},{small:"к",shift:"К",code:"KeyR"},{small:"е",shift:"Е",code:"KeyT"},{small:"н",shift:"Н",code:"KeyY"},{small:"г",shift:"Г",code:"KeyU"},{small:"ш",shift:"Ш",code:"KeyI"},{small:"щ",shift:"Щ",code:"KeyO"},{small:"з",shift:"З",code:"KeyP"},{small:"х",shift:"Х",code:"BracketLeft"},{small:"ъ",shift:"Ъ",code:"BracketRight"},{small:"Enter",shift:null,code:"Enter"},{small:"Caps Lock",shift:null,code:"CapsLock"},{small:"ф",shift:"Ф",code:"KeyA"},{small:"ы",shift:"Ы",code:"KeyS"},{small:"в",shift:"В",code:"KeyD"},{small:"а",shift:"А",code:"KeyF"},{small:"п",shift:"П",code:"KeyG"},{small:"р",shift:"Р",code:"KeyH"},{small:"о",shift:"О",code:"KeyJ"},{small:"л",shift:"Л",code:"KeyK"},{small:"д",shift:"Д",code:"KeyL"},{small:"ж",shift:"Ж",code:"Semicolon"},{small:"э",shift:"Э",code:"Quote"},{small:"\\",shift:"/",code:"Backslash"},{small:"Shift",shift:null,code:"ShiftLeft"},{small:"/",shift:"|",code:"IntlBackslash"},{small:"я",shift:"Я",code:"KeyZ"},{small:"ч",shift:"Ч",code:"KeyX"},{small:"с",shift:"С",code:"KeyC"},{small:"м",shift:"М",code:"KeyV"},{small:"и",shift:"И",code:"KeyB"},{small:"т",shift:"Т",code:"KeyN"},{small:"ь",shift:"Ь",code:"KeyM"},{small:"б",shift:"Б",code:"Comma"},{small:"ю",shift:"Ю",code:"Period"},{small:".",shift:",",code:"Slash"},{small:"Shift",shift:null,code:"ShiftRight"},{small:"Ctrl",shift:null,code:"ControlLeft"},{small:"⊞",shift:null,code:"MetaLeft"},{small:"Alt",shift:null,code:"AltLeft"},{small:" ",shift:null,code:"Space"},{small:"Alt",shift:null,code:"AltRight"},{small:"▤",shift:null,code:"ContextMenu"},{small:"Ctrl",shift:null,code:"ControlRight"},{small:"&larr;",shift:null,code:"ArrowLeft"},{small:"&uarr;",shift:null,code:"ArrowUp"},{small:"&darr;",shift:null,code:"ArrowDown"},{small:"&rarr;",shift:null,code:"ArrowRight"}],en:[{small:"`",shift:"~",code:"Backquote"},{small:"1",shift:"!",code:"Digit1"},{small:"2",shift:"@",code:"Digit2"},{small:"3",shift:"#",code:"Digit3"},{small:"4",shift:"$",code:"Digit4"},{small:"5",shift:"%",code:"Digit5"},{small:"6",shift:"^",code:"Digit6"},{small:"7",shift:"&",code:"Digit7"},{small:"8",shift:"*",code:"Digit8"},{small:"9",shift:"(",code:"Digit9"},{small:"0",shift:")",code:"Digit0"},{small:"-",shift:"_",code:"Minus"},{small:"=",shift:"+",code:"Equal"},{small:"Backspace",shift:null,code:"Backspace"},{small:"Del",shift:null,code:"Delete"},{small:"Tab ↹",shift:null,code:"Tab"},{small:"q",shift:"Q",code:"KeyQ"},{small:"w",shift:"W",code:"KeyW"},{small:"e",shift:"E",code:"KeyE"},{small:"r",shift:"R",code:"KeyR"},{small:"t",shift:"T",code:"KeyT"},{small:"y",shift:"Y",code:"KeyY"},{small:"u",shift:"U",code:"KeyU"},{small:"i",shift:"I",code:"KeyI"},{small:"o",shift:"O",code:"KeyO"},{small:"p",shift:"P",code:"KeyP"},{small:"[",shift:"{",code:"BracketLeft"},{small:"]",shift:"}",code:"BracketRight"},{small:"Enter",shift:null,code:"Enter"},{small:"Caps Lock",shift:null,code:"CapsLock"},{small:"a",shift:"A",code:"KeyA"},{small:"s",shift:"S",code:"KeyS"},{small:"d",shift:"D",code:"KeyD"},{small:"f",shift:"F",code:"KeyF"},{small:"g",shift:"G",code:"KeyG"},{small:"h",shift:"H",code:"KeyH"},{small:"j",shift:"J",code:"KeyJ"},{small:"k",shift:"K",code:"KeyK"},{small:"l",shift:"L",code:"KeyL"},{small:";",shift:":",code:"Semicolon"},{small:"'",shift:'"',code:"Quote"},{small:"\\",shift:"|",code:"Backslash"},{small:"Shift",shift:null,code:"ShiftLeft"},{small:"<",shift:">",code:"IntlBackslash"},{small:"z",shift:"Z",code:"KeyZ"},{small:"x",shift:"X",code:"KeyX"},{small:"c",shift:"C",code:"KeyC"},{small:"v",shift:"V",code:"KeyV"},{small:"b",shift:"B",code:"KeyB"},{small:"n",shift:"N",code:"KeyN"},{small:"m",shift:"M",code:"KeyM"},{small:",",shift:"<",code:"Comma"},{small:".",shift:">",code:"Period"},{small:"/",shift:"?",code:"Slash"},{small:"Shift",shift:null,code:"ShiftRight"},{small:"Ctrl",shift:null,code:"ControlLeft"},{small:"⊞",shift:null,code:"MetaLeft"},{small:"Alt",shift:null,code:"AltLeft"},{small:" ",shift:null,code:"Space"},{small:"Alt",shift:null,code:"AltRight"},{small:"▤",shift:null,code:"ContextMenu"},{small:"Ctrl",shift:null,code:"ControlRight"},{small:"&larr;",shift:null,code:"ArrowLeft"},{small:"&uarr;",shift:null,code:"ArrowUp"},{small:"&darr;",shift:null,code:"ArrowDown"},{small:"&rarr;",shift:null,code:"ArrowRight"}]},a="l8CkofVxkwWCMnRRyzzf",i="N6stnBy0voqTIC8J6l6P",r="jZh6X_x40NNl_b_hl1ek";function c(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,l){return t&&c(e.prototype,t),l&&c(e,l),Object.defineProperty(e,"prototype",{writable:!1}),e}const h=f((function e(t,l){var o=l.small,s=l.shift,a=l.code;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.code=a,this.small=o,this.shift=s,this.isFnKey=Boolean(o.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps/)),this.button=new n(t,"div","JkH9d3mmHFKi8HRupvWM","",["code",this.code],this.isFnKey?["fn","true"]:["fn","false"]),this.isFnKey&&this.button.node.classList.add("EqWIFAXV7eS3HQzkpCAB"),this.char=new n(this.button.node,"div","k3SCwsxYVb1cKKa8k5HA",this.small),s&&s.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)?this.sub=new n(this.button.node,"div",i,this.shift):this.sub=new n(this.button.node,"div",i)}));function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}function g(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}const b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(f,e);var t,l,o,i,c=(o=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(o);if(i){var l=K(this).constructor;e=Reflect.construct(t,arguments,l)}else e=t.apply(this,arguments);return y(this,e)});function f(e,t){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),g(p(l=c.call(this,e,"main","CJiD02AxoGQj2poNZXoJ")),"handleEvent",(function(e){var t=e.code,o=e.type,n=l.keyButtons.find((function(e){return e.code===t}));if(n)if(l.textarea.node.focus(),o.match(/keydown|mousedown/)){if(o.match(/mouse/)||e.preventDefault(),t.match(/Shift/)&&(l.shiftKey=!0),l.shiftKey&&l.switchUpperCase(!0),t.match(/Control|Alt|Caps/)&&e.repeat)return;t.match(/Control/)&&(l.ctrKey=!0),t.match(/Alt/)&&(l.altKey=!0),l.ctrKey&&l.shiftKey&&l.switchLanguage(),n.button.node.classList.add(r),t.match(/Caps/)&&!l.isCaps?(l.isCaps=!0,l.switchUpperCase(!0)):t.match(/Caps/)&&l.isCaps&&(l.isCaps=!1,l.switchUpperCase(!1),n.button.node.classList.remove(r)),l.isCaps?l.isCaps&&(l.shiftKey?l.print(n,n.sub.node.innerHTML?n.shift:n.small):l.print(n,n.sub.node.innerHTML?n.small:n.shift)):l.print(n,l.shiftKey?n.shift:n.small),l.keyPressed[n.code]=n}else o.match(/keyup|mouseup/)&&(t.match(/Shift/)&&(l.shiftKey=!1,l.switchUpperCase(!1)),t.match(/Control/)&&(l.ctrKey=!1),t.match(/Alt/)&&(l.altKey=!1),t.match(/Caps/)||n.button.node.classList.remove(r))})),g(p(l),"switchUpperCase",(function(e){e?l.keyButtons.forEach((function(e){e.isFnKey||!l.isCaps||l.shiftKey||e.sub.node.innerHTML?!e.isFnKey&&l.isCaps&&l.shiftKey?e.char.node.innerHTML=e.small:e.isFnKey||e.sub.node.innerHTML||(e.char.node.innerHTML=e.shift):e.char.node.innerHTML=e.shift})):l.keyButtons.forEach((function(e){e.sub.node.innerHTML&&!e.isFnKey?l.isCaps?l.isCaps||(e.char.node.innerHTML=e.shift):e.char.node.innerHTML=e.small:e.isFnKey||(l.isCaps?e.char.node.innerHTML=e.shift:e.char.node.innerHTML=e.small)}))})),g(p(l),"switchLanguage",(function(){var e,t=Object.keys(s).find((function(e){return e!==l.keyBoardWrapper.node.dataset.language}));l.keyBase=s[t],l.keyBoardWrapper.node.dataset.language=t,e=t,window.localStorage.setItem("keyboardLang",JSON.stringify(e)),l.keyButtons.forEach((function(e){var t=l.keyBase.find((function(t){return t.code===e.code}));t&&(e.shift=t.shift,e.small=t.small,t.shift&&t.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)?e.sub.node.innerHTML=t.shift:e.sub.node.innerHTML="",e.char.node.innerHTML=t.small)})),l.isCaps&&l.switchUpperCase(!0)})),g(p(l),"print",(function(e,t){var o=l.textarea.node.selectionStart,n=l.textarea.node.value.slice(0,o),s=l.textarea.node.value.slice(o),a={Tab:function(){l.textarea.node.value="".concat(n,"\t").concat(s),o+=1},ArrowLeft:function(){o=o-1>=0?o-1:0},ArrowRight:function(){o+=1},ArrowUp:function(){var e=l.textarea.node.value.slice(0,o).match(/(\n).*$(?!\1)/g)||[[1]];o-=e[0].length},ArrowDown:function(){var e=l.textarea.node.value.slice(o).match(/^.*(\n).*(?!\1)/)||[[1]];o+=e[0].length},Enter:function(){l.textarea.node.value="".concat(n,"\n").concat(s),o+=1},Delete:function(){l.textarea.node.value="".concat(n).concat(s.slice(1))},Backspace:function(){l.textarea.node.value="".concat(n.slice(0,-1)).concat(s),o-=1},Space:function(){l.textarea.node.value="".concat(n," ").concat(s),o+=1}};a[e.code]?a[e.code]():e.isFnKey||(o+=1,l.textarea.node.value="".concat(n).concat(t||"").concat(s)),l.textarea.node.setSelectionRange(o,o)})),l.keyBase=s[t],l.container=new n(l.node,"div","PS5W5euXVx59twZZGCi3"),l.title=new n(l.container.node,"h1","mJaV3r7Qvu4aGhGD7gBR","RSS Virtual Keyboard"),l.operationSystem=new n(l.container.node,"p",a,"Created on Windows"),l.swithLanguageCombination=new n(l.container.node,"p",a,"Press Ctrl + Shift to switch language"),l.textarea=new n(l.container.node,"textarea","GcQ09rMS75po3ugiLCsH","",["rows",5],["cols",50],["spellcheck",!0],["autocorrect","on"],["placeholder","start typing!"]),l.keyBoardWrapper=new n(l.container.node,"div","woJMz7ZGAiLj7K7Tdyfg","",["language",t]),l.keyPressed={},l.isCaps=!1,l}return t=f,(l=[{key:"generateKeyboard",value:function(e){var t=this;this.keyButtons=[],this.rowsOrder=e.forEach((function(e){var l=new n(t.keyBoardWrapper.node,"div","Fv6sY2e9UNjaOnZcWqY5");e.forEach((function(e){var o=t.keyBase.find((function(t){return t.code===e}));if(o){var n=new h(l.node,o);t.keyButtons.push(n)}}))})),window.addEventListener("keydown",this.handleEvent),window.addEventListener("keyup",this.handleEvent),this.keyBoardWrapper.onmousedown=function(){},this.keyBoardWrapper.onmouseup=function(){}}}])&&u(t.prototype,l),Object.defineProperty(t,"prototype",{writable:!1}),f}(n);var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return JSON.parse(window.localStorage.getItem(e)||t)}("keyboardLang",'"en"');new b(document.body,w).generateKeyboard([["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ArrowUp","Delete"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ContextMenu","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]])})();