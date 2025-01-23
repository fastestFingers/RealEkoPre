import { h, r as ref, a3 as onUpdated, y as provide, w as watch, Q as nextTick$1, o as onMounted, K as onBeforeUnmount, a4 as onBeforeUpdate, c as computed } from "./index.61ed5618.js";
function isObject$2(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$2(target = {}, src = {}) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
      extend$2(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend$2(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend$2(win, ssrWindow);
  return win;
}
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, "__proto__", {
    get() {
      return proto;
    },
    set(value) {
      proto.__proto__ = value;
    }
  });
}
class Dom7 extends Array {
  constructor(items) {
    if (typeof items === "number") {
      super(items);
    } else {
      super(...items || []);
      makeReactive(this);
    }
  }
}
function arrayFlat(arr = []) {
  const res = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1)
      uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function qsa(selector, context) {
  if (typeof selector !== "string") {
    return [selector];
  }
  const a = [];
  const res = context.querySelectorAll(selector);
  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }
  return a;
}
function $(selector, context) {
  const window2 = getWindow();
  const document2 = getDocument();
  let arr = [];
  if (!context && selector instanceof Dom7) {
    return selector;
  }
  if (!selector) {
    return new Dom7(arr);
  }
  if (typeof selector === "string") {
    const html2 = selector.trim();
    if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
      let toCreate = "div";
      if (html2.indexOf("<li") === 0)
        toCreate = "ul";
      if (html2.indexOf("<tr") === 0)
        toCreate = "tbody";
      if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
        toCreate = "tr";
      if (html2.indexOf("<tbody") === 0)
        toCreate = "table";
      if (html2.indexOf("<option") === 0)
        toCreate = "select";
      const tempParent = document2.createElement(toCreate);
      tempParent.innerHTML = html2;
      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document2);
    }
  } else if (selector.nodeType || selector === window2 || selector === document2) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7)
      return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
function addClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    el.classList.add(...classNames);
  });
  return this;
}
function removeClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    el.classList.remove(...classNames);
  });
  return this;
}
function toggleClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  this.forEach((el) => {
    classNames.forEach((className) => {
      el.classList.toggle(className);
    });
  });
}
function hasClass(...classes2) {
  const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
  return arrayFilter(this, (el) => {
    return classNames.filter((className) => el.classList.contains(className)).length > 0;
  }).length > 0;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === "string") {
    if (this[0])
      return this[0].getAttribute(attrs);
    return void 0;
  }
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      this[i].setAttribute(attrs, value);
    } else {
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
function removeAttr(attr2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr2);
  }
  return this;
}
function transform(transform2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform2;
  }
  return this;
}
function transition$1(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
  }
  return this;
}
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  function handleLiveEvent(e) {
    const target = e.target;
    if (!target)
      return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector))
      listener.apply(target, eventData);
    else {
      const parents2 = $(target).parents();
      for (let k = 0; k < parents2.length; k += 1) {
        if ($(parents2[k]).is(targetSelector))
          listener.apply(parents2[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events2 = eventType.split(" ");
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events2.length; j += 1) {
        const event = events2[j];
        if (!el.dom7Listeners)
          el.dom7Listeners = {};
        if (!el.dom7Listeners[event])
          el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      for (j = 0; j < events2.length; j += 1) {
        const event = events2[j];
        if (!el.dom7LiveListeners)
          el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event])
          el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture)
    capture = false;
  const events2 = eventType.split(" ");
  for (let i = 0; i < events2.length; i += 1) {
    const event = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function trigger(...args) {
  const window2 = getWindow();
  const events2 = args[0].split(" ");
  const eventData = args[1];
  for (let i = 0; i < events2.length; i += 1) {
    const event = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      if (window2.CustomEvent) {
        const evt = new window2.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd$1(callback) {
  const dom = this;
  function fireCallBack(e) {
    if (e.target !== this)
      return;
    callback.call(this, e);
    dom.off("transitionend", fireCallBack);
  }
  if (callback) {
    dom.on("transitionend", fireCallBack);
  }
  return this;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const window2 = getWindow();
    const document2 = getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function styles() {
  const window2 = getWindow();
  if (this[0])
    return window2.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  const window2 = getWindow();
  let i;
  if (arguments.length === 1) {
    if (typeof props === "string") {
      if (this[0])
        return window2.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === "string") {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}
function each(callback) {
  if (!callback)
    return this;
  this.forEach((el, index2) => {
    callback.apply(el, [el, index2]);
  });
  return this;
}
function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}
function html(html2) {
  if (typeof html2 === "undefined") {
    return this[0] ? this[0].innerHTML : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html2;
  }
  return this;
}
function text(text2) {
  if (typeof text2 === "undefined") {
    return this[0] ? this[0].textContent.trim() : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text2;
  }
  return this;
}
function is(selector) {
  const window2 = getWindow();
  const document2 = getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === "undefined")
    return false;
  if (typeof selector === "string") {
    if (el.matches)
      return el.matches(selector);
    if (el.webkitMatchesSelector)
      return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector)
      return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  if (selector === document2) {
    return el === document2;
  }
  if (selector === window2) {
    return el === window2;
  }
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el)
        return true;
    }
    return false;
  }
  return false;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1)
        i += 1;
    }
    return i;
  }
  return void 0;
}
function eq(index2) {
  if (typeof index2 === "undefined")
    return this;
  const length = this.length;
  if (index2 > length - 1) {
    return $([]);
  }
  if (index2 < 0) {
    const returnIndex = length + index2;
    if (returnIndex < 0)
      return $([]);
    return $([this[returnIndex]]);
  }
  return $([this[index2]]);
}
function append(...els) {
  let newChild;
  const document2 = getDocument();
  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
function prepend(newChild) {
  const document2 = getDocument();
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === "string") {
      const tempDiv = document2.createElement("div");
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
      return $([]);
    }
    if (this[0].nextElementSibling)
      return $([this[0].nextElementSibling]);
    return $([]);
  }
  return $([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el)
    return $([]);
  while (el.nextElementSibling) {
    const next2 = el.nextElementSibling;
    if (selector) {
      if ($(next2).is(selector))
        nextEls.push(next2);
    } else
      nextEls.push(next2);
    el = next2;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }
      return $([]);
    }
    if (el.previousElementSibling)
      return $([el.previousElementSibling]);
    return $([]);
  }
  return $([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el)
    return $([]);
  while (el.previousElementSibling) {
    const prev2 = el.previousElementSibling;
    if (selector) {
      if ($(prev2).is(selector))
        prevEls.push(prev2);
    } else
      prevEls.push(prev2);
    el = prev2;
  }
  return $(prevEls);
}
function parent(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector))
          parents2.push(this[i].parentNode);
      } else {
        parents2.push(this[i].parentNode);
      }
    }
  }
  return $(parents2);
}
function parents(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    let parent2 = this[i].parentNode;
    while (parent2) {
      if (selector) {
        if ($(parent2).is(selector))
          parents2.push(parent2);
      } else {
        parents2.push(parent2);
      }
      parent2 = parent2.parentNode;
    }
  }
  return $(parents2);
}
function closest(selector) {
  let closest2 = this;
  if (typeof selector === "undefined") {
    return $([]);
  }
  if (!closest2.is(selector)) {
    closest2 = closest2.parents(selector).eq(0);
  }
  return closest2;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return $(foundElements);
}
function children(selector) {
  const children2 = [];
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;
    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children2.push(childNodes[j]);
      }
    }
  }
  return $(children2);
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode)
      this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition: transition$1,
  on,
  off,
  trigger,
  transitionEnd: transitionEnd$1,
  outerWidth,
  outerHeight,
  styles,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach((methodName) => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = "x") {
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m41;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[12]);
    else
      curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m42;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[13]);
    else
      curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1(...args) {
  const to = Object(args[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            supportsPassive = true;
          }
        });
        window2.addEventListener("testPassiveListener", null, opts);
      } catch (e) {
      }
      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return "ongesturestart" in window2;
    }()
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad)
      ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize({
  swiper,
  on: on2,
  emit
}) {
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el)
            return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("orientationchange");
  };
  on2("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on2("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  const observers = [];
  const window2 = getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on2("init", init);
  on2("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event) => {
      if (!self.eventsListeners[event])
        self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    function onceHandler(...args) {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsAnyListeners)
      return self;
    const index2 = self.eventsAnyListeners.indexOf(handler);
    if (index2 >= 0) {
      self.eventsAnyListeners.splice(index2, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    events2.split(" ").forEach((event) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index2) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index2, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    let events2;
    let data;
    let context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
  height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index2 = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  }
  swiper.virtualSize = -spaceBetween;
  if (rtl)
    slides.css({
      marginLeft: "",
      marginBottom: "",
      marginTop: ""
    });
  else
    slides.css({
      marginRight: "",
      marginBottom: "",
      marginTop: ""
    });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide2 = slides.eq(i);
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slide2.css("display") === "none")
      continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2[0]);
      const currentTransform = slide2[0].style.transform;
      const currentWebKitTransform = slide2[0].style.webkitTransform;
      if (currentTransform) {
        slide2[0].style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide2.outerWidth(true) : slide2.outerHeight(true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index2 % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index2 += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths)
        slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => {
      if (snap < 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded)
        swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index2) => {
    if (isVirtual) {
      return swiper.slides.filter((el) => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index2)[0];
    }
    return swiper.slides.eq(index2)[0];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || $([])).each((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index2 = swiper.activeIndex + i;
        if (index2 > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index2));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0)
    swiper.$wrapperEl.css("height", `${newHeight}px`);
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
function updateSlidesProgress(translate2 = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
  swiper.visibleSlides = $(swiper.visibleSlides);
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }
  activeSlide.addClass(params.slideActiveClass);
  if (params.loop) {
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  }
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === "undefined") {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (previousRealIndex !== realIndex) {
    swiper.emit("realIndexChange");
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide2 = $(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide2).attr("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    $wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index2 = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index2 !== "number" && typeof index2 !== "string") {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index2}] given.`);
  }
  if (typeof index2 === "string") {
    const indexAsNumber = parseInt(index2, 10);
    const isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
    }
    index2 = indexAsNumber;
  }
  const swiper = this;
  let slideIndex = index2;
  if (slideIndex < 0)
    slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate2 < swiper.translate && translate2 < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex)
        return false;
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed)
          return;
        if (e.target !== this)
          return;
        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index2 = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index2 === "string") {
    const indexAsNumber = parseInt(index2, 10);
    const isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
    }
    index2 = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index2;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return swiper;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return false;
    swiper.loopFix();
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index2 = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
  const snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index2 += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index2 -= swiper.params.slidesPerGroup;
    }
  }
  index2 = Math.max(index2, 0);
  index2 = Math.min(index2, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index2, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params,
    $wrapperEl
  } = swiper;
  const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);
  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = $(document2.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }
      slides = $selector.children(`.${params.slideClass}`);
    }
  }
  if (params.slidesPerView === "auto" && !params.loopedSlides)
    params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }
  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index2) => {
    const slide2 = $(el);
    slide2.attr("data-swiper-slide-index", index2);
  });
  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    const index2 = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index2)[0]);
    prependSlides.unshift(slides.eq(slides.length - index2 - 1)[0]);
  }
  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
function loopFix() {
  const swiper = this;
  swiper.emit("beforeLoopFix");
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr("data-swiper-slide-index");
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    if (el.assignedSlot)
      el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  let $targetEl = $(e.target);
  if (params.touchEventsTarget === "wrapper") {
    if (!$targetEl.closest(swiper.wrapperEl).length)
      return;
  }
  data.isTouchEvent = e.type === "touchstart";
  if (!data.isTouchEvent && "which" in e && e.which === 3)
    return;
  if (!data.isTouchEvent && "button" in e && e.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = $(eventPath[0]);
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0])
      return;
  }
  touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  if (e.type !== "touchstart") {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;
      if ($targetEl[0].nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && $(document2.activeElement).is(data.focusableElements) && document2.activeElement !== $targetEl[0]) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }
  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  if (data.isTouchEvent && e.type !== "touchmove")
    return;
  const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
  const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!$(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && document2.activeElement) {
    if (e.target === document2.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl)
    diff = -diff;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support: support2
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!support2.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document2[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document2[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  }
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params,
    support: support2
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  if (support2.touch && !dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base = "window", containerEl) {
  if (!breakpoints2 || base === "container" && !containerEl)
    return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support: support2
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "pointer-events": !support2.touch
  }, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(" "));
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(" "));
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window2 = getWindow();
  let image;
  function onReady() {
    if (callback)
      callback();
  }
  const isPicture = $(imageEl).parent("picture")[0];
  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window2.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    onReady();
  }
}
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find("img");
  function onReady() {
    if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
      return;
    if (swiper.imagesLoaded !== void 0)
      swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady)
        swiper.update();
      swiper.emit("imagesReady");
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
  }
}
var images = {
  loadImage,
  preloadImages
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: false,
  userAgent: null,
  url: null,
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  autoHeight: false,
  setWrapperSize: false,
  virtualTranslate: false,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  watchOverflow: true,
  roundLengths: false,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  uniqueNavElements: true,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  grabCursor: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  preloadImages: true,
  updateOnImagesReady: true,
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: true,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  rewind: false,
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: true,
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName])
      params[moduleParamName] = {
        enabled: false
      };
    extend$1(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
const extendedDefaults = {};
class Swiper$1 {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params)
      params = {};
    params = extend$1({}, params);
    if (el && !params.el)
      params.el = el;
    if (params.el && $(params.el).length > 1) {
      const swipers = [];
      $(params.el).each((containerEl) => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper$1(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend$1({}, defaults, allModulesParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    swiper.$ = $;
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      classNames: [],
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: true,
      isEnd: false,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      touchEvents: function touchEvents() {
        const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
        const desktop = ["pointerdown", "pointermove", "pointerup"];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: swiper.params.focusableElements,
        lastClickTime: now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: true,
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  enable() {
    const swiper = this;
    if (swiper.enabled)
      return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled)
      return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed)
      return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const updates = [];
    swiper.slides.each((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view = "current", exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate2();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate)
      swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
      return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(el) {
    const swiper = this;
    if (swiper.mounted)
      return true;
    const $el = $(el || swiper.params.el);
    el = $el[0];
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = $(el.shadowRoot.querySelector(getWrapperSelector()));
        res.children = (options) => $el.children(options);
        return res;
      }
      if (!$el.children) {
        return $($el).children(getWrapperSelector());
      }
      return $el.children(getWrapperSelector());
    };
    let $wrapperEl = getWrapper();
    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document2 = getDocument();
      const wrapper = document2.createElement("div");
      $wrapperEl = $(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
        $wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
      wrongRTL: $wrapperEl.css("display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized)
      return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false)
      return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    swiper.attachEvents();
    swiper.initialized = true;
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr("style");
      $wrapperEl.removeAttr("style");
      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper$1.prototype.__modules__)
      Swiper$1.prototype.__modules__ = [];
    const modules = Swiper$1.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper$1.installModule(m));
      return Swiper$1;
    }
    Swiper$1.installModule(module);
    return Swiper$1;
  }
}
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes2.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
const paramsList = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom"
];
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events2 = {};
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      if (splitEvents) {
        events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}
const calcLoopedSlides = (slides, swiperParams) => {
  let slidesPerViewParams = swiperParams.slidesPerView;
  if (swiperParams.breakpoints) {
    const breakpoint = Swiper$1.prototype.getBreakpoint(swiperParams.breakpoints);
    const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }
  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;
  if (loopedSlides > slides.length && swiperParams.loopedSlidesLimit) {
    loopedSlides = slides.length;
  }
  return loopedSlides;
};
function renderLoop(swiperRef, slides, swiperParams) {
  const modifiedSlides = slides.map((child, index2) => {
    if (!child.props)
      child.props = {};
    child.props.swiperRef = swiperRef;
    child.props["data-swiper-slide-index"] = index2;
    return child;
  });
  function duplicateSlide(child, index2, position) {
    if (!child.props)
      child.props = {};
    return h(child.type, {
      ...child.props,
      key: `${child.key}-duplicate-${index2}-${position}`,
      class: `${child.props.className || ""} ${swiperParams.slideDuplicateClass} ${child.props.class || ""}`
    }, child.children);
  }
  if (swiperParams.loopFillGroupWithBlank) {
    const blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankSlide = h("div", {
          class: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }
  if (swiperParams.slidesPerView === "auto" && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }
  const loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  const prependSlides = [];
  const appendSlides = [];
  for (let i = 0; i < loopedSlides; i += 1) {
    const index2 = i - Math.floor(i / modifiedSlides.length) * modifiedSlides.length;
    appendSlides.push(duplicateSlide(modifiedSlides[index2], i, "append"));
    prependSlides.unshift(duplicateSlide(modifiedSlides[modifiedSlides.length - index2 - 1], i, "prepend"));
  }
  if (swiperRef.value) {
    swiperRef.value.loopedSlides = loopedSlides;
  }
  return [...prependSlides, ...modifiedSlides, ...appendSlides];
}
function getChangedParams(swiperParams, oldParams, children2, oldChildren, getKey) {
  const keys = [];
  if (!oldParams)
    return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  if (children2 && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children2.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join(""))
      addKey("children");
    if (oldChildren.length !== children2.length)
      addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}
function getChildren(originalSlots, slidesRef, oldSlidesRef) {
  if (originalSlots === void 0) {
    originalSlots = {};
  }
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els)) {
      return;
    }
    els.forEach((vnode) => {
      const isFragment = typeof vnode.type === "symbol";
      if (slotName === "default")
        slotName = "container-end";
      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, "default");
      } else if (vnode.type && (vnode.type.name === "SwiperSlide" || vnode.type.name === "AsyncComponentWrapper")) {
        slides.push(vnode);
      } else if (slots[slotName]) {
        slots[slotName].push(vnode);
      }
    });
  };
  Object.keys(originalSlots).forEach((slotName) => {
    if (typeof originalSlots[slotName] !== "function")
      return;
    const els = originalSlots[slotName]();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return {
    slides,
    slots
  };
}
function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod])
      return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  updateParams.forEach((key) => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("children") && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized)
      thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (paginationEl)
      currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (scrollbarEl)
      currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (nextEl)
      currentParams.navigation.nextEl = nextEl;
    if (prevEl)
      currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  swiper.update();
}
function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData)
    return null;
  const style = swiperRef.value.isHorizontal() ? {
    [swiperRef.value.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((slide2, index2) => index2 >= virtualData.from && index2 <= virtualData.to).map((slide2) => {
    if (!slide2.props)
      slide2.props = {};
    if (!slide2.props.style)
      slide2.props.style = {};
    slide2.props.swiperRef = swiperRef;
    slide2.props.style = style;
    return h(slide2.type, {
      ...slide2.props
    }, slide2.children);
  });
}
const updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};
const Swiper = {
  name: "Swiper",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    wrapperTag: {
      type: String,
      default: "div"
    },
    modules: {
      type: Array,
      default: void 0
    },
    init: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: {
      type: Number,
      default: void 0
    },
    speed: {
      type: Number,
      default: void 0
    },
    cssMode: {
      type: Boolean,
      default: void 0
    },
    updateOnWindowResize: {
      type: Boolean,
      default: void 0
    },
    resizeObserver: {
      type: Boolean,
      default: void 0
    },
    nested: {
      type: Boolean,
      default: void 0
    },
    focusableElements: {
      type: String,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    height: {
      type: Number,
      default: void 0
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: void 0
    },
    userAgent: {
      type: String,
      default: void 0
    },
    url: {
      type: String,
      default: void 0
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: {
      type: Number,
      default: void 0
    },
    autoHeight: {
      type: Boolean,
      default: void 0
    },
    setWrapperSize: {
      type: Boolean,
      default: void 0
    },
    virtualTranslate: {
      type: Boolean,
      default: void 0
    },
    effect: {
      type: String,
      default: void 0
    },
    breakpoints: {
      type: Object,
      default: void 0
    },
    spaceBetween: {
      type: Number,
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: {
      type: Number,
      default: void 0
    },
    slidesPerGroup: {
      type: Number,
      default: void 0
    },
    slidesPerGroupSkip: {
      type: Number,
      default: void 0
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: void 0
    },
    centeredSlides: {
      type: Boolean,
      default: void 0
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: void 0
    },
    slidesOffsetBefore: {
      type: Number,
      default: void 0
    },
    slidesOffsetAfter: {
      type: Number,
      default: void 0
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: void 0
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: void 0
    },
    watchOverflow: {
      type: Boolean,
      default: void 0
    },
    roundLengths: {
      type: Boolean,
      default: void 0
    },
    touchRatio: {
      type: Number,
      default: void 0
    },
    touchAngle: {
      type: Number,
      default: void 0
    },
    simulateTouch: {
      type: Boolean,
      default: void 0
    },
    shortSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipesRatio: {
      type: Number,
      default: void 0
    },
    longSwipesMs: {
      type: Number,
      default: void 0
    },
    followFinger: {
      type: Boolean,
      default: void 0
    },
    allowTouchMove: {
      type: Boolean,
      default: void 0
    },
    threshold: {
      type: Number,
      default: void 0
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: void 0
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: void 0
    },
    uniqueNavElements: {
      type: Boolean,
      default: void 0
    },
    resistance: {
      type: Boolean,
      default: void 0
    },
    resistanceRatio: {
      type: Number,
      default: void 0
    },
    watchSlidesProgress: {
      type: Boolean,
      default: void 0
    },
    grabCursor: {
      type: Boolean,
      default: void 0
    },
    preventClicks: {
      type: Boolean,
      default: void 0
    },
    preventClicksPropagation: {
      type: Boolean,
      default: void 0
    },
    slideToClickedSlide: {
      type: Boolean,
      default: void 0
    },
    preloadImages: {
      type: Boolean,
      default: void 0
    },
    updateOnImagesReady: {
      type: Boolean,
      default: void 0
    },
    loop: {
      type: Boolean,
      default: void 0
    },
    loopAdditionalSlides: {
      type: Number,
      default: void 0
    },
    loopedSlides: {
      type: Number,
      default: void 0
    },
    loopedSlidesLimit: {
      type: Boolean,
      default: true
    },
    loopFillGroupWithBlank: {
      type: Boolean,
      default: void 0
    },
    loopPreventsSlide: {
      type: Boolean,
      default: void 0
    },
    rewind: {
      type: Boolean,
      default: void 0
    },
    allowSlidePrev: {
      type: Boolean,
      default: void 0
    },
    allowSlideNext: {
      type: Boolean,
      default: void 0
    },
    swipeHandler: {
      type: Boolean,
      default: void 0
    },
    noSwiping: {
      type: Boolean,
      default: void 0
    },
    noSwipingClass: {
      type: String,
      default: void 0
    },
    noSwipingSelector: {
      type: String,
      default: void 0
    },
    passiveListeners: {
      type: Boolean,
      default: void 0
    },
    containerModifierClass: {
      type: String,
      default: void 0
    },
    slideClass: {
      type: String,
      default: void 0
    },
    slideBlankClass: {
      type: String,
      default: void 0
    },
    slideActiveClass: {
      type: String,
      default: void 0
    },
    slideDuplicateActiveClass: {
      type: String,
      default: void 0
    },
    slideVisibleClass: {
      type: String,
      default: void 0
    },
    slideDuplicateClass: {
      type: String,
      default: void 0
    },
    slideNextClass: {
      type: String,
      default: void 0
    },
    slideDuplicateNextClass: {
      type: String,
      default: void 0
    },
    slidePrevClass: {
      type: String,
      default: void 0
    },
    slideDuplicatePrevClass: {
      type: String,
      default: void 0
    },
    wrapperClass: {
      type: String,
      default: void 0
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: void 0
    },
    observer: {
      type: Boolean,
      default: void 0
    },
    observeParents: {
      type: Boolean,
      default: void 0
    },
    observeSlideChildren: {
      type: Boolean,
      default: void 0
    },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: {
      type: Object,
      default: void 0
    },
    fadeEffect: {
      type: Object,
      default: void 0
    },
    flipEffect: {
      type: Object,
      default: void 0
    },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: {
      type: Object,
      default: void 0
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    lazy: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: {
      type: Object,
      default: void 0
    },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: {
      type: [Object],
      default: void 0
    },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "imagesReady", "init", "keyPress", "lazyImageLoad", "lazyImageReady", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
  setup(props, _ref) {
    let {
      slots: originalSlots,
      emit
    } = _ref;
    const {
      tag: Tag,
      wrapperTag: WrapperTag
    } = props;
    const containerClasses = ref("swiper");
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = ref(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = {
      value: []
    };
    const oldSlidesRef = {
      value: []
    };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const {
      params: swiperParams,
      passedParams
    } = getParams(props, false);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;
    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };
    swiperParams.onAny = function(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      emit(event, ...args);
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(swiper, classes2) {
        containerClasses.value = classes2;
      }
    });
    swiperRef.value = new Swiper$1(swiperParams);
    swiperRef.value.loopCreate = () => {
    };
    swiperRef.value.loopDestroy = () => {
    };
    if (swiperParams.loop) {
      swiperRef.value.loopedSlides = calcLoopedSlides(slidesRef.value, swiperParams);
    }
    if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
      swiperRef.value.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: (data) => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(swiperRef.value.params.virtual, extendWith);
      extend(swiperRef.value.originalParams.virtual, extendWith);
    }
    onUpdated(() => {
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      }
      const {
        passedParams: newPassedParams
      } = getParams(props, false);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c) => c.props && c.props.key);
      oldPassedParamsRef.value = newPassedParams;
      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }
      breakpointChanged.value = false;
    });
    provide("swiper", swiperRef);
    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    });
    onMounted(() => {
      if (!swiperElRef.value)
        return;
      mountSwiper({
        el: swiperElRef.value,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        paginationEl: paginationElRef.value,
        scrollbarEl: scrollbarElRef.value,
        swiper: swiperRef.value
      }, swiperParams);
      emit("swiper", swiperRef.value);
    });
    onBeforeUnmount(() => {
      if (swiperRef.value && !swiperRef.value.destroyed) {
        swiperRef.value.destroy(true, false);
      }
    });
    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }
      if (!swiperParams.loop || swiperRef.value && swiperRef.value.destroyed) {
        slides.forEach((slide2) => {
          if (!slide2.props)
            slide2.props = {};
          slide2.props.swiperRef = swiperRef;
        });
        return slides;
      }
      return renderLoop(swiperRef, slides, swiperParams);
    }
    return () => {
      const {
        slides,
        slots
      } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [slots["container-start"], h(WrapperTag, {
        class: "swiper-wrapper"
      }, [slots["wrapper-start"], renderSlides(slides), slots["wrapper-end"]]), needsNavigation(props) && [h("div", {
        ref: prevElRef,
        class: "swiper-button-prev"
      }), h("div", {
        ref: nextElRef,
        class: "swiper-button-next"
      })], needsScrollbar(props) && h("div", {
        ref: scrollbarElRef,
        class: "swiper-scrollbar"
      }), needsPagination(props) && h("div", {
        ref: paginationElRef,
        class: "swiper-pagination"
      }), slots["container-end"]]);
    };
  }
};
const SwiperSlide = {
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: {
      type: Object,
      required: false
    },
    zoom: {
      type: Boolean,
      default: void 0
    },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let eventAttached = false;
    const {
      swiperRef
    } = props;
    const slideElRef = ref(null);
    const slideClasses = ref("swiper-slide");
    function updateClasses(swiper, el, classNames) {
      if (el === slideElRef.value) {
        slideClasses.value = classNames;
      }
    }
    onMounted(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onBeforeUpdate(() => {
      if (eventAttached || !swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value)
        return;
      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== "swiper-slide") {
          slideClasses.value = "swiper-slide";
        }
      }
    });
    onBeforeUnmount(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.off("_slideClass", updateClasses);
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0 || slideClasses.value.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: slideClasses.value.indexOf("swiper-slide-duplicate") >= 0,
      isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0 || slideClasses.value.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0 || slideClasses.value.indexOf("swiper-slide-duplicate-next") >= 0
    }));
    provide("swiperSlide", slideData);
    return () => {
      return h(props.tag, {
        class: uniqueClasses(`${slideClasses.value}`),
        ref: slideElRef,
        "data-swiper-slide-index": props.virtualIndex
      }, props.zoom ? h("div", {
        class: "swiper-zoom-container",
        "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
      }, slots.default && slots.default(slideData.value)) : slots.default && slots.default(slideData.value));
    };
  }
};
export { $, Swiper as S, SwiperSlide as a, getDocument as g, nextTick as n };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLXNsaWRlLjhhMGM1OGRmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb203L2RvbTcuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZG9tLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9nZXQtc3VwcG9ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2dldC1kZXZpY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9nZXQtYnJvd3Nlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9tb2R1bGVzL3Jlc2l6ZS9yZXNpemUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMtZW1pdHRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2l6ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNPZmZzZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc1Byb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVQcm9ncmVzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlQWN0aXZlSW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdXBkYXRlL3VwZGF0ZUNsaWNrZWRTbGlkZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNsYXRlL2dldFRyYW5zbGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvc2V0VHJhbnNsYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9taW5UcmFuc2xhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNsYXRlL21heFRyYW5zbGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvdHJhbnNsYXRlVG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNsYXRlL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vc2V0VHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbWl0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvbkVuZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvc2xpZGVUb0xvb3AuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvc2xpZGVOZXh0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlUHJldi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVJlc2V0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9DbG9zZXN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbG9vcC9sb29wQ3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2xvb3AvbG9vcEZpeC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9sb29wL2xvb3BEZXN0cm95LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2xvb3AvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ncmFiLWN1cnNvci91bnNldEdyYWJDdXJzb3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZ3JhYi1jdXJzb3IvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uVG91Y2hTdGFydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvb25Ub3VjaE1vdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uVG91Y2hFbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uUmVzaXplLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vblNjcm9sbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvYnJlYWtwb2ludHMvc2V0QnJlYWtwb2ludC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9icmVha3BvaW50cy9nZXRCcmVha3BvaW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2JyZWFrcG9pbnRzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NsYXNzZXMvYWRkQ2xhc3Nlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jbGFzc2VzL3JlbW92ZUNsYXNzZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9pbWFnZXMvbG9hZEltYWdlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2ltYWdlcy9wcmVsb2FkSW1hZ2VzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2ltYWdlcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9kZWZhdWx0cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9tb2R1bGVFeHRlbmRQYXJhbXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvY29yZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29tcG9uZW50cy1zaGFyZWQvdXRpbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvbXBvbmVudHMtc2hhcmVkL3BhcmFtcy1saXN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb21wb25lbnRzLXNoYXJlZC9nZXQtcGFyYW1zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb21wb25lbnRzLXNoYXJlZC9tb3VudC1zd2lwZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jYWxjLWxvb3BlZC1zbGlkZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3Z1ZS9sb29wLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb21wb25lbnRzLXNoYXJlZC9nZXQtY2hhbmdlZC1wYXJhbXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3Z1ZS9nZXQtY2hpbGRyZW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvbXBvbmVudHMtc2hhcmVkL3VwZGF0ZS1zd2lwZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3Z1ZS92aXJ0dWFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb21wb25lbnRzLXNoYXJlZC91cGRhdGUtb24tdmlydHVhbC1kYXRhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci92dWUvc3dpcGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci92dWUvc3dpcGVyLXNsaWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU1NSIFdpbmRvdyA0LjAuMlxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IERlY2VtYmVyIDEzLCAyMDIxXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gKG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0ID0ge30sIHNyYyA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgICAgICBlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiZcbiAgICAgICAgICAgIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3JjW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHNzckRvY3VtZW50ID0ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXIoKSB7IH0sXG4gICAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0RXZlbnQoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUoKSB7IH0sXG4gICAgICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBpbXBvcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICBjb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgcmV0dXJuIGRvYztcbn1cblxuY29uc3Qgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZSgpIHsgfSxcbiAgICAgICAgcHVzaFN0YXRlKCkgeyB9LFxuICAgICAgICBnbygpIHsgfSxcbiAgICAgICAgYmFjaygpIHsgfSxcbiAgICB9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIEltYWdlKCkgeyB9LFxuICAgIERhdGUoKSB7IH0sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0KCkgeyB9LFxuICAgIGNsZWFyVGltZW91dCgpIHsgfSxcbiAgICBtYXRjaE1lZGlhKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9LFxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIGNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4gICAgZXh0ZW5kKHdpbiwgc3NyV2luZG93KTtcbiAgICByZXR1cm4gd2luO1xufVxuXG5leHBvcnQgeyBleHRlbmQsIGdldERvY3VtZW50LCBnZXRXaW5kb3csIHNzckRvY3VtZW50LCBzc3JXaW5kb3cgfTtcbiIsIi8qKlxuICogRG9tNyA0LjAuNFxuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cHM6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tNy5odG1sXG4gKlxuICogQ29weXJpZ2h0IDIwMjIsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IEphbnVhcnkgMTEsIDIwMjJcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuZnVuY3Rpb24gbWFrZVJlYWN0aXZlKG9iaikge1xuICBjb25zdCBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHByb3RvO1xuICAgIH0sXG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHByb3RvLl9fcHJvdG9fXyA9IHZhbHVlO1xuICAgIH1cblxuICB9KTtcbn1cblxuY2xhc3MgRG9tNyBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoaXRlbXMpIHtcbiAgICBpZiAodHlwZW9mIGl0ZW1zID09PSAnbnVtYmVyJykge1xuICAgICAgc3VwZXIoaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlciguLi4oaXRlbXMgfHwgW10pKTtcbiAgICAgIG1ha2VSZWFjdGl2ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhcnJheUZsYXQoYXJyID0gW10pIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAgIHJlcy5wdXNoKC4uLmFycmF5RmxhdChlbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChlbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhcnIsIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycikge1xuICBjb25zdCB1bmlxdWVBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHVuaXF1ZUFycmF5LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHVuaXF1ZUFycmF5LnB1c2goYXJyW2ldKTtcbiAgfVxuXG4gIHJldHVybiB1bmlxdWVBcnJheTtcbn1cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCAobWF0Y2gsIGdyb3VwKSA9PiBncm91cC50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgY29uc3QgYSA9IFtdO1xuICBjb25zdCByZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYS5wdXNoKHJlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBsZXQgYXJyID0gW107XG5cbiAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgaHRtbCA9IHNlbGVjdG9yLnRyaW0oKTtcblxuICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcbiAgICAgIGxldCB0b0NyZWF0ZSA9ICdkaXYnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0cicpID09PSAwKSB0b0NyZWF0ZSA9ICd0Ym9keSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGQnKSA9PT0gMCB8fCBodG1sLmluZGV4T2YoJzx0aCcpID09PSAwKSB0b0NyZWF0ZSA9ICd0cic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpID09PSAwKSB0b0NyZWF0ZSA9ICdzZWxlY3QnO1xuICAgICAgY29uc3QgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIGFkZENsYXNzKC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChjID0+IGMuc3BsaXQoJyAnKSkpO1xuICB0aGlzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoLi4uY2xhc3Nlcykge1xuICBjb25zdCBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGMgPT4gYy5zcGxpdCgnICcpKSk7XG4gIHRoaXMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyguLi5jbGFzc2VzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoYyA9PiBjLnNwbGl0KCcgJykpKTtcbiAgdGhpcy5mb3JFYWNoKGVsID0+IHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChjID0+IGMuc3BsaXQoJyAnKSkpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIodGhpcywgZWwgPT4ge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihjbGFzc05hbWUgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpLmxlbmd0aCA+IDA7XG4gIH0pLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGF0dHIoYXR0cnMsIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBHZXQgYXR0clxuICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IGF0dHJzXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gU3RyaW5nXG4gICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RcbiAgICAgIGZvciAoY29uc3QgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgICB0aGlzW2ldW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICBsZXQgZWw7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDsgLy8gR2V0IHZhbHVlXG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBrZXkgaW4gZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhS2V5ID0gZWwuZ2V0QXR0cmlidXRlKGBkYXRhLSR7a2V5fWApO1xuXG4gICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgIHJldHVybiBkYXRhS2V5O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IHZhbHVlXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbCA9IHRoaXNbaV07XG4gICAgaWYgKCFlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlID0ge307XG4gICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YShrZXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldKSB7XG4gICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSBudWxsO1xuICAgICAgZGVsZXRlIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0YXNldCgpIHtcbiAgY29uc3QgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBkYXRhc2V0ID0ge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAoZWwuZGF0YXNldCkge1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICBkYXRhc2V0W2RhdGFLZXldID0gZWwuZGF0YXNldFtkYXRhS2V5XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcblxuICAgICAgaWYgKGF0dHIubmFtZS5pbmRleE9mKCdkYXRhLScpID49IDApIHtcbiAgICAgICAgZGF0YXNldFt0b0NhbWVsQ2FzZShhdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IGF0dHIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YXNldCkge1xuICAgIGlmIChkYXRhc2V0W2tleV0gPT09ICdmYWxzZScpIGRhdGFzZXRba2V5XSA9IGZhbHNlO2Vsc2UgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ3RydWUnKSBkYXRhc2V0W2tleV0gPSB0cnVlO2Vsc2UgaWYgKHBhcnNlRmxvYXQoZGF0YXNldFtrZXldKSA9PT0gZGF0YXNldFtrZXldICogMSkgZGF0YXNldFtrZXldICo9IDE7XG4gIH1cblxuICByZXR1cm4gZGF0YXNldDtcbn1cblxuZnVuY3Rpb24gdmFsKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29uc3QgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YWx1ZXMucHVzaChlbC5zZWxlY3RlZE9wdGlvbnNbaV0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBlbC52YWx1ZTtcbiAgfSAvLyBzZXQgdmFsdWVcblxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBlbC5tdWx0aXBsZSAmJiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbC5vcHRpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGVsLm9wdGlvbnNbal0uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKGVsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnZhbCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihkdXJhdGlvbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycgPyBgJHtkdXJhdGlvbn1tc2AgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbiguLi5hcmdzKSB7XG4gIGxldCBbZXZlbnRUeXBlLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgY29uc3QgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwYXJlbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgIGlmICgkKHBhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkocGFyZW50c1trXSwgZXZlbnREYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZSAmJiBlLnRhcmdldCA/IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW10gOiBbXTtcblxuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgbGV0IGo7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKCF0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzKSBlbC5kb203TGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVyc1tldmVudF0pIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdLnB1c2goe1xuICAgICAgICAgIGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzKSBlbC5kb203TGl2ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGxldCBbZXZlbnRUeXBlLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpc1tqXTtcbiAgICAgIGxldCBoYW5kbGVycztcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1trXTtcblxuICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3QgZG9tID0gdGhpcztcbiAgbGV0IFtldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFtldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSA9IGFyZ3M7XG4gICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvbmNlSGFuZGxlciguLi5ldmVudEFyZ3MpIHtcbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoLi4uYXJncykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICBjb25zdCBldmVudERhdGEgPSBhcmdzWzFdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICBjb25zdCBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgZGV0YWlsOiBldmVudERhdGEsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gYXJncy5maWx0ZXIoKGRhdGEsIGRhdGFJbmRleCkgPT4gZGF0YUluZGV4ID4gMCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgIGRvbS5vZmYoJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gd2lkdGgoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnaGVpZ2h0JykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW5zKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KCkge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzaG93KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIC5jc3MoJ3dpZHRoJylcbiAgICAgIGlmICh0aGlzWzBdKSByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC5jc3MoeyB3aWR0aDogJzEwMHB4JyB9KVxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICBjb25zdCByZXN1bHQgPSBhcnJheUZpbHRlcih0aGlzLCBjYWxsYmFjayk7XG4gIHJldHVybiAkKHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGw7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdGV4dCh0ZXh0KSB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpIDogbnVsbDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgbGV0IGNvbXBhcmVXaXRoO1xuICBsZXQgaTtcbiAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb21wYXJlV2l0aCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIGVsID09PSBkb2N1bWVudDtcbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIGVsID09PSB3aW5kb3c7XG4gIH1cblxuICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgbGV0IGNoaWxkID0gdGhpc1swXTtcbiAgbGV0IGk7XG5cbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzO1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGNvbnN0IHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCguLi5lbHMpIHtcbiAgbGV0IG5ld0NoaWxkO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBlbHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBuZXdDaGlsZCA9IGVsc1trXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuXG4gICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkuYXBwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZChuZXdDaGlsZCkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGxldCBpO1xuICBsZXQgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuXG4gICAgICBmb3IgKGogPSB0ZW1wRGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqIC09IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5wcmVwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChiZWZvcmUubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZWZvcmVbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYmVmb3JlWzBdKTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJlZm9yZS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEFmdGVyKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICBjb25zdCBuZXh0RWxzID0gW107XG4gIGxldCBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgY29uc3QgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChuZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICB9IGVsc2UgbmV4dEVscy5wdXNoKG5leHQpO1xuXG4gICAgZWwgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuICQobmV4dEVscyk7XG59XG5cbmZ1bmN0aW9uIHByZXYoc2VsZWN0b3IpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgJChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoW10pO1xuICAgIH1cblxuICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICBjb25zdCBwcmV2RWxzID0gW107XG4gIGxldCBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICgkKHByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG5cbiAgICBlbCA9IHByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKHBhcmVudHMpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgbGV0IGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICBjb25zdCBmb3VuZEVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBmb3VuZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChmb3VuZEVsZW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzW2ldLmNoaWxkcmVuO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yIHx8ICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQoY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkZXRhY2goKSB7XG4gIHJldHVybiB0aGlzLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGQoLi4uZWxzKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG4gIGxldCBpO1xuICBsZXQgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5jaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuZnVuY3Rpb24gc2Nyb2xsVG8oLi4uYXJncykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IFtsZWZ0LCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrXSA9IGFyZ3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBbbGVmdCwgdG9wLCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZ10gPSBhcmdzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSBlYXNpbmcgPSAnc3dpbmcnO1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50VG9wO1xuICAgIGxldCBjdXJyZW50TGVmdDtcbiAgICBsZXQgbWF4VG9wO1xuICAgIGxldCBtYXhMZWZ0O1xuICAgIGxldCBuZXdUb3A7XG4gICAgbGV0IG5ld0xlZnQ7XG4gICAgbGV0IHNjcm9sbFRvcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgbGV0IHNjcm9sbExlZnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGxldCBhbmltYXRlVG9wID0gdG9wID4gMCB8fCB0b3AgPT09IDA7XG4gICAgbGV0IGFuaW1hdGVMZWZ0ID0gbGVmdCA+IDAgfHwgbGVmdCA9PT0gMDtcblxuICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWFzaW5nID0gJ3N3aW5nJztcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgY3VycmVudFRvcCA9IGVsLnNjcm9sbFRvcDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBjdXJyZW50TGVmdCA9IGVsLnNjcm9sbExlZnQ7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkdXJhdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIG1heFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld1RvcCA9IE1hdGgubWF4KE1hdGgubWluKHRvcCwgbWF4VG9wKSwgMCk7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBtYXhMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIG5ld0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KSwgMCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wID09PSBjdXJyZW50VG9wKSBhbmltYXRlVG9wID0gZmFsc2U7XG4gICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPT09IGN1cnJlbnRMZWZ0KSBhbmltYXRlTGVmdCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICBjb25zdCBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIGxldCBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoLi4uYXJncykge1xuICBsZXQgW3RvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2tdID0gYXJncztcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFt0b3AsIGR1cmF0aW9uLCBjYWxsYmFjaywgZWFzaW5nXSA9IGFyZ3M7XG4gIH1cblxuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZG9tLnNjcm9sbFRvKHVuZGVmaW5lZCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbExlZnQoLi4uYXJncykge1xuICBsZXQgW2xlZnQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrXSA9IGFyZ3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBbbGVmdCwgZHVyYXRpb24sIGNhbGxiYWNrLCBlYXNpbmddID0gYXJncztcbiAgfVxuXG4gIGNvbnN0IGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyhsZWZ0LCB1bmRlZmluZWQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBlbHMgPSB0aGlzO1xuICBjb25zdCBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcblxuICAgIGVhc2luZ1Byb2dyZXNzKGVhc2luZywgcHJvZ3Jlc3MpIHtcbiAgICAgIGlmIChlYXNpbmcgPT09ICdzd2luZycpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG5cbiAgICBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuXG4gICAgZG9uZShjb21wbGV0ZSkge1xuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZShlbHMpO1xuXG4gICAgICBpZiAoYS5xdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBxdWUgPSBhLnF1ZS5zaGlmdCgpO1xuICAgICAgICBhLmFuaW1hdGUocXVlWzBdLCBxdWVbMV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdOyAvLyBEZWZpbmUgJiBDYWNoZSBJbml0aWFscyAmIFVuaXRzXG5cbiAgICAgIGEuZWxlbWVudHMuZWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpbml0aWFsRnVsbFZhbHVlO1xuICAgICAgICBsZXQgaW5pdGlhbFZhbHVlO1xuICAgICAgICBsZXQgdW5pdDtcbiAgICAgICAgbGV0IGZpbmFsVmFsdWU7XG4gICAgICAgIGxldCBmaW5hbEZ1bGxWYWx1ZTtcbiAgICAgICAgaWYgKCFlbC5kb203QW5pbWF0ZUluc3RhbmNlKSBhLmVsZW1lbnRzW2luZGV4XS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhdID0ge1xuICAgICAgICAgIGNvbnRhaW5lcjogZWxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgICBmaW5hbFZhbHVlLFxuICAgICAgICAgICAgZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIGxldCB0aW1lO1xuICAgICAgbGV0IGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICBsZXQgcHJvcHNEb25lID0gMDtcbiAgICAgIGxldCBkb25lO1xuICAgICAgbGV0IGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3M7XG4gICAgICAgIGxldCBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIHBhcmFtcy5kdXJhdGlvbiwgMSksIDApO1xuICAgICAgICAgICAgZWFzZVByb2dyZXNzID0gYS5lYXNpbmdQcm9ncmVzcyhwYXJhbXMuZWFzaW5nLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgdW5pdFxuICAgICAgICAgICAgfSA9IGVsW3Byb3BdO1xuICAgICAgICAgICAgZWxbcHJvcF0uY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlICsgZWFzZVByb2dyZXNzICogKGZpbmFsVmFsdWUgLSBpbml0aWFsVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gZWxbcHJvcF0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZmluYWxWYWx1ZSA+IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPj0gZmluYWxWYWx1ZSB8fCBmaW5hbFZhbHVlIDwgaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA8PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGZpbmFsVmFsdWUgKyB1bml0O1xuICAgICAgICAgICAgICBwcm9wc0RvbmUgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAocHJvcHNEb25lID09PSBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZWwuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNEb25lICs9IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZWxlbWVudHNEb25lID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICBhLmRvbmUocGFyYW1zLmNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBjdXJyZW50VmFsdWUgKyB1bml0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjsgLy8gVGhlbiBjYWxsXG5cbiAgICAgICAgYS5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgfVxuXG4gICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgbGV0IGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGNvbnN0IGVscyA9IHRoaXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZWxzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgbm9UcmlnZ2VyID0gJ3Jlc2l6ZSBzY3JvbGwnLnNwbGl0KCcgJyk7XG5cbmZ1bmN0aW9uIHNob3J0Y3V0KG5hbWUpIHtcbiAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG5vVHJpZ2dlci5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgIGlmIChuYW1lIGluIHRoaXNbaV0pIHRoaXNbaV1bbmFtZV0oKTtlbHNlIHtcbiAgICAgICAgICAgICQodGhpc1tpXSkudHJpZ2dlcihuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRIYW5kbGVyO1xufVxuXG5jb25zdCBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xuY29uc3QgYmx1ciA9IHNob3J0Y3V0KCdibHVyJyk7XG5jb25zdCBmb2N1cyA9IHNob3J0Y3V0KCdmb2N1cycpO1xuY29uc3QgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG5jb25zdCBmb2N1c291dCA9IHNob3J0Y3V0KCdmb2N1c291dCcpO1xuY29uc3Qga2V5dXAgPSBzaG9ydGN1dCgna2V5dXAnKTtcbmNvbnN0IGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xuY29uc3Qga2V5cHJlc3MgPSBzaG9ydGN1dCgna2V5cHJlc3MnKTtcbmNvbnN0IHN1Ym1pdCA9IHNob3J0Y3V0KCdzdWJtaXQnKTtcbmNvbnN0IGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbmNvbnN0IG1vdXNlZG93biA9IHNob3J0Y3V0KCdtb3VzZWRvd24nKTtcbmNvbnN0IG1vdXNlbW92ZSA9IHNob3J0Y3V0KCdtb3VzZW1vdmUnKTtcbmNvbnN0IG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xuY29uc3QgbW91c2VlbnRlciA9IHNob3J0Y3V0KCdtb3VzZWVudGVyJyk7XG5jb25zdCBtb3VzZWxlYXZlID0gc2hvcnRjdXQoJ21vdXNlbGVhdmUnKTtcbmNvbnN0IG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG5jb25zdCBtb3VzZW92ZXIgPSBzaG9ydGN1dCgnbW91c2VvdmVyJyk7XG5jb25zdCB0b3VjaHN0YXJ0ID0gc2hvcnRjdXQoJ3RvdWNoc3RhcnQnKTtcbmNvbnN0IHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG5jb25zdCB0b3VjaG1vdmUgPSBzaG9ydGN1dCgndG91Y2htb3ZlJyk7XG5jb25zdCByZXNpemUgPSBzaG9ydGN1dCgncmVzaXplJyk7XG5jb25zdCBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsImltcG9ydCB7ICQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgaGFzQ2xhc3MsIHRvZ2dsZUNsYXNzLCBhdHRyLCByZW1vdmVBdHRyLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIG9uLCBvZmYsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0LCBzdHlsZXMsIG9mZnNldCwgY3NzLCBlYWNoLCBodG1sLCB0ZXh0LCBpcywgaW5kZXgsIGVxLCBhcHBlbmQsIHByZXBlbmQsIG5leHQsIG5leHRBbGwsIHByZXYsIHByZXZBbGwsIHBhcmVudCwgcGFyZW50cywgY2xvc2VzdCwgZmluZCwgY2hpbGRyZW4sIGZpbHRlciwgcmVtb3ZlIH0gZnJvbSAnZG9tNyc7XG5jb25zdCBNZXRob2RzID0ge1xuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgYXR0cixcbiAgcmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uLFxuICBvbixcbiAgb2ZmLFxuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoLFxuICBvdXRlckhlaWdodCxcbiAgc3R5bGVzLFxuICBvZmZzZXQsXG4gIGNzcyxcbiAgZWFjaCxcbiAgaHRtbCxcbiAgdGV4dCxcbiAgaXMsXG4gIGluZGV4LFxuICBlcSxcbiAgYXBwZW5kLFxuICBwcmVwZW5kLFxuICBuZXh0LFxuICBuZXh0QWxsLFxuICBwcmV2LFxuICBwcmV2QWxsLFxuICBwYXJlbnQsXG4gIHBhcmVudHMsXG4gIGNsb3Nlc3QsXG4gIGZpbmQsXG4gIGNoaWxkcmVuLFxuICBmaWx0ZXIsXG4gIHJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkLmZuLCBtZXRob2ROYW1lLCB7XG4gICAgdmFsdWU6IE1ldGhvZHNbbWV0aG9kTmFtZV0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICBjb25zdCBvYmplY3QgPSBvYmo7XG4gIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSA9IDApIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMgPSAneCcpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBtYXRyaXg7XG4gIGxldCBjdXJUcmFuc2Zvcm07XG4gIGxldCB0cmFuc2Zvcm1NYXRyaXg7XG4gIGNvbnN0IGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoYSA9PiBhLnJlcGxhY2UoJywnLCAnLicpKS5qb2luKCcsICcpO1xuICAgIH0gLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuXG5cbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDExKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJnc1swXSk7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV4dFNvdXJjZSA9IGFyZ3NbaV07XG5cbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgJiYgIWlzTm9kZShuZXh0U291cmNlKSkge1xuICAgICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApO1xuXG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIHNldENTU1Byb3BlcnR5KGVsLCB2YXJOYW1lLCB2YXJWYWx1ZSkge1xuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgc3dpcGVyLFxuICB0YXJnZXRQb3NpdGlvbixcbiAgc2lkZVxufSkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHRpbWU7XG4gIGNvbnN0IGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gIGNvbnN0IGRpciA9IHRhcmdldFBvc2l0aW9uID4gc3RhcnRQb3NpdGlvbiA/ICduZXh0JyA6ICdwcmV2JztcblxuICBjb25zdCBpc091dE9mQm91bmQgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGRpciA9PT0gJ25leHQnICYmIGN1cnJlbnQgPj0gdGFyZ2V0IHx8IGRpciA9PT0gJ3ByZXYnICYmIGN1cnJlbnQgPD0gdGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgY29uc3QgZWFzZVByb2dyZXNzID0gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyBlYXNlUHJvZ3Jlc3MgKiAodGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cblxuICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuY3NzTW9kZUZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9O1xuXG4gIGFuaW1hdGUoKTtcbn1cblxuZXhwb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwsIGRlbGV0ZVByb3BzLCBuZXh0VGljaywgbm93LCBnZXRUcmFuc2xhdGUsIGlzT2JqZWN0LCBleHRlbmQsIGdldENvbXB1dGVkU3R5bGUsIHNldENTU1Byb3BlcnR5IH07IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xubGV0IHN1cHBvcnQ7XG5cbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICByZXR1cm4ge1xuICAgIHNtb290aFNjcm9sbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICAgIHRvdWNoOiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCksXG4gICAgcGFzc2l2ZUxpc3RlbmVyOiBmdW5jdGlvbiBjaGVja1Bhc3NpdmVMaXN0ZW5lcigpIHtcbiAgICAgIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gTm8gc3VwcG9ydFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH0oKSxcbiAgICBnZXN0dXJlczogZnVuY3Rpb24gY2hlY2tHZXN0dXJlcygpIHtcbiAgICAgIHJldHVybiAnb25nZXN0dXJlc3RhcnQnIGluIHdpbmRvdztcbiAgICB9KClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgaWYgKCFzdXBwb3J0KSB7XG4gICAgc3VwcG9ydCA9IGNhbGNTdXBwb3J0KCk7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydDtcbn1cblxuZXhwb3J0IHsgZ2V0U3VwcG9ydCB9OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydCB9IGZyb20gJy4vZ2V0LXN1cHBvcnQuanMnO1xubGV0IGRldmljZUNhY2hlZDtcblxuZnVuY3Rpb24gY2FsY0RldmljZSh7XG4gIHVzZXJBZ2VudFxufSA9IHt9KSB7XG4gIGNvbnN0IHN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIGNvbnN0IHVhID0gdXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZVxuICB9O1xuICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgbGV0IGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICBjb25zdCBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgY29uc3QgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gIGNvbnN0IHdpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gJ1dpbjMyJztcbiAgbGV0IG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7IC8vIGlQYWRPcyAxMyBmaXhcblxuICBjb25zdCBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuXG4gIGlmICghaXBhZCAmJiBtYWNvcyAmJiBzdXBwb3J0LnRvdWNoICYmIGlQYWRTY3JlZW5zLmluZGV4T2YoYCR7c2NyZWVuV2lkdGh9eCR7c2NyZWVuSGVpZ2h0fWApID49IDApIHtcbiAgICBpcGFkID0gdWEubWF0Y2goLyhWZXJzaW9uKVxcLyhbXFxkLl0rKS8pO1xuICAgIGlmICghaXBhZCkgaXBhZCA9IFswLCAxLCAnMTNfMF8wJ107XG4gICAgbWFjb3MgPSBmYWxzZTtcbiAgfSAvLyBBbmRyb2lkXG5cblxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gIH1cblxuICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgIGRldmljZS5vcyA9ICdpb3MnO1xuICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICB9IC8vIEV4cG9ydCBvYmplY3RcblxuXG4gIHJldHVybiBkZXZpY2U7XG59XG5cbmZ1bmN0aW9uIGdldERldmljZShvdmVycmlkZXMgPSB7fSkge1xuICBpZiAoIWRldmljZUNhY2hlZCkge1xuICAgIGRldmljZUNhY2hlZCA9IGNhbGNEZXZpY2Uob3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VDYWNoZWQ7XG59XG5cbmV4cG9ydCB7IGdldERldmljZSB9OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xubGV0IGJyb3dzZXI7XG5cbmZ1bmN0aW9uIGNhbGNCcm93c2VyKCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzU2FmYXJpOiBpc1NhZmFyaSgpLFxuICAgIGlzV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCcm93c2VyKCkge1xuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBicm93c2VyID0gY2FsY0Jyb3dzZXIoKTtcbiAgfVxuXG4gIHJldHVybiBicm93c2VyO1xufVxuXG5leHBvcnQgeyBnZXRCcm93c2VyIH07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNpemUoe1xuICBzd2lwZXIsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgb2JzZXJ2ZXIgPSBudWxsO1xuICBsZXQgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnYmVmb3JlUmVzaXplJyk7XG4gICAgZW1pdCgncmVzaXplJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSBzd2lwZXI7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKHtcbiAgICAgICAgICBjb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICBjb250ZW50UmVjdCxcbiAgICAgICAgICB0YXJnZXRcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB3aWR0aCB8fCBuZXdIZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU9ic2VydmVyID0gKCkgPT4ge1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICB9O1xuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnJlc2l6ZU9ic2VydmVyICYmIHR5cGVvZiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjcmVhdGVPYnNlcnZlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPYnNlcnZlcih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgY29uc3QgYXR0YWNoID0gKHRhcmdldCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKG11dGF0aW9ucyA9PiB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9ic2VydmVyVXBkYXRlLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhXG4gICAgfSk7XG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgY29uc3QgY29udGFpbmVyUGFyZW50cyA9IHN3aXBlci4kZWwucGFyZW50cygpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0gLy8gT2JzZXJ2ZSBjb250YWluZXJcblxuXG4gICAgYXR0YWNoKHN3aXBlci4kZWxbMF0sIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pOyAvLyBPYnNlcnZlIHdyYXBwZXJcblxuICAgIGF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwge1xuICAgICAgYXR0cmlidXRlczogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xuICB9O1xuXG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSk7XG4gIG9uKCdpbml0JywgaW5pdCk7XG4gIG9uKCdkZXN0cm95JywgZGVzdHJveSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcblxuICBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuXG4gICAgZnVuY3Rpb24gb25jZUhhbmRsZXIoLi4uYXJncykge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG5cbiAgICAgIGlmIChvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuXG4gICAgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkgPSBoYW5kbGVyO1xuICAgIHJldHVybiBzZWxmLm9uKGV2ZW50cywgb25jZUhhbmRsZXIsIHByaW9yaXR5KTtcbiAgfSxcblxuICBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG5cbiAgb2ZmQW55KGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBpbmRleCA9IHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcblxuICBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSAmJiBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG5cbiAgZW1pdCguLi5hcmdzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgbGV0IGV2ZW50cztcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuXG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgW2V2ZW50LCAuLi5kYXRhXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCB3aWR0aDtcbiAgbGV0IGhlaWdodDtcbiAgY29uc3QgJGVsID0gc3dpcGVyLiRlbDtcblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIFN1YnRyYWN0IHBhZGRpbmdzXG5cblxuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn0iLCJpbXBvcnQgeyBzZXRDU1NQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6ICdoZWlnaHQnLFxuICAgICAgJ21hcmdpbi10b3AnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgJ21hcmdpbi1ib3R0b20gJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAncGFkZGluZy1yaWdodCc6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAnbWFyZ2luUmlnaHQnOiAnbWFyZ2luQm90dG9tJ1xuICAgIH1bcHJvcGVydHldO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShub2RlLCBsYWJlbCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG5vZGUuZ2V0UHJvcGVydHlWYWx1ZShnZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9XG5cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgICR3cmFwcGVyRWwsXG4gICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cm9uZ1JUTFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgY29uc3Qgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApO1xuICBjb25zdCBzbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc2xpZGVzLmxlbmd0aDtcbiAgbGV0IHNuYXBHcmlkID0gW107XG4gIGNvbnN0IHNsaWRlc0dyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gIGxldCBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICBsZXQgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBsZXQgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIGxldCBwcmV2U2xpZGVTaXplID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47IC8vIHJlc2V0IG1hcmdpbnNcblxuICBpZiAocnRsKSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5MZWZ0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7ZWxzZSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5SaWdodDogJycsXG4gICAgbWFyZ2luQm90dG9tOiAnJyxcbiAgICBtYXJnaW5Ub3A6ICcnXG4gIH0pOyAvLyByZXNldCBjc3NNb2RlIG9mZnNldHNcblxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCAnJyk7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcicsICcnKTtcbiAgfVxuXG4gIGNvbnN0IGdyaWRFbmFibGVkID0gcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDEgJiYgc3dpcGVyLmdyaWQ7XG5cbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQuaW5pdFNsaWRlcyhzbGlkZXNMZW5ndGgpO1xuICB9IC8vIENhbGMgc2xpZGVzXG5cblxuICBsZXQgc2xpZGVTaXplO1xuICBjb25zdCBzaG91bGRSZXNldFNsaWRlU2l6ZSA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLmJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKHBhcmFtcy5icmVha3BvaW50cykuZmlsdGVyKGtleSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXJhbXMuYnJlYWtwb2ludHNba2V5XS5zbGlkZXNQZXJWaWV3ICE9PSAndW5kZWZpbmVkJztcbiAgfSkubGVuZ3RoID4gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlcy5lcShpKTtcblxuICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmdyaWQudXBkYXRlU2xpZGUoaSwgc2xpZGUsIHNsaWRlc0xlbmd0aCwgZ2V0RGlyZWN0aW9uTGFiZWwpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChzaG91bGRSZXNldFNsaWRlU2l6ZSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYGA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNsaWRlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZVswXSk7XG4gICAgICBjb25zdCBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgY29uc3QgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zdCB3aWR0aCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICd3aWR0aCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5SaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgY29uc3QgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoXG4gICAgICAgICAgfSA9IHNsaWRlWzBdO1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQgKyAob2Zmc2V0V2lkdGggLSBjbGllbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gY3VycmVudFdlYktpdFRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVTaXplID0gKHN3aXBlclNpemUgLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikgLyBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG5cbiAgICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGAke3NsaWRlU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcblxuICBpZiAocnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgIHdpZHRoOiBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVufXB4YFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgIFtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV06IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC51cGRhdGVXcmFwcGVyU2l6ZShzbGlkZVNpemUsIHNuYXBHcmlkLCBnZXREaXJlY3Rpb25MYWJlbCk7XG4gIH0gLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcblxuXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgY29uc3QgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFwR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTtcblxuICAgICAgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG5cbiAgICBpZiAoTWF0aC5mbG9vcihzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSAtIE1hdGguZmxvb3Ioc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoID09PSAwKSBzbmFwR3JpZCA9IFswXTtcblxuICBpZiAocGFyYW1zLnNwYWNlQmV0d2VlbiAhPT0gMCkge1xuICAgIGNvbnN0IGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKChfLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuY3NzKHtcbiAgICAgIFtrZXldOiBgJHtzcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIGNvbnN0IG1heFNuYXAgPSBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZTtcbiAgICBzbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChzbmFwID0+IHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG5cbiAgICBpZiAoYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIGNvbnN0IGFsbFNsaWRlc09mZnNldCA9IChzd2lwZXJTaXplIC0gYWxsU2xpZGVzU2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBzbGlkZXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY3NzTW9kZSAmJiAhcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCBgJHstc25hcEdyaWRbMF19cHhgKTtcbiAgICBzZXRDU1NQcm9wZXJ0eShzd2lwZXIud3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgYCR7c3dpcGVyLnNpemUgLyAyIC0gc2xpZGVzU2l6ZXNHcmlkW3NsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSAvIDJ9cHhgKTtcbiAgICBjb25zdCBhZGRUb1NuYXBHcmlkID0gLXN3aXBlci5zbmFwR3JpZFswXTtcbiAgICBjb25zdCBhZGRUb1NsaWRlc0dyaWQgPSAtc3dpcGVyLnNsaWRlc0dyaWRbMF07XG4gICAgc3dpcGVyLnNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NuYXBHcmlkKTtcbiAgICBzd2lwZXIuc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NsaWRlc0dyaWQpO1xuICB9XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxuXG4gIGlmICghaXNWaXJ0dWFsICYmICFwYXJhbXMuY3NzTW9kZSAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnZmFkZScpKSB7XG4gICAgY29uc3QgYmFja0ZhY2VIaWRkZW5DbGFzcyA9IGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWJhY2tmYWNlLWhpZGRlbmA7XG4gICAgY29uc3QgaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQgPSBzd2lwZXIuJGVsLmhhc0NsYXNzKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuXG4gICAgaWYgKHNsaWRlc0xlbmd0aCA8PSBwYXJhbXMubWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMpIHtcbiAgICAgIGlmICghaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQpIHN3aXBlci4kZWwuYWRkQ2xhc3MoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgfSBlbHNlIGlmIChoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCkge1xuICAgICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhiYWNrRmFjZUhpZGRlbkNsYXNzKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgYWN0aXZlU2xpZGVzID0gW107XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBsZXQgbmV3SGVpZ2h0ID0gMDtcbiAgbGV0IGk7XG5cbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgfVxuXG4gIGNvbnN0IGdldFNsaWRlQnlJbmRleCA9IGluZGV4ID0+IHtcbiAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnNsaWRlcy5maWx0ZXIoZWwgPT4gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCkgPT09IGluZGV4KVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlcy5lcShpbmRleClbMF07XG4gIH07IC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG5cblxuICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAoc3dpcGVyLnZpc2libGVTbGlkZXMgfHwgJChbXSkpLmVhY2goc2xpZGUgPT4ge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAmJiAhaXNWaXJ0dWFsKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpKTtcbiAgfSAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9IC8vIFVwZGF0ZSBIZWlnaHRcblxuXG4gIGlmIChuZXdIZWlnaHQgfHwgbmV3SGVpZ2h0ID09PSAwKSBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodH1weGApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc25hcEdyaWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIGxldCBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7IC8vIFZpc2libGUgU2xpZGVzXG5cbiAgc2xpZGVzLnJlbW92ZUNsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgbGV0IHNsaWRlT2Zmc2V0ID0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQ7XG5cbiAgICBpZiAocGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZU9mZnNldCAtPSBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgb3JpZ2luYWxTbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciAtIHNuYXBHcmlkWzBdICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pO1xuICAgIGNvbnN0IHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZU9mZnNldCk7XG4gICAgY29uc3Qgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSBzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxIHx8IHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUgfHwgc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplO1xuXG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICAgIHNsaWRlLm9yaWdpbmFsUHJvZ3Jlc3MgPSBydGwgPyAtb3JpZ2luYWxTbGlkZVByb2dyZXNzIDogb3JpZ2luYWxTbGlkZVByb2dyZXNzO1xuICB9XG5cbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAkKHN3aXBlci52aXNpYmxlU2xpZGVzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICB0cmFuc2xhdGUgPSBzd2lwZXIgJiYgc3dpcGVyLnRyYW5zbGF0ZSAmJiBzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllciB8fCAwO1xuICB9XG5cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGxldCB7XG4gICAgcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmcsXG4gICAgaXNFbmRcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIGNvbnN0IHdhc0VuZCA9IGlzRW5kO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgICBpc0JlZ2lubmluZyA9IHByb2dyZXNzIDw9IDA7XG4gICAgaXNFbmQgPSBwcm9ncmVzcyA+PSAxO1xuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZyxcbiAgICBpc0VuZFxuICB9KTtcbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG5cbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEVuZCB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmICh3YXNCZWdpbm5pbmcgJiYgIWlzQmVnaW5uaW5nIHx8IHdhc0VuZCAmJiAhaXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgc2xpZGVzLFxuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsLFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIHJlYWxJbmRleFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBzbGlkZXMucmVtb3ZlQ2xhc3MoYCR7cGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9ICR7cGFyYW1zLnNsaWRlTmV4dENsYXNzfSAke3BhcmFtcy5zbGlkZVByZXZDbGFzc30gJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzc30gJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3N9ICR7cGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzfWApO1xuICBsZXQgYWN0aXZlU2xpZGU7XG5cbiAgaWYgKGlzVmlydHVhbCkge1xuICAgIGFjdGl2ZVNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuZmluZChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHthY3RpdmVJbmRleH1cIl1gKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZSA9IHNsaWRlcy5lcShhY3RpdmVJbmRleCk7XG4gIH0gLy8gQWN0aXZlIGNsYXNzZXNcblxuXG4gIGFjdGl2ZVNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAoYWN0aXZlU2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc306bm90KC4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSlbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gIH0gLy8gTmV4dCBTbGlkZVxuXG5cbiAgbGV0IG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRBbGwoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZXEoMCk7XG4gICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIH0gLy8gUHJldiBTbGlkZVxuXG5cbiAgbGV0IHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBwcmV2U2xpZGUgPSBzbGlkZXMuZXEoLTEpO1xuICAgIHByZXZTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKG5leHRTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7bmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKX1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChwcmV2U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc306bm90KC4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSlbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3ByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdFNsaWRlc0NsYXNzZXMoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBjb25zdCB7XG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbmFwR3JpZCxcbiAgICBwYXJhbXMsXG4gICAgYWN0aXZlSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgcmVhbEluZGV4OiBwcmV2aW91c1JlYWxJbmRleCxcbiAgICBzbmFwSW5kZXg6IHByZXZpb3VzU25hcEluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICBsZXQgc25hcEluZGV4O1xuXG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cblxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNraXAgPSBNYXRoLm1pbihwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBhY3RpdmVJbmRleCk7XG4gICAgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGFjdGl2ZUluZGV4IC0gc2tpcCkgLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB9XG5cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG5cbiAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEdldCByZWFsIGluZGV4XG5cblxuICBjb25zdCByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgc25hcEluZGV4LFxuICAgIHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4XG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuXG4gIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCBzbGlkZSA9ICQoZSkuY2xvc2VzdChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YClbMF07XG4gIGxldCBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIGxldCBzbGlkZUluZGV4O1xuXG4gIGlmIChzbGlkZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKSB7XG4gICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG5cbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgkKHNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBzbGlkZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gdW5kZWZpbmVkO1xuICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59IiwiaW1wb3J0IHVwZGF0ZVNpemUgZnJvbSAnLi91cGRhdGVTaXplLmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXMgZnJvbSAnLi91cGRhdGVTbGlkZXMuanMnO1xuaW1wb3J0IHVwZGF0ZUF1dG9IZWlnaHQgZnJvbSAnLi91cGRhdGVBdXRvSGVpZ2h0LmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXNPZmZzZXQgZnJvbSAnLi91cGRhdGVTbGlkZXNPZmZzZXQuanMnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc1Byb2dyZXNzIGZyb20gJy4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHVwZGF0ZVByb2dyZXNzIGZyb20gJy4vdXBkYXRlUHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc0NsYXNzZXMgZnJvbSAnLi91cGRhdGVTbGlkZXNDbGFzc2VzLmpzJztcbmltcG9ydCB1cGRhdGVBY3RpdmVJbmRleCBmcm9tICcuL3VwZGF0ZUFjdGl2ZUluZGV4LmpzJztcbmltcG9ydCB1cGRhdGVDbGlja2VkU2xpZGUgZnJvbSAnLi91cGRhdGVDbGlja2VkU2xpZGUuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXMsXG4gIHVwZGF0ZUF1dG9IZWlnaHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gIHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlXG59OyIsImltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneScpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB0cmFuc2xhdGUsXG4gICAgJHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGxldCBjdXJyZW50VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKCR3cmFwcGVyRWxbMF0sIGF4aXMpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBwYXJhbXMsXG4gICAgJHdyYXBwZXJFbCxcbiAgICB3cmFwcGVyRWwsXG4gICAgcHJvZ3Jlc3NcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGNvbnN0IHogPSAwO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWApO1xuICB9XG5cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5OyAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuXG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heFRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoIC0gMV07XG59IiwiaW1wb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRlVG8odHJhbnNsYXRlID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgdHJhbnNsYXRlQm91bmRzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBjb25zdCBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gIGxldCBuZXdUcmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlID4gbWluVHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7ZWxzZSBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA8IG1heFRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWF4VHJhbnNsYXRlO2Vsc2UgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlOyAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3VHJhbnNsYXRlKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBjb25zdCBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogLW5ld1RyYW5zbGF0ZSxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG5cbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCBnZXRUcmFuc2xhdGUgZnJvbSAnLi9nZXRUcmFuc2xhdGUuanMnO1xuaW1wb3J0IHNldFRyYW5zbGF0ZSBmcm9tICcuL3NldFRyYW5zbGF0ZS5qcyc7XG5pbXBvcnQgbWluVHJhbnNsYXRlIGZyb20gJy4vbWluVHJhbnNsYXRlLmpzJztcbmltcG9ydCBtYXhUcmFuc2xhdGUgZnJvbSAnLi9tYXhUcmFuc2xhdGUuanMnO1xuaW1wb3J0IHRyYW5zbGF0ZVRvIGZyb20gJy4vdHJhbnNsYXRlVG8uanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUcmFuc2xhdGUsXG4gIHNldFRyYW5zbGF0ZSxcbiAgbWluVHJhbnNsYXRlLFxuICBtYXhUcmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVRvXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25FbWl0KHtcbiAgc3dpcGVyLFxuICBydW5DYWxsYmFja3MsXG4gIGRpcmVjdGlvbixcbiAgc3RlcFxufSkge1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcHJldmlvdXNJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KGB0cmFuc2l0aW9uJHtzdGVwfWApO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVSZXNldFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoYHNsaWRlQ2hhbmdlVHJhbnNpdGlvbiR7c3RlcH1gKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlTmV4dFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZVByZXZUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB0cmFuc2l0aW9uRW1pdCBmcm9tICcuL3RyYW5zaXRpb25FbWl0LmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MgPSB0cnVlLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICB9XG5cbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdTdGFydCdcbiAgfSk7XG59IiwiaW1wb3J0IHRyYW5zaXRpb25FbWl0IGZyb20gJy4vdHJhbnNpdGlvbkVtaXQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MgPSB0cnVlLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdFbmQnXG4gIH0pO1xufSIsImltcG9ydCBzZXRUcmFuc2l0aW9uIGZyb20gJy4vc2V0VHJhbnNpdGlvbi5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvblN0YXJ0IGZyb20gJy4vdHJhbnNpdGlvblN0YXJ0LmpzJztcbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gJy4vdHJhbnNpdGlvbkVuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZFxufTsiLCJpbXBvcnQgeyBhbmltYXRlQ1NTTW9kZVNjcm9sbCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvKGluZGV4ID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwsIGluaXRpYWwpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGluZGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlICdpbmRleCcgYXJndW1lbnQgY2Fubm90IGhhdmUgdHlwZSBvdGhlciB0aGFuICdudW1iZXInIG9yICdzdHJpbmcnLiBbJHt0eXBlb2YgaW5kZXh9XSBnaXZlbi5gKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICdzdHJpbmcnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGBpbmRleGAgYXJndW1lbnQgY29udmVydGVkIGZyb20gYHN0cmluZ2AgdG8gYG51bWJlcmAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBjb25zdCBpbmRleEFzTnVtYmVyID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGBpbmRleGAgYXJndW1lbnQgaXMgYSB2YWxpZCBgbnVtYmVyYFxuICAgICAqIGFmdGVyIGJlaW5nIGNvbnZlcnRlZCBmcm9tIHRoZSBgc3RyaW5nYCB0eXBlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gICAgY29uc3QgaXNWYWxpZE51bWJlciA9IGlzRmluaXRlKGluZGV4QXNOdW1iZXIpO1xuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXNzZWQtaW4gJ2luZGV4JyAoc3RyaW5nKSBjb3VsZG4ndCBiZSBjb252ZXJ0ZWQgdG8gJ251bWJlcicuIFske2luZGV4fV0gZ2l2ZW4uYCk7XG4gICAgfSAvLyBLbm93aW5nIHRoYXQgdGhlIGNvbnZlcnRlZCBgaW5kZXhgIGlzIGEgdmFsaWQgbnVtYmVyLFxuICAgIC8vIHdlIGNhbiB1cGRhdGUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50J3MgdmFsdWUuXG5cblxuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuXG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCBzbGlkZUluZGV4ID0gaW5kZXg7XG4gIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IDA7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHdyYXBwZXJFbCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG5cbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiB8fCAhZW5hYmxlZCAmJiAhaW50ZXJuYWwgJiYgIWluaXRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIHNsaWRlSW5kZXgpO1xuICBsZXQgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKHNsaWRlSW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgY29uc3QgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gLU1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuXG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHcmlkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2xpZGVJbmRleCAhPT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfSAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBsZXQgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnOyAvLyBVcGRhdGUgSW5kZXhcblxuICBpZiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7IC8vIFVwZGF0ZSBIZWlnaHRcblxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBjb25zdCBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3QgdCA9IHJ0bCA/IHRyYW5zbGF0ZSA6IC10cmFuc2xhdGU7XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnbm9uZSc7XG4gICAgICAgIHN3aXBlci5faW1tZWRpYXRlVmlydHVhbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuXG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICAgIHN3aXBlci5fc3dpcGVySW1tZWRpYXRlVmlydHVhbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICAgICAgICAgIHN3aXBlcixcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbjogdCxcbiAgICAgICAgICBzaWRlOiBpc0ggPyAnbGVmdCcgOiAndG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICAgIFtpc0ggPyAnbGVmdCcgOiAndG9wJ106IHQsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICB9IGVsc2UgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICBpZiAoIXN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4ID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYGluZGV4YCBhcmd1bWVudCBjb252ZXJ0ZWQgZnJvbSBgc3RyaW5nYCB0byBgbnVtYmVyYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnN0IGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYGluZGV4YCBhcmd1bWVudCBpcyBhIHZhbGlkIGBudW1iZXJgXG4gICAgICogYWZ0ZXIgYmVpbmcgY29udmVydGVkIGZyb20gdGhlIGBzdHJpbmdgIHR5cGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICBjb25zdCBpc1ZhbGlkTnVtYmVyID0gaXNGaW5pdGUoaW5kZXhBc051bWJlcik7XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhc3NlZC1pbiAnaW5kZXgnIChzdHJpbmcpIGNvdWxkbid0IGJlIGNvbnZlcnRlZCB0byAnbnVtYmVyJy4gWyR7aW5kZXh9XSBnaXZlbi5gKTtcbiAgICB9IC8vIEtub3dpbmcgdGhhdCB0aGUgY29udmVydGVkIGBpbmRleGAgaXMgYSB2YWxpZCBudW1iZXIsXG4gICAgLy8gd2UgY2FuIHVwZGF0ZSB0aGUgb3JpZ2luYWwgYXJndW1lbnQncyB2YWx1ZS5cblxuXG4gICAgaW5kZXggPSBpbmRleEFzTnVtYmVyO1xuICB9XG5cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IG5ld0luZGV4ID0gaW5kZXg7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIG5ld0luZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlTmV4dChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgYW5pbWF0aW5nLFxuICAgIGVuYWJsZWQsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuIHN3aXBlcjtcbiAgbGV0IHBlckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMSAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXBBdXRvKSB7XG4gICAgcGVyR3JvdXAgPSBNYXRoLm1heChzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoJ2N1cnJlbnQnLCB0cnVlKSwgMSk7XG4gIH1cblxuICBjb25zdCBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBlckdyb3VwO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzRW5kKSB7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKDAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGFuaW1hdGluZyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuIHN3aXBlcjtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICBjb25zdCBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAodmFsID0+IG5vcm1hbGl6ZSh2YWwpKTtcbiAgbGV0IHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIGxldCBwcmV2U25hcEluZGV4O1xuICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkge1xuICAgICAgICAvLyBwcmV2U25hcCA9IHNuYXA7XG4gICAgICAgIHByZXZTbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHByZXZTbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcmV2U25hcCA9IHNuYXBHcmlkW3ByZXZTbmFwSW5kZXggPiAwID8gcHJldlNuYXBJbmRleCAtIDEgOiBwcmV2U25hcEluZGV4XTtcbiAgICB9XG4gIH1cblxuICBsZXQgcHJldkluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgICAgcHJldkluZGV4ID0gcHJldkluZGV4IC0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdwcmV2aW91cycsIHRydWUpICsgMTtcbiAgICAgIHByZXZJbmRleCA9IE1hdGgubWF4KHByZXZJbmRleCwgMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCAtIDEgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGxhc3RJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVSZXNldChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCwgdGhyZXNob2xkID0gMC41KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIGNvbnN0IHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChpbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGNvbnN0IG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGJlZm9yZSBpdC5cbiAgICBjb25zdCBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIHByZXZTbmFwIDw9IChjdXJyZW50U25hcCAtIHByZXZTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggLT0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgbGV0IHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gIGxldCByZWFsSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludCgkKHN3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGlmIChzbGlkZVRvSW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzIC0gc2xpZGVzUGVyVmlldyAvIDIgfHwgc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldyAvIDIpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdOm5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pYCkuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KWApLmVxKDApLmluZGV4KCk7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufSIsImltcG9ydCBzbGlkZVRvIGZyb20gJy4vc2xpZGVUby5qcyc7XG5pbXBvcnQgc2xpZGVUb0xvb3AgZnJvbSAnLi9zbGlkZVRvTG9vcC5qcyc7XG5pbXBvcnQgc2xpZGVOZXh0IGZyb20gJy4vc2xpZGVOZXh0LmpzJztcbmltcG9ydCBzbGlkZVByZXYgZnJvbSAnLi9zbGlkZVByZXYuanMnO1xuaW1wb3J0IHNsaWRlUmVzZXQgZnJvbSAnLi9zbGlkZVJlc2V0LmpzJztcbmltcG9ydCBzbGlkZVRvQ2xvc2VzdCBmcm9tICcuL3NsaWRlVG9DbG9zZXN0LmpzJztcbmltcG9ydCBzbGlkZVRvQ2xpY2tlZFNsaWRlIGZyb20gJy4vc2xpZGVUb0NsaWNrZWRTbGlkZS5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNsaWRlVG8sXG4gIHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQsXG4gIHNsaWRlUHJldixcbiAgc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3QsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGVcbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcENyZWF0ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgICR3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjsgLy8gUmVtb3ZlIGR1cGxpY2F0ZWQgc2xpZGVzXG5cbiAgY29uc3QgJHNlbGVjdG9yID0gJHdyYXBwZXJFbC5jaGlsZHJlbigpLmxlbmd0aCA+IDAgPyAkKCR3cmFwcGVyRWwuY2hpbGRyZW4oKVswXS5wYXJlbnROb2RlKSA6ICR3cmFwcGVyRWw7XG4gICRzZWxlY3Rvci5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9YCkucmVtb3ZlKCk7XG4gIGxldCBzbGlkZXMgPSAkc2VsZWN0b3IuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuXG4gIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgIGNvbnN0IGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW5rU2xpZGVzTnVtOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MoYCR7cGFyYW1zLnNsaWRlQ2xhc3N9ICR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKTtcbiAgICAgICAgJHNlbGVjdG9yLmFwcGVuZChibGFua05vZGUpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMgPSAkc2VsZWN0b3IuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCAmJiBzd2lwZXIucGFyYW1zLmxvb3BlZFNsaWRlc0xpbWl0KSB7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwcmVwZW5kU2xpZGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2xpZGUgPSAkKGVsKTtcbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIubG9vcGVkU2xpZGVzOyBpICs9IDEpIHtcbiAgICBjb25zdCBpbmRleCA9IGkgLSBNYXRoLmZsb29yKGkgLyBzbGlkZXMubGVuZ3RoKSAqIHNsaWRlcy5sZW5ndGg7XG4gICAgYXBwZW5kU2xpZGVzLnB1c2goc2xpZGVzLmVxKGluZGV4KVswXSk7XG4gICAgcHJlcGVuZFNsaWRlcy51bnNoaWZ0KHNsaWRlcy5lcShzbGlkZXMubGVuZ3RoIC0gaW5kZXggLSAxKVswXSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICRzZWxlY3Rvci5hcHBlbmQoJChhcHBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IHByZXBlbmRTbGlkZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAkc2VsZWN0b3IucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcEZpeCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIHNsaWRlcyxcbiAgICBsb29wZWRTbGlkZXMsXG4gICAgYWxsb3dTbGlkZVByZXYsXG4gICAgYWxsb3dTbGlkZU5leHQsXG4gICAgc25hcEdyaWQsXG4gICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IG5ld0luZGV4O1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBjb25zdCBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgY29uc3QgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7IC8vIEZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcblxuICBpZiAoYWN0aXZlSW5kZXggPCBsb29wZWRTbGlkZXMpIHtcbiAgICBuZXdJbmRleCA9IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMgKiAzICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykge1xuICAgIC8vIEZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICAkd3JhcHBlckVsLFxuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNcbiAgfSA9IHN3aXBlcjtcbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9LC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YCkucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsImltcG9ydCBsb29wQ3JlYXRlIGZyb20gJy4vbG9vcENyZWF0ZS5qcyc7XG5pbXBvcnQgbG9vcEZpeCBmcm9tICcuL2xvb3BGaXguanMnO1xuaW1wb3J0IGxvb3BEZXN0cm95IGZyb20gJy4vbG9vcERlc3Ryb3kuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb29wQ3JlYXRlLFxuICBsb29wRml4LFxuICBsb29wRGVzdHJveVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBjb25zdCBlbCA9IHN3aXBlci5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gc3dpcGVyLmVsIDogc3dpcGVyLndyYXBwZXJFbDtcbiAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXJbc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyAnZWwnIDogJ3dyYXBwZXJFbCddLnN0eWxlLmN1cnNvciA9ICcnO1xufSIsImltcG9ydCBzZXRHcmFiQ3Vyc29yIGZyb20gJy4vc2V0R3JhYkN1cnNvci5qcyc7XG5pbXBvcnQgdW5zZXRHcmFiQ3Vyc29yIGZyb20gJy4vdW5zZXRHcmFiQ3Vyc29yLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yXG59OyIsImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJzsgLy8gTW9kaWZpZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDUyMDU1NC9jdXN0b20tZWxlbWVudC1nZXRyb290bm9kZS1jbG9zZXN0LWZ1bmN0aW9uLWNyb3NzaW5nLW11bHRpcGxlLXBhcmVudC1zaGFkb3dkXG5cbmZ1bmN0aW9uIGNsb3Nlc3RFbGVtZW50KHNlbGVjdG9yLCBiYXNlID0gdGhpcykge1xuICBmdW5jdGlvbiBfX2Nsb3Nlc3RGcm9tKGVsKSB7XG4gICAgaWYgKCFlbCB8fCBlbCA9PT0gZ2V0RG9jdW1lbnQoKSB8fCBlbCA9PT0gZ2V0V2luZG93KCkpIHJldHVybiBudWxsO1xuICAgIGlmIChlbC5hc3NpZ25lZFNsb3QpIGVsID0gZWwuYXNzaWduZWRTbG90O1xuICAgIGNvbnN0IGZvdW5kID0gZWwuY2xvc2VzdChzZWxlY3Rvcik7XG5cbiAgICBpZiAoIWZvdW5kICYmICFlbC5nZXRSb290Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kIHx8IF9fY2xvc2VzdEZyb20oZWwuZ2V0Um9vdE5vZGUoKS5ob3N0KTtcbiAgfVxuXG4gIHJldHVybiBfX2Nsb3Nlc3RGcm9tKGJhc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcEZpeCgpO1xuICB9XG5cbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgbGV0ICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcblxuICBjb25zdCBzd2lwaW5nQ2xhc3NIYXNWYWx1ZSA9ICEhcGFyYW1zLm5vU3dpcGluZ0NsYXNzICYmIHBhcmFtcy5ub1N3aXBpbmdDbGFzcyAhPT0gJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIGNvbnN0IGV2ZW50UGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogZXZlbnQucGF0aDtcblxuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudFBhdGgpIHtcbiAgICAkdGFyZ2V0RWwgPSAkKGV2ZW50UGF0aFswXSk7XG4gIH1cblxuICBjb25zdCBub1N3aXBpbmdTZWxlY3RvciA9IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IGAuJHtwYXJhbXMubm9Td2lwaW5nQ2xhc3N9YDtcbiAgY29uc3QgaXNUYXJnZXRTaGFkb3cgPSAhIShlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290KTsgLy8gdXNlIGNsb3Nlc3RFbGVtZW50IGZvciBzaGFkb3cgcm9vdCBlbGVtZW50IHRvIGdldCB0aGUgYWN0dWFsIGNsb3Nlc3QgZm9yIG5lc3RlZCBzaGFkb3cgcm9vdCBlbGVtZW50XG5cbiAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgKGlzVGFyZ2V0U2hhZG93ID8gY2xvc2VzdEVsZW1lbnQobm9Td2lwaW5nU2VsZWN0b3IsICR0YXJnZXRFbFswXSkgOiAkdGFyZ2V0RWwuY2xvc2VzdChub1N3aXBpbmdTZWxlY3RvcilbMF0pKSB7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgcmV0dXJuO1xuICB9XG5cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgY29uc3Qgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgY29uc3Qgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTsgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG5cbiAgY29uc3QgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbiB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uO1xuICBjb25zdCBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQ7XG5cbiAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiAmJiAoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZCB8fCBzdGFydFggPj0gd2luZG93LmlubmVyV2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiA9PT0gJ3ByZXZlbnQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcblxuICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICBsZXQgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuXG4gICAgaWYgKCR0YXJnZXRFbC5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcblxuICAgICAgaWYgKCR0YXJnZXRFbFswXS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09ICR0YXJnZXRFbFswXSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvdWxkUHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdCAmJiBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgJiYgcGFyYW1zLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDtcblxuICAgIGlmICgocGFyYW1zLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KSAmJiAhJHRhcmdldEVsWzBdLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgc3dpcGVyLnBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSAmJiBzd2lwZXIuYW5pbWF0aW5nICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoU3RhcnQoKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG59IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlICE9PSAndG91Y2htb3ZlJykgcmV0dXJuO1xuICBjb25zdCB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gIGNvbnN0IHBhZ2VYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IHRhcmdldFRvdWNoLnBhZ2VYIDogZS5wYWdlWDtcbiAgY29uc3QgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuXG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgaWYgKCEkKGUudGFyZ2V0KS5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5pc1RvdWNoZWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odG91Y2hlcywge1xuICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgIGN1cnJlbnRZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICBjb25zdCBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgY29uc3QgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRocmVzaG9sZCAmJiBNYXRoLnNxcnQoZGlmZlggKiogMiArIGRpZmZZICoqIDIpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHRvdWNoQW5nbGU7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICB9XG5cbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuXG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLnRyaWdnZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcpO1xuICAgIH1cblxuICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlOyAvLyBHcmFiIEN1cnNvclxuXG4gICAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlckZpcnN0TW92ZScsIGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NsaWRlck1vdmUnLCBlKTtcbiAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgbGV0IGRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBkaWZmWCA6IGRpZmZZO1xuICB0b3VjaGVzLmRpZmYgPSBkaWZmO1xuICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICBpZiAocnRsKSBkaWZmID0gLWRpZmY7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgbGV0IGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICBsZXQgcmVzaXN0YW5jZVJhdGlvID0gcGFyYW1zLnJlc2lzdGFuY2VSYXRpbztcblxuICBpZiAocGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICByZXNpc3RhbmNlUmF0aW8gPSAwO1xuICB9XG5cbiAgaWYgKGRpZmYgPiAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEgKyAoLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmKSAqKiByZXNpc3RhbmNlUmF0aW87XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgMSAtIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICB9XG5cbiAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgfSAvLyBEaXJlY3Rpb25zIGxvY2tzXG5cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgIXN3aXBlci5hbGxvd1NsaWRlTmV4dCkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH0gLy8gVGhyZXNob2xkXG5cblxuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIHtcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBwYXJhbXMudGhyZXNob2xkIHx8IGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICBpZiAoIWRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcGFyYW1zLmZvbGxvd0ZpbmdlciB8fCBwYXJhbXMuY3NzTW9kZSkgcmV0dXJuOyAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoTW92ZSgpO1xuICB9IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7IC8vIFVwZGF0ZSB0cmFuc2xhdGVcblxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59IiwiaW1wb3J0IHsgbm93LCBuZXh0VGljayB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuXG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfSAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcblxuXG4gIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICB9IC8vIFRpbWUgZGlmZlxuXG5cbiAgY29uc3QgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIGNvbnN0IHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTsgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG5cbiAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgY29uc3QgcGF0aFRyZWUgPSBlLnBhdGggfHwgZS5jb21wb3NlZFBhdGggJiYgZS5jb21wb3NlZFBhdGgoKTtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKHBhdGhUcmVlICYmIHBhdGhUcmVlWzBdIHx8IGUudGFyZ2V0KTtcbiAgICBzd2lwZXIuZW1pdCgndGFwIGNsaWNrJywgZSk7XG5cbiAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgdG91Y2hFbmRUaW1lIC0gZGF0YS5sYXN0Q2xpY2tUaW1lIDwgMzAwKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwIGRvdWJsZUNsaWNrJywgZSk7XG4gICAgfVxuICB9XG5cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gbm93KCk7XG4gIG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwIHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gIGxldCBjdXJyZW50UG9zO1xuXG4gIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hFbmQoe1xuICAgICAgY3VycmVudFBvc1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcblxuXG4gIGxldCBzdG9wSW5kZXggPSAwO1xuICBsZXQgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIGNvbnN0IGluY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXdpbmRGaXJzdEluZGV4ID0gbnVsbDtcbiAgbGV0IHJld2luZExhc3RJbmRleCA9IG51bGw7XG5cbiAgaWYgKHBhcmFtcy5yZXdpbmQpIHtcbiAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICByZXdpbmRMYXN0SW5kZXggPSBzd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIC0gMSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgcmV3aW5kRmlyc3RJbmRleCA9IDA7XG4gICAgfVxuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG5cblxuICBjb25zdCByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgY29uc3QgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzRW5kID8gcmV3aW5kRmlyc3RJbmRleCA6IHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAocmV3aW5kTGFzdEluZGV4ICE9PSBudWxsICYmIHJhdGlvIDwgMCAmJiBNYXRoLmFicyhyYXRpbykgPiBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc05hdkJ1dHRvblRhcmdldCA9IHN3aXBlci5uYXZpZ2F0aW9uICYmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuXG4gICAgaWYgKCFpc05hdkJ1dHRvblRhcmdldCkge1xuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZEZpcnN0SW5kZXggIT09IG51bGwgPyByZXdpbmRGaXJzdEluZGV4IDogc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCAhPT0gbnVsbCA/IHJld2luZExhc3RJbmRleCA6IHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuOyAvLyBCcmVha3BvaW50c1xuXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9IC8vIFNhdmUgbG9ja3NcblxuXG4gIGNvbnN0IHtcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBzbmFwR3JpZFxuICB9ID0gc3dpcGVyOyAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5hdXRvcGxheSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO1xuICB9IC8vIFJldHVybiBsb2NrcyBhZnRlciByZXNpemVcblxuXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcblxuICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckVsLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAwKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn0iLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IG9uVG91Y2hTdGFydCBmcm9tICcuL29uVG91Y2hTdGFydC5qcyc7XG5pbXBvcnQgb25Ub3VjaE1vdmUgZnJvbSAnLi9vblRvdWNoTW92ZS5qcyc7XG5pbXBvcnQgb25Ub3VjaEVuZCBmcm9tICcuL29uVG91Y2hFbmQuanMnO1xuaW1wb3J0IG9uUmVzaXplIGZyb20gJy4vb25SZXNpemUuanMnO1xuaW1wb3J0IG9uQ2xpY2sgZnJvbSAnLi9vbkNsaWNrLmpzJztcbmltcG9ydCBvblNjcm9sbCBmcm9tICcuL29uU2Nyb2xsLmpzJztcbmxldCBkdW1teUV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHVtbXlFdmVudExpc3RlbmVyKCkge31cblxuY29uc3QgZXZlbnRzID0gKHN3aXBlciwgbWV0aG9kKSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaEV2ZW50cyxcbiAgICBlbCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZGV2aWNlLFxuICAgIHN1cHBvcnRcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDtcbiAgY29uc3QgZG9tTWV0aG9kID0gbWV0aG9kID09PSAnb24nID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICBjb25zdCBzd2lwZXJNZXRob2QgPSBtZXRob2Q7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCkge1xuICAgIGVsW2RvbU1ldGhvZF0odG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnRbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIGVsW2RvbU1ldGhvZF0odG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZVxuICAgIH0gOiBjYXB0dXJlKTtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsW2RvbU1ldGhvZF0oJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW2RvbU1ldGhvZF0oJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXShkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlcltzd2lwZXJNZXRob2RdKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc3VwcG9ydFxuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG5cbiAgaWYgKHN1cHBvcnQudG91Y2ggJiYgIWR1bW15RXZlbnRBdHRhY2hlZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBldmVudHMoc3dpcGVyLCAnb24nKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBldmVudHMoc3dpcGVyLCAnb2ZmJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHNcbn07IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuY29uc3QgaXNHcmlkRW5hYmxlZCA9IChzd2lwZXIsIHBhcmFtcykgPT4ge1xuICByZXR1cm4gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbG9vcGVkU2xpZGVzID0gMCxcbiAgICBwYXJhbXMsXG4gICAgJGVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApIHJldHVybjsgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcblxuICBjb25zdCBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHNCYXNlLCBzd2lwZXIuZWwpO1xuICBpZiAoIWJyZWFrcG9pbnQgfHwgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSByZXR1cm47XG4gIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICBjb25zdCBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICBjb25zdCB3YXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBwYXJhbXMpO1xuICBjb25zdCBpc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCB3YXNFbmFibGVkID0gcGFyYW1zLmVuYWJsZWQ7XG5cbiAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgJGVsLnJlbW92ZUNsYXNzKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9IGVsc2UgaWYgKCF3YXNNdWx0aVJvdyAmJiBpc011bHRpUm93KSB7XG4gICAgJGVsLmFkZENsYXNzKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWRgKTtcblxuICAgIGlmIChicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZC1jb2x1bW5gKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfSAvLyBUb2dnbGUgbmF2aWdhdGlvbiwgcGFnaW5hdGlvbiwgc2Nyb2xsYmFyXG5cblxuICBbJ25hdmlnYXRpb24nLCAncGFnaW5hdGlvbicsICdzY3JvbGxiYXInXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGNvbnN0IHdhc01vZHVsZUVuYWJsZWQgPSBwYXJhbXNbcHJvcF0gJiYgcGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG4gICAgY29uc3QgaXNNb2R1bGVFbmFibGVkID0gYnJlYWtwb2ludFBhcmFtc1twcm9wXSAmJiBicmVha3BvaW50UGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG5cbiAgICBpZiAod2FzTW9kdWxlRW5hYmxlZCAmJiAhaXNNb2R1bGVFbmFibGVkKSB7XG4gICAgICBzd2lwZXJbcHJvcF0uZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIGlmICghd2FzTW9kdWxlRW5hYmxlZCAmJiBpc01vZHVsZUVuYWJsZWQpIHtcbiAgICAgIHN3aXBlcltwcm9wXS5lbmFibGUoKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBkaXJlY3Rpb25DaGFuZ2VkID0gYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gJiYgYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gIT09IHBhcmFtcy5kaXJlY3Rpb247XG4gIGNvbnN0IG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG5cbiAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGNvbnN0IGlzRW5hYmxlZCA9IHN3aXBlci5wYXJhbXMuZW5hYmxlZDtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICB9KTtcblxuICBpZiAod2FzRW5hYmxlZCAmJiAhaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmRpc2FibGUoKTtcbiAgfSBlbHNlIGlmICghd2FzRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZW5hYmxlKCk7XG4gIH1cblxuICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcblxuICBpZiAobmVlZHNSZUxvb3AgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcyArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBiYXNlID0gJ3dpbmRvdycsIGNvbnRhaW5lckVsKSB7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgYnJlYWtwb2ludCA9IGZhbHNlO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKHBvaW50ID0+IHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIGNvbnN0IG1pblJhdGlvID0gcGFyc2VGbG9hdChwb2ludC5zdWJzdHIoMSkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcG9pbnRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwb2ludCxcbiAgICAgIHBvaW50XG4gICAgfTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhLnZhbHVlLCAxMCkgLSBwYXJzZUludChiLnZhbHVlLCAxMCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9pbnQsXG4gICAgICB2YWx1ZVxuICAgIH0gPSBwb2ludHNbaV07XG5cbiAgICBpZiAoYmFzZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt2YWx1ZX1weClgKS5tYXRjaGVzKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIDw9IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59IiwiaW1wb3J0IHNldEJyZWFrcG9pbnQgZnJvbSAnLi9zZXRCcmVha3BvaW50LmpzJztcbmltcG9ydCBnZXRCcmVha3BvaW50IGZyb20gJy4vZ2V0QnJlYWtwb2ludC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnRcbn07IiwiZnVuY3Rpb24gcHJlcGFyZUNsYXNzZXMoZW50cmllcywgcHJlZml4KSB7XG4gIGNvbnN0IHJlc3VsdENsYXNzZXMgPSBbXTtcbiAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goY2xhc3NOYW1lcyA9PiB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lcyxcbiAgICBwYXJhbXMsXG4gICAgcnRsLFxuICAgICRlbCxcbiAgICBkZXZpY2UsXG4gICAgc3VwcG9ydFxuICB9ID0gc3dpcGVyOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICBjb25zdCBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogIXN1cHBvcnQudG91Y2hcbiAgfSwge1xuICAgICdmcmVlLW1vZGUnOiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnZ3JpZCc6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxXG4gIH0sIHtcbiAgICAnZ3JpZC1jb2x1bW4nOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH0sIHtcbiAgICAnY2VudGVyZWQnOiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNcbiAgfSwge1xuICAgICd3YXRjaC1wcm9ncmVzcyc6IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaCguLi5zdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbLi4uY2xhc3NOYW1lc10uam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgICRlbCxcbiAgICBjbGFzc05hbWVzXG4gIH0gPSBzd2lwZXI7XG4gICRlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsImltcG9ydCBhZGRDbGFzc2VzIGZyb20gJy4vYWRkQ2xhc3Nlcy5qcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3NlcyBmcm9tICcuL3JlbW92ZUNsYXNzZXMuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRDbGFzc2VzLFxuICByZW1vdmVDbGFzc2VzXG59OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2VFbCwgc3JjLCBzcmNzZXQsIHNpemVzLCBjaGVja0ZvckNvbXBsZXRlLCBjYWxsYmFjaykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IGltYWdlO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICB9XG5cbiAgY29uc3QgaXNQaWN0dXJlID0gJChpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuaW1hZ2VzVG9Mb2FkID0gc3dpcGVyLiRlbC5maW5kKCdpbWcnKTtcblxuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgc3dpcGVyLmltYWdlc0xvYWRlZCArPSAxO1xuXG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgPT09IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5KSBzd2lwZXIudXBkYXRlKCk7XG4gICAgICBzd2lwZXIuZW1pdCgnaW1hZ2VzUmVhZHknKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gIH1cbn0iLCJpbXBvcnQgbG9hZEltYWdlIGZyb20gJy4vbG9hZEltYWdlLmpzJztcbmltcG9ydCBwcmVsb2FkSW1hZ2VzIGZyb20gJy4vcHJlbG9hZEltYWdlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlc1xufTsiLCJmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgaXNMb2NrZWQ6IHdhc0xvY2tlZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIHNsaWRlc09mZnNldEJlZm9yZVxuICB9ID0gcGFyYW1zO1xuXG4gIGlmIChzbGlkZXNPZmZzZXRCZWZvcmUpIHtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBsYXN0U2xpZGVSaWdodEVkZ2UgPSBzd2lwZXIuc2xpZGVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHNsaWRlc09mZnNldEJlZm9yZSAqIDI7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNpemUgPiBsYXN0U2xpZGVSaWdodEVkZ2U7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYWxsb3dTbGlkZU5leHQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cblxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gIH1cblxuICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja092ZXJmbG93XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHRvdWNoRXZlbnRzVGFyZ2V0OiAnd3JhcHBlcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogdHJ1ZSxcbiAgbmVzdGVkOiBmYWxzZSxcbiAgY3JlYXRlRWxlbWVudHM6IGZhbHNlLFxuICBlbmFibGVkOiB0cnVlLFxuICBmb2N1c2FibGVFbGVtZW50czogJ2lucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8sIGxhYmVsJyxcbiAgLy8gT3ZlcnJpZGVzXG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIC8vXG4gIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG4gIC8vIHNzclxuICB1c2VyQWdlbnQ6IG51bGwsXG4gIHVybDogbnVsbCxcbiAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHApLlxuICBlZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxuICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIHNsaWRlc1Blckdyb3VwQXV0bzogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxuICAvLyBSb3VuZCBsZW5ndGhcbiAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiAwLFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsXG4gIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgLy8gUHJvZ3Jlc3NcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gIC8vIEN1cnNvclxuICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gIC8vIEltYWdlc1xuICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxuICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuICAvLyBsb29wXG4gIGxvb3A6IGZhbHNlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcbiAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICBsb29wZWRTbGlkZXNMaW1pdDogdHJ1ZSxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyByZXdpbmRcbiAgcmV3aW5kOiBmYWxzZSxcbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLFxuICAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcbiAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgbWF4QmFja2ZhY2VIaWRkZW5TbGlkZXM6IDEwLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLScsXG4gIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuaycsXG4gIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuICAvLyBDYWxsYmFja3NcbiAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlLFxuICAvLyBJbnRlcm5hbHNcbiAgX2VtaXRDbGFzc2VzOiBmYWxzZVxufTsiLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kdWxlRXh0ZW5kUGFyYW1zKHBhcmFtcywgYWxsTW9kdWxlc1BhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24gZXh0ZW5kUGFyYW1zKG9iaiA9IHt9KSB7XG4gICAgY29uc3QgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgICBjb25zdCBtb2R1bGVQYXJhbXMgPSBvYmpbbW9kdWxlUGFyYW1OYW1lXTtcblxuICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHtcbiAgICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChbJ25hdmlnYXRpb24nLCAncGFnaW5hdGlvbicsICdzY3JvbGxiYXInXS5pbmRleE9mKG1vZHVsZVBhcmFtTmFtZSkgPj0gMCAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgIGF1dG86IHRydWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkge1xuICAgICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9O1xuICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICB9O1xufSIsIi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3csIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuLi9zaGFyZWQvZ2V0LXN1cHBvcnQuanMnO1xuaW1wb3J0IHsgZ2V0RGV2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dldC1kZXZpY2UuanMnO1xuaW1wb3J0IHsgZ2V0QnJvd3NlciB9IGZyb20gJy4uL3NoYXJlZC9nZXQtYnJvd3Nlci5qcyc7XG5pbXBvcnQgUmVzaXplIGZyb20gJy4vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzJztcbmltcG9ydCBPYnNlcnZlciBmcm9tICcuL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMnO1xuaW1wb3J0IGV2ZW50c0VtaXR0ZXIgZnJvbSAnLi9ldmVudHMtZW1pdHRlci5qcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vdXBkYXRlL2luZGV4LmpzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGUvaW5kZXguanMnO1xuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnLi90cmFuc2l0aW9uL2luZGV4LmpzJztcbmltcG9ydCBzbGlkZSBmcm9tICcuL3NsaWRlL2luZGV4LmpzJztcbmltcG9ydCBsb29wIGZyb20gJy4vbG9vcC9pbmRleC5qcyc7XG5pbXBvcnQgZ3JhYkN1cnNvciBmcm9tICcuL2dyYWItY3Vyc29yL2luZGV4LmpzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMvaW5kZXguanMnO1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMvaW5kZXguanMnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jbGFzc2VzL2luZGV4LmpzJztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMvaW5kZXguanMnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5pbXBvcnQgbW9kdWxlRXh0ZW5kUGFyYW1zIGZyb20gJy4vbW9kdWxlRXh0ZW5kUGFyYW1zLmpzJztcbmNvbnN0IHByb3RvdHlwZXMgPSB7XG4gIGV2ZW50c0VtaXR0ZXIsXG4gIHVwZGF0ZSxcbiAgdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uLFxuICBzbGlkZSxcbiAgbG9vcCxcbiAgZ3JhYkN1cnNvcixcbiAgZXZlbnRzLFxuICBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdyxcbiAgY2xhc3NlcyxcbiAgaW1hZ2VzXG59O1xuY29uc3QgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG5jbGFzcyBTd2lwZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgbGV0IGVsO1xuICAgIGxldCBwYXJhbXM7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnc1swXSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jykge1xuICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgW2VsLCBwYXJhbXNdID0gYXJncztcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcblxuICAgIGlmIChwYXJhbXMuZWwgJiYgJChwYXJhbXMuZWwpLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN3aXBlcnMgPSBbXTtcbiAgICAgICQocGFyYW1zLmVsKS5lYWNoKGNvbnRhaW5lckVsID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cblxuICAgICAgcmV0dXJuIHN3aXBlcnM7XG4gICAgfSAvLyBTd2lwZXIgSW5zdGFuY2VcblxuXG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuX19zd2lwZXJfXyA9IHRydWU7XG4gICAgc3dpcGVyLnN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gICAgc3dpcGVyLmRldmljZSA9IGdldERldmljZSh7XG4gICAgICB1c2VyQWdlbnQ6IHBhcmFtcy51c2VyQWdlbnRcbiAgICB9KTtcbiAgICBzd2lwZXIuYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcbiAgICBzd2lwZXIuZXZlbnRzTGlzdGVuZXJzID0ge307XG4gICAgc3dpcGVyLmV2ZW50c0FueUxpc3RlbmVycyA9IFtdO1xuICAgIHN3aXBlci5tb2R1bGVzID0gWy4uLnN3aXBlci5fX21vZHVsZXNfX107XG5cbiAgICBpZiAocGFyYW1zLm1vZHVsZXMgJiYgQXJyYXkuaXNBcnJheShwYXJhbXMubW9kdWxlcykpIHtcbiAgICAgIHN3aXBlci5tb2R1bGVzLnB1c2goLi4ucGFyYW1zLm1vZHVsZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbE1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICBzd2lwZXIubW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBtb2Qoe1xuICAgICAgICBzd2lwZXIsXG4gICAgICAgIGV4dGVuZFBhcmFtczogbW9kdWxlRXh0ZW5kUGFyYW1zKHBhcmFtcywgYWxsTW9kdWxlc1BhcmFtcyksXG4gICAgICAgIG9uOiBzd2lwZXIub24uYmluZChzd2lwZXIpLFxuICAgICAgICBvbmNlOiBzd2lwZXIub25jZS5iaW5kKHN3aXBlciksXG4gICAgICAgIG9mZjogc3dpcGVyLm9mZi5iaW5kKHN3aXBlciksXG4gICAgICAgIGVtaXQ6IHN3aXBlci5lbWl0LmJpbmQoc3dpcGVyKVxuICAgICAgfSk7XG4gICAgfSk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG5cbiAgICBjb25zdCBzd2lwZXJQYXJhbXMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBhbGxNb2R1bGVzUGFyYW1zKTsgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuXG4gICAgc3dpcGVyLnBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTsgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbikge1xuICAgICAgT2JqZWN0LmtleXMoc3dpcGVyLnBhcmFtcy5vbikuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICBzd2lwZXIub24oZXZlbnROYW1lLCBzd2lwZXIucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbkFueSkge1xuICAgICAgc3dpcGVyLm9uQW55KHN3aXBlci5wYXJhbXMub25BbnkpO1xuICAgIH0gLy8gU2F2ZSBEb20gbGliXG5cblxuICAgIHN3aXBlci4kID0gJDsgLy8gRXh0ZW5kIFN3aXBlclxuXG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICAgIGVuYWJsZWQ6IHN3aXBlci5wYXJhbXMuZW5hYmxlZCxcbiAgICAgIGVsLFxuICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lczogW10sXG4gICAgICAvLyBTbGlkZXNcbiAgICAgIHNsaWRlczogJCgpLFxuICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICBzbmFwR3JpZDogW10sXG4gICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuXG4gICAgICAvLyBpc0RpcmVjdGlvblxuICAgICAgaXNIb3Jpem9udGFsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIH0sXG5cbiAgICAgIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIH0sXG5cbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHM6IGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICBjb25zdCB0b3VjaCA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXTtcbiAgICAgICAgY29uc3QgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgIHN3aXBlci50b3VjaEV2ZW50c1RvdWNoID0ge1xuICAgICAgICAgIHN0YXJ0OiB0b3VjaFswXSxcbiAgICAgICAgICBtb3ZlOiB0b3VjaFsxXSxcbiAgICAgICAgICBlbmQ6IHRvdWNoWzJdLFxuICAgICAgICAgIGNhbmNlbDogdG91Y2hbM11cbiAgICAgICAgfTtcbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtcbiAgICAgICAgICBzdGFydDogZGVza3RvcFswXSxcbiAgICAgICAgICBtb3ZlOiBkZXNrdG9wWzFdLFxuICAgICAgICAgIGVuZDogZGVza3RvcFsyXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoIDogc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgIH0oKSxcbiAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgZm9jdXNhYmxlRWxlbWVudHM6IHN3aXBlci5wYXJhbXMuZm9jdXNhYmxlRWxlbWVudHMsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiBub3coKSxcbiAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFZlbG9jaXRpZXNcbiAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNUb3VjaEV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc3dpcGVyJyk7IC8vIEluaXRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgfSAvLyBSZXR1cm4gYXBwIGluc3RhbmNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuXG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZW5hYmxlJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rpc2FibGUnKTtcbiAgfVxuXG4gIHNldFByb2dyZXNzKHByb2dyZXNzLCBzcGVlZCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xuICAgIGNvbnN0IG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBjb25zdCBtYXggPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IChtYXggLSBtaW4pICogcHJvZ3Jlc3MgKyBtaW47XG4gICAgc3dpcGVyLnRyYW5zbGF0ZVRvKGN1cnJlbnQsIHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3BlZWQpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cblxuICBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNscyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbHMuam9pbignICcpKTtcbiAgfVxuXG4gIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuICcnO1xuICAgIHJldHVybiBzbGlkZUVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihjbGFzc05hbWUgPT4ge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItc2xpZGUnKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpID09PSAwO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGVtaXRTbGlkZXNDbGFzc2VzKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBzd2lwZXIuZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgc2xpZGVFbCxcbiAgICAgICAgY2xhc3NOYW1lc1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3MnLCBzbGlkZUVsLCBjbGFzc05hbWVzKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3NlcycsIHVwZGF0ZXMpO1xuICB9XG5cbiAgc2xpZGVzUGVyVmlld0R5bmFtaWModmlldyA9ICdjdXJyZW50JywgZXhhY3QgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc1NpemVzR3JpZCxcbiAgICAgIHNpemU6IHN3aXBlclNpemUsXG4gICAgICBhY3RpdmVJbmRleFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IHNwdiA9IDE7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBsZXQgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICBsZXQgYnJlYWtMb29wO1xuXG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHZpZXcgPT09ICdjdXJyZW50Jykge1xuICAgICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBleGFjdCA/IHNsaWRlc0dyaWRbaV0gKyBzbGlkZXNTaXplc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemUgOiBzbGlkZXNHcmlkW2ldIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplO1xuXG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHByZXZpb3VzXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSAtIHNsaWRlc0dyaWRbaV0gPCBzd2lwZXJTaXplO1xuXG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3B2O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjsgLy8gQnJlYWtwb2ludHNcblxuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgKiAtMSA6IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVWYWx1ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgdHJhbnNsYXRlZDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHN3aXBlci5wYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSA9IHRydWUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbjtcblxuICAgIGlmICghbmV3RGlyZWN0aW9uKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuXG4gICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtjdXJyZW50RGlyZWN0aW9ufWApLmFkZENsYXNzKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke25ld0RpcmVjdGlvbn1gKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBpZiAobmV3RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgIGlmIChuZWVkVXBkYXRlKSBzd2lwZXIudXBkYXRlKCk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIGNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5ydGwgJiYgZGlyZWN0aW9uID09PSAncnRsJyB8fCAhc3dpcGVyLnJ0bCAmJiBkaXJlY3Rpb24gPT09ICdsdHInKSByZXR1cm47XG4gICAgc3dpcGVyLnJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gICAgc3dpcGVyLnJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgc3dpcGVyLnJ0bDtcblxuICAgIGlmIChzd2lwZXIucnRsKSB7XG4gICAgICBzd2lwZXIuJGVsLmFkZENsYXNzKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ydGxgKTtcbiAgICAgIHN3aXBlci5lbC5kaXIgPSAncnRsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9cnRsYCk7XG4gICAgICBzd2lwZXIuZWwuZGlyID0gJ2x0cic7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgbW91bnQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIubW91bnRlZCkgcmV0dXJuIHRydWU7IC8vIEZpbmQgZWxcblxuICAgIGNvbnN0ICRlbCA9ICQoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuXG4gICAgY29uc3QgZ2V0V3JhcHBlclNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGAuJHsoc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MgfHwgJycpLnRyaW0oKS5zcGxpdCgnICcpLmpvaW4oJy4nKX1gO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9ICQoZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKSk7IC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG5cbiAgICAgICAgcmVzLmNoaWxkcmVuID0gb3B0aW9ucyA9PiAkZWwuY2hpbGRyZW4ob3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaWYgKCEkZWwuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuICQoJGVsKS5jaGlsZHJlbihnZXRXcmFwcGVyU2VsZWN0b3IoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkZWwuY2hpbGRyZW4oZ2V0V3JhcHBlclNlbGVjdG9yKCkpO1xuICAgIH07IC8vIEZpbmQgV3JhcHBlclxuXG5cbiAgICBsZXQgJHdyYXBwZXJFbCA9IGdldFdyYXBwZXIoKTtcblxuICAgIGlmICgkd3JhcHBlckVsLmxlbmd0aCA9PT0gMCAmJiBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAkd3JhcHBlckVsID0gJCh3cmFwcGVyKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3M7XG4gICAgICAkZWwuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgJGVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkuZWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgJGVsLFxuICAgICAgZWwsXG4gICAgICAkd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiBlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcnRsVHJhbnNsYXRlOiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgIHdyb25nUlRMOiAkd3JhcHBlckVsLmNzcygnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0KGVsKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm4gc3dpcGVyO1xuICAgIGNvbnN0IG1vdW50ZWQgPSBzd2lwZXIubW91bnQoZWwpO1xuICAgIGlmIChtb3VudGVkID09PSBmYWxzZSkgcmV0dXJuIHN3aXBlcjtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlSW5pdCcpOyAvLyBTZXQgYnJlYWtwb2ludFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfSAvLyBBZGQgQ2xhc3Nlc1xuXG5cbiAgICBzd2lwZXIuYWRkQ2xhc3NlcygpOyAvLyBDcmVhdGUgbG9vcFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9IC8vIFVwZGF0ZSBzaXplXG5cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7IC8vIFVwZGF0ZSBzbGlkZXNcblxuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfSAvLyBTZXQgR3JhYiBDdXJzb3JcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvciAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICBzd2lwZXIucHJlbG9hZEltYWdlcygpO1xuICAgIH0gLy8gU2xpZGUgVG8gSW5pdGlhbCBTbGlkZVxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH0gLy8gQXR0YWNoIGV2ZW50c1xuXG5cbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTsgLy8gRW1pdFxuXG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIGRlc3Ryb3koZGVsZXRlSW5zdGFuY2UgPSB0cnVlLCBjbGVhblN0eWxlcyA9IHRydWUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgICRlbCxcbiAgICAgICR3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlOyAvLyBEZXRhY2ggZXZlbnRzXG5cbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7IC8vIERlc3Ryb3kgbG9vcFxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9IC8vIENsZWFudXAgc3R5bGVzXG5cblxuICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgJHdyYXBwZXJFbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLnJlbW92ZUNsYXNzKFtwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzc10uam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTsgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBzd2lwZXIub2ZmKGV2ZW50TmFtZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICBzd2lwZXIuJGVsWzBdLnN3aXBlciA9IG51bGw7XG4gICAgICBkZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgIH1cblxuICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gICAgZXh0ZW5kKGV4dGVuZGVkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZXh0ZW5kZWREZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbGxNb2R1bGUobW9kKSB7XG4gICAgaWYgKCFTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fKSBTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fID0gW107XG4gICAgY29uc3QgbW9kdWxlcyA9IFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX187XG5cbiAgICBpZiAodHlwZW9mIG1vZCA9PT0gJ2Z1bmN0aW9uJyAmJiBtb2R1bGVzLmluZGV4T2YobW9kKSA8IDApIHtcbiAgICAgIG1vZHVsZXMucHVzaChtb2QpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1c2UobW9kdWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2gobSA9PiBTd2lwZXIuaW5zdGFsbE1vZHVsZShtKSk7XG4gICAgICByZXR1cm4gU3dpcGVyO1xuICAgIH1cblxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfVxuXG59XG5cbk9iamVjdC5rZXlzKHByb3RvdHlwZXMpLmZvckVhY2gocHJvdG90eXBlR3JvdXAgPT4ge1xuICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChwcm90b01ldGhvZCA9PiB7XG4gICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gIH0pO1xufSk7XG5Td2lwZXIudXNlKFtSZXNpemUsIE9ic2VydmVyXSk7XG5leHBvcnQgZGVmYXVsdCBTd2lwZXI7IiwiZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc3JjKSB7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG4gIE9iamVjdC5rZXlzKHNyYykuZmlsdGVyKGtleSA9PiBub0V4dGVuZC5pbmRleE9mKGtleSkgPCAwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHRhcmdldFtrZXldID0gc3JjW2tleV07ZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHNyY1trZXldLl9fc3dpcGVyX18pIHRhcmdldFtrZXldID0gc3JjW2tleV07ZWxzZSBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuZWVkc05hdmlnYXRpb24ocGFyYW1zID0ge30pIHtcbiAgcmV0dXJuIHBhcmFtcy5uYXZpZ2F0aW9uICYmIHR5cGVvZiBwYXJhbXMubmF2aWdhdGlvbi5uZXh0RWwgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJhbXMubmF2aWdhdGlvbi5wcmV2RWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBuZWVkc1BhZ2luYXRpb24ocGFyYW1zID0ge30pIHtcbiAgcmV0dXJuIHBhcmFtcy5wYWdpbmF0aW9uICYmIHR5cGVvZiBwYXJhbXMucGFnaW5hdGlvbi5lbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIG5lZWRzU2Nyb2xsYmFyKHBhcmFtcyA9IHt9KSB7XG4gIHJldHVybiBwYXJhbXMuc2Nyb2xsYmFyICYmIHR5cGVvZiBwYXJhbXMuc2Nyb2xsYmFyLmVsID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gdW5pcXVlQ2xhc3NlcyhjbGFzc05hbWVzID0gJycpIHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5tYXAoYyA9PiBjLnRyaW0oKSkuZmlsdGVyKGMgPT4gISFjKTtcbiAgY29uc3QgdW5pcXVlID0gW107XG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICBpZiAodW5pcXVlLmluZGV4T2YoYykgPCAwKSB1bmlxdWUucHVzaChjKTtcbiAgfSk7XG4gIHJldHVybiB1bmlxdWUuam9pbignICcpO1xufVxuXG5leHBvcnQgeyBpc09iamVjdCwgZXh0ZW5kLCBuZWVkc05hdmlnYXRpb24sIG5lZWRzUGFnaW5hdGlvbiwgbmVlZHNTY3JvbGxiYXIsIHVuaXF1ZUNsYXNzZXMgfTsiLCIvKiB1bmRlcnNjb3JlIGluIG5hbWUgLT4gd2F0Y2ggZm9yIGNoYW5nZXMgKi9cbmNvbnN0IHBhcmFtc0xpc3QgPSBbJ21vZHVsZXMnLCAnaW5pdCcsICdfZGlyZWN0aW9uJywgJ3RvdWNoRXZlbnRzVGFyZ2V0JywgJ2luaXRpYWxTbGlkZScsICdfc3BlZWQnLCAnY3NzTW9kZScsICd1cGRhdGVPbldpbmRvd1Jlc2l6ZScsICdyZXNpemVPYnNlcnZlcicsICduZXN0ZWQnLCAnZm9jdXNhYmxlRWxlbWVudHMnLCAnX2VuYWJsZWQnLCAnX3dpZHRoJywgJ19oZWlnaHQnLCAncHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uJywgJ3VzZXJBZ2VudCcsICd1cmwnLCAnX2VkZ2VTd2lwZURldGVjdGlvbicsICdfZWRnZVN3aXBlVGhyZXNob2xkJywgJ19mcmVlTW9kZScsICdfYXV0b0hlaWdodCcsICdzZXRXcmFwcGVyU2l6ZScsICd2aXJ0dWFsVHJhbnNsYXRlJywgJ19lZmZlY3QnLCAnYnJlYWtwb2ludHMnLCAnX3NwYWNlQmV0d2VlbicsICdfc2xpZGVzUGVyVmlldycsICdtYXhCYWNrZmFjZUhpZGRlblNsaWRlcycsICdfZ3JpZCcsICdfc2xpZGVzUGVyR3JvdXAnLCAnX3NsaWRlc1Blckdyb3VwU2tpcCcsICdfc2xpZGVzUGVyR3JvdXBBdXRvJywgJ19jZW50ZXJlZFNsaWRlcycsICdfY2VudGVyZWRTbGlkZXNCb3VuZHMnLCAnX3NsaWRlc09mZnNldEJlZm9yZScsICdfc2xpZGVzT2Zmc2V0QWZ0ZXInLCAnbm9ybWFsaXplU2xpZGVJbmRleCcsICdfY2VudGVySW5zdWZmaWNpZW50U2xpZGVzJywgJ193YXRjaE92ZXJmbG93JywgJ3JvdW5kTGVuZ3RocycsICd0b3VjaFJhdGlvJywgJ3RvdWNoQW5nbGUnLCAnc2ltdWxhdGVUb3VjaCcsICdfc2hvcnRTd2lwZXMnLCAnX2xvbmdTd2lwZXMnLCAnbG9uZ1N3aXBlc1JhdGlvJywgJ2xvbmdTd2lwZXNNcycsICdfZm9sbG93RmluZ2VyJywgJ2FsbG93VG91Y2hNb3ZlJywgJ190aHJlc2hvbGQnLCAndG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uJywgJ3RvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCcsICd0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCcsICd0b3VjaFJlbGVhc2VPbkVkZ2VzJywgJ3VuaXF1ZU5hdkVsZW1lbnRzJywgJ19yZXNpc3RhbmNlJywgJ19yZXNpc3RhbmNlUmF0aW8nLCAnX3dhdGNoU2xpZGVzUHJvZ3Jlc3MnLCAnX2dyYWJDdXJzb3InLCAncHJldmVudENsaWNrcycsICdwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24nLCAnX3NsaWRlVG9DbGlja2VkU2xpZGUnLCAnX3ByZWxvYWRJbWFnZXMnLCAndXBkYXRlT25JbWFnZXNSZWFkeScsICdfbG9vcCcsICdfbG9vcEFkZGl0aW9uYWxTbGlkZXMnLCAnX2xvb3BlZFNsaWRlcycsICdfbG9vcGVkU2xpZGVzTGltaXQnLCAnX2xvb3BGaWxsR3JvdXBXaXRoQmxhbmsnLCAnbG9vcFByZXZlbnRzU2xpZGUnLCAnX3Jld2luZCcsICdfYWxsb3dTbGlkZVByZXYnLCAnX2FsbG93U2xpZGVOZXh0JywgJ19zd2lwZUhhbmRsZXInLCAnX25vU3dpcGluZycsICdub1N3aXBpbmdDbGFzcycsICdub1N3aXBpbmdTZWxlY3RvcicsICdwYXNzaXZlTGlzdGVuZXJzJywgJ2NvbnRhaW5lck1vZGlmaWVyQ2xhc3MnLCAnc2xpZGVDbGFzcycsICdzbGlkZUJsYW5rQ2xhc3MnLCAnc2xpZGVBY3RpdmVDbGFzcycsICdzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzJywgJ3NsaWRlVmlzaWJsZUNsYXNzJywgJ3NsaWRlRHVwbGljYXRlQ2xhc3MnLCAnc2xpZGVOZXh0Q2xhc3MnLCAnc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MnLCAnc2xpZGVQcmV2Q2xhc3MnLCAnc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MnLCAnd3JhcHBlckNsYXNzJywgJ3J1bkNhbGxiYWNrc09uSW5pdCcsICdvYnNlcnZlcicsICdvYnNlcnZlUGFyZW50cycsICdvYnNlcnZlU2xpZGVDaGlsZHJlbicsIC8vIG1vZHVsZXNcbidhMTF5JywgJ19hdXRvcGxheScsICdfY29udHJvbGxlcicsICdjb3ZlcmZsb3dFZmZlY3QnLCAnY3ViZUVmZmVjdCcsICdmYWRlRWZmZWN0JywgJ2ZsaXBFZmZlY3QnLCAnY3JlYXRpdmVFZmZlY3QnLCAnY2FyZHNFZmZlY3QnLCAnaGFzaE5hdmlnYXRpb24nLCAnaGlzdG9yeScsICdrZXlib2FyZCcsICdsYXp5JywgJ21vdXNld2hlZWwnLCAnX25hdmlnYXRpb24nLCAnX3BhZ2luYXRpb24nLCAncGFyYWxsYXgnLCAnX3Njcm9sbGJhcicsICdfdGh1bWJzJywgJ3ZpcnR1YWwnLCAnem9vbSddO1xuZXhwb3J0IHsgcGFyYW1zTGlzdCB9OyIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IGlzT2JqZWN0LCBleHRlbmQgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcmFtc0xpc3QgfSBmcm9tICcuL3BhcmFtcy1saXN0LmpzJztcblxuZnVuY3Rpb24gZ2V0UGFyYW1zKG9iaiA9IHt9LCBzcGxpdEV2ZW50cyA9IHRydWUpIHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG9uOiB7fVxuICB9O1xuICBjb25zdCBldmVudHMgPSB7fTtcbiAgY29uc3QgcGFzc2VkUGFyYW1zID0ge307XG4gIGV4dGVuZChwYXJhbXMsIFN3aXBlci5kZWZhdWx0cyk7XG4gIGV4dGVuZChwYXJhbXMsIFN3aXBlci5leHRlbmRlZERlZmF1bHRzKTtcbiAgcGFyYW1zLl9lbWl0Q2xhc3NlcyA9IHRydWU7XG4gIHBhcmFtcy5pbml0ID0gZmFsc2U7XG4gIGNvbnN0IHJlc3QgPSB7fTtcbiAgY29uc3QgYWxsb3dlZFBhcmFtcyA9IHBhcmFtc0xpc3QubWFwKGtleSA9PiBrZXkucmVwbGFjZSgvXy8sICcnKSk7XG4gIGNvbnN0IHBsYWluT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcbiAgT2JqZWN0LmtleXMocGxhaW5PYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgaWYgKGFsbG93ZWRQYXJhbXMuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcbiAgICAgICAgcGFyYW1zW2tleV0gPSB7fTtcbiAgICAgICAgcGFzc2VkUGFyYW1zW2tleV0gPSB7fTtcbiAgICAgICAgZXh0ZW5kKHBhcmFtc1trZXldLCBvYmpba2V5XSk7XG4gICAgICAgIGV4dGVuZChwYXNzZWRQYXJhbXNba2V5XSwgb2JqW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgcGFzc2VkUGFyYW1zW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleS5zZWFyY2goL29uW0EtWl0vKSA9PT0gMCAmJiB0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChzcGxpdEV2ZW50cykge1xuICAgICAgICBldmVudHNbYCR7a2V5WzJdLnRvTG93ZXJDYXNlKCl9JHtrZXkuc3Vic3RyKDMpfWBdID0gb2JqW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMub25bYCR7a2V5WzJdLnRvTG93ZXJDYXNlKCl9JHtrZXkuc3Vic3RyKDMpfWBdID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3Rba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIFsnbmF2aWdhdGlvbicsICdwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAocGFyYW1zW2tleV0gPT09IHRydWUpIHBhcmFtc1trZXldID0ge307XG4gICAgaWYgKHBhcmFtc1trZXldID09PSBmYWxzZSkgZGVsZXRlIHBhcmFtc1trZXldO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGFzc2VkUGFyYW1zLFxuICAgIHJlc3QsXG4gICAgZXZlbnRzXG4gIH07XG59XG5cbmV4cG9ydCB7IGdldFBhcmFtcyB9OyIsImltcG9ydCB7IG5lZWRzTmF2aWdhdGlvbiwgbmVlZHNQYWdpbmF0aW9uLCBuZWVkc1Njcm9sbGJhciB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5mdW5jdGlvbiBtb3VudFN3aXBlcih7XG4gIGVsLFxuICBuZXh0RWwsXG4gIHByZXZFbCxcbiAgcGFnaW5hdGlvbkVsLFxuICBzY3JvbGxiYXJFbCxcbiAgc3dpcGVyXG59LCBzd2lwZXJQYXJhbXMpIHtcbiAgaWYgKG5lZWRzTmF2aWdhdGlvbihzd2lwZXJQYXJhbXMpICYmIG5leHRFbCAmJiBwcmV2RWwpIHtcbiAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmV4dEVsID0gbmV4dEVsO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy5uYXZpZ2F0aW9uLm5leHRFbCA9IG5leHRFbDtcbiAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ucHJldkVsID0gcHJldkVsO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy5uYXZpZ2F0aW9uLnByZXZFbCA9IHByZXZFbDtcbiAgfVxuXG4gIGlmIChuZWVkc1BhZ2luYXRpb24oc3dpcGVyUGFyYW1zKSAmJiBwYWdpbmF0aW9uRWwpIHtcbiAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgPSBwYWdpbmF0aW9uRWw7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLnBhZ2luYXRpb24uZWwgPSBwYWdpbmF0aW9uRWw7XG4gIH1cblxuICBpZiAobmVlZHNTY3JvbGxiYXIoc3dpcGVyUGFyYW1zKSAmJiBzY3JvbGxiYXJFbCkge1xuICAgIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsID0gc2Nyb2xsYmFyRWw7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLnNjcm9sbGJhci5lbCA9IHNjcm9sbGJhckVsO1xuICB9XG5cbiAgc3dpcGVyLmluaXQoZWwpO1xufVxuXG5leHBvcnQgeyBtb3VudFN3aXBlciB9OyIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmV4cG9ydCBjb25zdCBjYWxjTG9vcGVkU2xpZGVzID0gKHNsaWRlcywgc3dpcGVyUGFyYW1zKSA9PiB7XG4gIGxldCBzbGlkZXNQZXJWaWV3UGFyYW1zID0gc3dpcGVyUGFyYW1zLnNsaWRlc1BlclZpZXc7XG5cbiAgaWYgKHN3aXBlclBhcmFtcy5icmVha3BvaW50cykge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBTd2lwZXIucHJvdG90eXBlLmdldEJyZWFrcG9pbnQoc3dpcGVyUGFyYW1zLmJyZWFrcG9pbnRzKTtcbiAgICBjb25zdCBicmVha3BvaW50T25seVBhcmFtcyA9IGJyZWFrcG9pbnQgaW4gc3dpcGVyUGFyYW1zLmJyZWFrcG9pbnRzID8gc3dpcGVyUGFyYW1zLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zICYmIGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgIHNsaWRlc1BlclZpZXdQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIH1cbiAgfVxuXG4gIGxldCBsb29wZWRTbGlkZXMgPSBNYXRoLmNlaWwocGFyc2VGbG9hdChzd2lwZXJQYXJhbXMubG9vcGVkU2xpZGVzIHx8IHNsaWRlc1BlclZpZXdQYXJhbXMsIDEwKSk7XG4gIGxvb3BlZFNsaWRlcyArPSBzd2lwZXJQYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG5cbiAgaWYgKGxvb3BlZFNsaWRlcyA+IHNsaWRlcy5sZW5ndGggJiYgc3dpcGVyUGFyYW1zLmxvb3BlZFNsaWRlc0xpbWl0KSB7XG4gICAgbG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBsb29wZWRTbGlkZXM7XG59OyIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY2FsY0xvb3BlZFNsaWRlcyB9IGZyb20gJy4uL3NoYXJlZC9jYWxjLWxvb3BlZC1zbGlkZXMuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJMb29wKHN3aXBlclJlZiwgc2xpZGVzLCBzd2lwZXJQYXJhbXMpIHtcbiAgY29uc3QgbW9kaWZpZWRTbGlkZXMgPSBzbGlkZXMubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWNoaWxkLnByb3BzKSBjaGlsZC5wcm9wcyA9IHt9O1xuICAgIGNoaWxkLnByb3BzLnN3aXBlclJlZiA9IHN3aXBlclJlZjtcbiAgICBjaGlsZC5wcm9wc1snZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnXSA9IGluZGV4O1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZHVwbGljYXRlU2xpZGUoY2hpbGQsIGluZGV4LCBwb3NpdGlvbikge1xuICAgIGlmICghY2hpbGQucHJvcHMpIGNoaWxkLnByb3BzID0ge307XG4gICAgcmV0dXJuIGgoY2hpbGQudHlwZSwgeyAuLi5jaGlsZC5wcm9wcyxcbiAgICAgIGtleTogYCR7Y2hpbGQua2V5fS1kdXBsaWNhdGUtJHtpbmRleH0tJHtwb3NpdGlvbn1gLFxuICAgICAgY2xhc3M6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30gJHtzd2lwZXJQYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30gJHtjaGlsZC5wcm9wcy5jbGFzcyB8fCAnJ31gXG4gICAgfSwgY2hpbGQuY2hpbGRyZW4pO1xuICB9XG5cbiAgaWYgKHN3aXBlclBhcmFtcy5sb29wRmlsbEdyb3VwV2l0aEJsYW5rKSB7XG4gICAgY29uc3QgYmxhbmtTbGlkZXNOdW0gPSBzd2lwZXJQYXJhbXMuc2xpZGVzUGVyR3JvdXAgLSBtb2RpZmllZFNsaWRlcy5sZW5ndGggJSBzd2lwZXJQYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAoYmxhbmtTbGlkZXNOdW0gIT09IHN3aXBlclBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGJsYW5rU2xpZGUgPSBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGAke3N3aXBlclBhcmFtcy5zbGlkZUNsYXNzfSAke3N3aXBlclBhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kaWZpZWRTbGlkZXMucHVzaChibGFua1NsaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3dpcGVyUGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiAhc3dpcGVyUGFyYW1zLmxvb3BlZFNsaWRlcykge1xuICAgIHN3aXBlclBhcmFtcy5sb29wZWRTbGlkZXMgPSBtb2RpZmllZFNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBsb29wZWRTbGlkZXMgPSBjYWxjTG9vcGVkU2xpZGVzKG1vZGlmaWVkU2xpZGVzLCBzd2lwZXJQYXJhbXMpO1xuICBjb25zdCBwcmVwZW5kU2xpZGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcGVkU2xpZGVzOyBpICs9IDEpIHtcbiAgICBjb25zdCBpbmRleCA9IGkgLSBNYXRoLmZsb29yKGkgLyBtb2RpZmllZFNsaWRlcy5sZW5ndGgpICogbW9kaWZpZWRTbGlkZXMubGVuZ3RoO1xuICAgIGFwcGVuZFNsaWRlcy5wdXNoKGR1cGxpY2F0ZVNsaWRlKG1vZGlmaWVkU2xpZGVzW2luZGV4XSwgaSwgJ2FwcGVuZCcpKTtcbiAgICBwcmVwZW5kU2xpZGVzLnVuc2hpZnQoZHVwbGljYXRlU2xpZGUobW9kaWZpZWRTbGlkZXNbbW9kaWZpZWRTbGlkZXMubGVuZ3RoIC0gaW5kZXggLSAxXSwgaSwgJ3ByZXBlbmQnKSk7XG4gIH1cblxuICBpZiAoc3dpcGVyUmVmLnZhbHVlKSB7XG4gICAgc3dpcGVyUmVmLnZhbHVlLmxvb3BlZFNsaWRlcyA9IGxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHJldHVybiBbLi4ucHJlcGVuZFNsaWRlcywgLi4ubW9kaWZpZWRTbGlkZXMsIC4uLmFwcGVuZFNsaWRlc107XG59XG5cbmV4cG9ydCB7IGNhbGNMb29wZWRTbGlkZXMsIHJlbmRlckxvb3AgfTsiLCJpbXBvcnQgeyBwYXJhbXNMaXN0IH0gZnJvbSAnLi9wYXJhbXMtbGlzdC5qcyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5mdW5jdGlvbiBnZXRDaGFuZ2VkUGFyYW1zKHN3aXBlclBhcmFtcywgb2xkUGFyYW1zLCBjaGlsZHJlbiwgb2xkQ2hpbGRyZW4sIGdldEtleSkge1xuICBjb25zdCBrZXlzID0gW107XG4gIGlmICghb2xkUGFyYW1zKSByZXR1cm4ga2V5cztcblxuICBjb25zdCBhZGRLZXkgPSBrZXkgPT4ge1xuICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA8IDApIGtleXMucHVzaChrZXkpO1xuICB9O1xuXG4gIGlmIChjaGlsZHJlbiAmJiBvbGRDaGlsZHJlbikge1xuICAgIGNvbnN0IG9sZENoaWxkcmVuS2V5cyA9IG9sZENoaWxkcmVuLm1hcChnZXRLZXkpO1xuICAgIGNvbnN0IGNoaWxkcmVuS2V5cyA9IGNoaWxkcmVuLm1hcChnZXRLZXkpO1xuICAgIGlmIChvbGRDaGlsZHJlbktleXMuam9pbignJykgIT09IGNoaWxkcmVuS2V5cy5qb2luKCcnKSkgYWRkS2V5KCdjaGlsZHJlbicpO1xuICAgIGlmIChvbGRDaGlsZHJlbi5sZW5ndGggIT09IGNoaWxkcmVuLmxlbmd0aCkgYWRkS2V5KCdjaGlsZHJlbicpO1xuICB9XG5cbiAgY29uc3Qgd2F0Y2hQYXJhbXMgPSBwYXJhbXNMaXN0LmZpbHRlcihrZXkgPT4ga2V5WzBdID09PSAnXycpLm1hcChrZXkgPT4ga2V5LnJlcGxhY2UoL18vLCAnJykpO1xuICB3YXRjaFBhcmFtcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGtleSBpbiBzd2lwZXJQYXJhbXMgJiYga2V5IGluIG9sZFBhcmFtcykge1xuICAgICAgaWYgKGlzT2JqZWN0KHN3aXBlclBhcmFtc1trZXldKSAmJiBpc09iamVjdChvbGRQYXJhbXNba2V5XSkpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKHN3aXBlclBhcmFtc1trZXldKTtcbiAgICAgICAgY29uc3Qgb2xkS2V5cyA9IE9iamVjdC5rZXlzKG9sZFBhcmFtc1trZXldKTtcblxuICAgICAgICBpZiAobmV3S2V5cy5sZW5ndGggIT09IG9sZEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgYWRkS2V5KGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5cy5mb3JFYWNoKG5ld0tleSA9PiB7XG4gICAgICAgICAgICBpZiAoc3dpcGVyUGFyYW1zW2tleV1bbmV3S2V5XSAhPT0gb2xkUGFyYW1zW2tleV1bbmV3S2V5XSkge1xuICAgICAgICAgICAgICBhZGRLZXkoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvbGRLZXlzLmZvckVhY2gob2xkS2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChzd2lwZXJQYXJhbXNba2V5XVtvbGRLZXldICE9PSBvbGRQYXJhbXNba2V5XVtvbGRLZXldKSBhZGRLZXkoa2V5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzd2lwZXJQYXJhbXNba2V5XSAhPT0gb2xkUGFyYW1zW2tleV0pIHtcbiAgICAgICAgYWRkS2V5KGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCB7IGdldENoYW5nZWRQYXJhbXMgfTsiLCJmdW5jdGlvbiBnZXRDaGlsZHJlbihvcmlnaW5hbFNsb3RzLCBzbGlkZXNSZWYsIG9sZFNsaWRlc1JlZikge1xuICBpZiAob3JpZ2luYWxTbG90cyA9PT0gdm9pZCAwKSB7XG4gICAgb3JpZ2luYWxTbG90cyA9IHt9O1xuICB9XG5cbiAgY29uc3Qgc2xpZGVzID0gW107XG4gIGNvbnN0IHNsb3RzID0ge1xuICAgICdjb250YWluZXItc3RhcnQnOiBbXSxcbiAgICAnY29udGFpbmVyLWVuZCc6IFtdLFxuICAgICd3cmFwcGVyLXN0YXJ0JzogW10sXG4gICAgJ3dyYXBwZXItZW5kJzogW11cbiAgfTtcblxuICBjb25zdCBnZXRTbGlkZXNGcm9tRWxlbWVudHMgPSAoZWxzLCBzbG90TmFtZSkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxzLmZvckVhY2godm5vZGUgPT4ge1xuICAgICAgY29uc3QgaXNGcmFnbWVudCA9IHR5cGVvZiB2bm9kZS50eXBlID09PSAnc3ltYm9sJztcbiAgICAgIGlmIChzbG90TmFtZSA9PT0gJ2RlZmF1bHQnKSBzbG90TmFtZSA9ICdjb250YWluZXItZW5kJztcblxuICAgICAgaWYgKGlzRnJhZ21lbnQgJiYgdm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgZ2V0U2xpZGVzRnJvbUVsZW1lbnRzKHZub2RlLmNoaWxkcmVuLCAnZGVmYXVsdCcpO1xuICAgICAgfSBlbHNlIGlmICh2bm9kZS50eXBlICYmICh2bm9kZS50eXBlLm5hbWUgPT09ICdTd2lwZXJTbGlkZScgfHwgdm5vZGUudHlwZS5uYW1lID09PSAnQXN5bmNDb21wb25lbnRXcmFwcGVyJykpIHtcbiAgICAgICAgc2xpZGVzLnB1c2godm5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChzbG90c1tzbG90TmFtZV0pIHtcbiAgICAgICAgc2xvdHNbc2xvdE5hbWVdLnB1c2godm5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5rZXlzKG9yaWdpbmFsU2xvdHMpLmZvckVhY2goc2xvdE5hbWUgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxTbG90c1tzbG90TmFtZV0gIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICBjb25zdCBlbHMgPSBvcmlnaW5hbFNsb3RzW3Nsb3ROYW1lXSgpO1xuICAgIGdldFNsaWRlc0Zyb21FbGVtZW50cyhlbHMsIHNsb3ROYW1lKTtcbiAgfSk7XG4gIG9sZFNsaWRlc1JlZi52YWx1ZSA9IHNsaWRlc1JlZi52YWx1ZTtcbiAgc2xpZGVzUmVmLnZhbHVlID0gc2xpZGVzO1xuICByZXR1cm4ge1xuICAgIHNsaWRlcyxcbiAgICBzbG90c1xuICB9O1xufVxuXG5leHBvcnQgeyBnZXRDaGlsZHJlbiB9OyIsImltcG9ydCB7IGlzT2JqZWN0LCBleHRlbmQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZnVuY3Rpb24gdXBkYXRlU3dpcGVyKHtcbiAgc3dpcGVyLFxuICBzbGlkZXMsXG4gIHBhc3NlZFBhcmFtcyxcbiAgY2hhbmdlZFBhcmFtcyxcbiAgbmV4dEVsLFxuICBwcmV2RWwsXG4gIHNjcm9sbGJhckVsLFxuICBwYWdpbmF0aW9uRWxcbn0pIHtcbiAgY29uc3QgdXBkYXRlUGFyYW1zID0gY2hhbmdlZFBhcmFtcy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdkaXJlY3Rpb24nKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtczogY3VycmVudFBhcmFtcyxcbiAgICBwYWdpbmF0aW9uLFxuICAgIG5hdmlnYXRpb24sXG4gICAgc2Nyb2xsYmFyLFxuICAgIHZpcnR1YWwsXG4gICAgdGh1bWJzXG4gIH0gPSBzd2lwZXI7XG4gIGxldCBuZWVkVGh1bWJzSW5pdDtcbiAgbGV0IG5lZWRDb250cm9sbGVySW5pdDtcbiAgbGV0IG5lZWRQYWdpbmF0aW9uSW5pdDtcbiAgbGV0IG5lZWRTY3JvbGxiYXJJbml0O1xuICBsZXQgbmVlZE5hdmlnYXRpb25Jbml0O1xuXG4gIGlmIChjaGFuZ2VkUGFyYW1zLmluY2x1ZGVzKCd0aHVtYnMnKSAmJiBwYXNzZWRQYXJhbXMudGh1bWJzICYmIHBhc3NlZFBhcmFtcy50aHVtYnMuc3dpcGVyICYmIGN1cnJlbnRQYXJhbXMudGh1bWJzICYmICFjdXJyZW50UGFyYW1zLnRodW1icy5zd2lwZXIpIHtcbiAgICBuZWVkVGh1bWJzSW5pdCA9IHRydWU7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygnY29udHJvbGxlcicpICYmIHBhc3NlZFBhcmFtcy5jb250cm9sbGVyICYmIHBhc3NlZFBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wgJiYgY3VycmVudFBhcmFtcy5jb250cm9sbGVyICYmICFjdXJyZW50UGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbCkge1xuICAgIG5lZWRDb250cm9sbGVySW5pdCA9IHRydWU7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygncGFnaW5hdGlvbicpICYmIHBhc3NlZFBhcmFtcy5wYWdpbmF0aW9uICYmIChwYXNzZWRQYXJhbXMucGFnaW5hdGlvbi5lbCB8fCBwYWdpbmF0aW9uRWwpICYmIChjdXJyZW50UGFyYW1zLnBhZ2luYXRpb24gfHwgY3VycmVudFBhcmFtcy5wYWdpbmF0aW9uID09PSBmYWxzZSkgJiYgcGFnaW5hdGlvbiAmJiAhcGFnaW5hdGlvbi5lbCkge1xuICAgIG5lZWRQYWdpbmF0aW9uSW5pdCA9IHRydWU7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygnc2Nyb2xsYmFyJykgJiYgcGFzc2VkUGFyYW1zLnNjcm9sbGJhciAmJiAocGFzc2VkUGFyYW1zLnNjcm9sbGJhci5lbCB8fCBzY3JvbGxiYXJFbCkgJiYgKGN1cnJlbnRQYXJhbXMuc2Nyb2xsYmFyIHx8IGN1cnJlbnRQYXJhbXMuc2Nyb2xsYmFyID09PSBmYWxzZSkgJiYgc2Nyb2xsYmFyICYmICFzY3JvbGxiYXIuZWwpIHtcbiAgICBuZWVkU2Nyb2xsYmFySW5pdCA9IHRydWU7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygnbmF2aWdhdGlvbicpICYmIHBhc3NlZFBhcmFtcy5uYXZpZ2F0aW9uICYmIChwYXNzZWRQYXJhbXMubmF2aWdhdGlvbi5wcmV2RWwgfHwgcHJldkVsKSAmJiAocGFzc2VkUGFyYW1zLm5hdmlnYXRpb24ubmV4dEVsIHx8IG5leHRFbCkgJiYgKGN1cnJlbnRQYXJhbXMubmF2aWdhdGlvbiB8fCBjdXJyZW50UGFyYW1zLm5hdmlnYXRpb24gPT09IGZhbHNlKSAmJiBuYXZpZ2F0aW9uICYmICFuYXZpZ2F0aW9uLnByZXZFbCAmJiAhbmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICBuZWVkTmF2aWdhdGlvbkluaXQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVzdHJveU1vZHVsZSA9IG1vZCA9PiB7XG4gICAgaWYgKCFzd2lwZXJbbW9kXSkgcmV0dXJuO1xuICAgIHN3aXBlclttb2RdLmRlc3Ryb3koKTtcblxuICAgIGlmIChtb2QgPT09ICduYXZpZ2F0aW9uJykge1xuICAgICAgY3VycmVudFBhcmFtc1ttb2RdLnByZXZFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGN1cnJlbnRQYXJhbXNbbW9kXS5uZXh0RWwgPSB1bmRlZmluZWQ7XG4gICAgICBzd2lwZXJbbW9kXS5wcmV2RWwgPSB1bmRlZmluZWQ7XG4gICAgICBzd2lwZXJbbW9kXS5uZXh0RWwgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQYXJhbXNbbW9kXS5lbCA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXBlclttb2RdLmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVQYXJhbXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChpc09iamVjdChjdXJyZW50UGFyYW1zW2tleV0pICYmIGlzT2JqZWN0KHBhc3NlZFBhcmFtc1trZXldKSkge1xuICAgICAgZXh0ZW5kKGN1cnJlbnRQYXJhbXNba2V5XSwgcGFzc2VkUGFyYW1zW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhc3NlZFBhcmFtc1trZXldO1xuXG4gICAgICBpZiAoKG5ld1ZhbHVlID09PSB0cnVlIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkgJiYgKGtleSA9PT0gJ25hdmlnYXRpb24nIHx8IGtleSA9PT0gJ3BhZ2luYXRpb24nIHx8IGtleSA9PT0gJ3Njcm9sbGJhcicpKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBkZXN0cm95TW9kdWxlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHBhc3NlZFBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHVwZGF0ZVBhcmFtcy5pbmNsdWRlcygnY29udHJvbGxlcicpICYmICFuZWVkQ29udHJvbGxlckluaXQgJiYgc3dpcGVyLmNvbnRyb2xsZXIgJiYgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCAmJiBjdXJyZW50UGFyYW1zLmNvbnRyb2xsZXIgJiYgY3VycmVudFBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wpIHtcbiAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sID0gY3VycmVudFBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2w7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygnY2hpbGRyZW4nKSAmJiBzbGlkZXMgJiYgdmlydHVhbCAmJiBjdXJyZW50UGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgIHZpcnR1YWwuc2xpZGVzID0gc2xpZGVzO1xuICAgIHZpcnR1YWwudXBkYXRlKHRydWUpO1xuICB9IGVsc2UgaWYgKGNoYW5nZWRQYXJhbXMuaW5jbHVkZXMoJ2NoaWxkcmVuJykgJiYgc3dpcGVyLmxhenkgJiYgc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gIH1cblxuICBpZiAobmVlZFRodW1ic0luaXQpIHtcbiAgICBjb25zdCBpbml0aWFsaXplZCA9IHRodW1icy5pbml0KCk7XG4gICAgaWYgKGluaXRpYWxpemVkKSB0aHVtYnMudXBkYXRlKHRydWUpO1xuICB9XG5cbiAgaWYgKG5lZWRDb250cm9sbGVySW5pdCkge1xuICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgPSBjdXJyZW50UGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgfVxuXG4gIGlmIChuZWVkUGFnaW5hdGlvbkluaXQpIHtcbiAgICBpZiAocGFnaW5hdGlvbkVsKSBjdXJyZW50UGFyYW1zLnBhZ2luYXRpb24uZWwgPSBwYWdpbmF0aW9uRWw7XG4gICAgcGFnaW5hdGlvbi5pbml0KCk7XG4gICAgcGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICBwYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKG5lZWRTY3JvbGxiYXJJbml0KSB7XG4gICAgaWYgKHNjcm9sbGJhckVsKSBjdXJyZW50UGFyYW1zLnNjcm9sbGJhci5lbCA9IHNjcm9sbGJhckVsO1xuICAgIHNjcm9sbGJhci5pbml0KCk7XG4gICAgc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICBzY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCk7XG4gIH1cblxuICBpZiAobmVlZE5hdmlnYXRpb25Jbml0KSB7XG4gICAgaWYgKG5leHRFbCkgY3VycmVudFBhcmFtcy5uYXZpZ2F0aW9uLm5leHRFbCA9IG5leHRFbDtcbiAgICBpZiAocHJldkVsKSBjdXJyZW50UGFyYW1zLm5hdmlnYXRpb24ucHJldkVsID0gcHJldkVsO1xuICAgIG5hdmlnYXRpb24uaW5pdCgpO1xuICAgIG5hdmlnYXRpb24udXBkYXRlKCk7XG4gIH1cblxuICBpZiAoY2hhbmdlZFBhcmFtcy5pbmNsdWRlcygnYWxsb3dTbGlkZU5leHQnKSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHBhc3NlZFBhcmFtcy5hbGxvd1NsaWRlTmV4dDtcbiAgfVxuXG4gIGlmIChjaGFuZ2VkUGFyYW1zLmluY2x1ZGVzKCdhbGxvd1NsaWRlUHJldicpKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gcGFzc2VkUGFyYW1zLmFsbG93U2xpZGVQcmV2O1xuICB9XG5cbiAgaWYgKGNoYW5nZWRQYXJhbXMuaW5jbHVkZXMoJ2RpcmVjdGlvbicpKSB7XG4gICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbihwYXNzZWRQYXJhbXMuZGlyZWN0aW9uLCBmYWxzZSk7XG4gIH1cblxuICBzd2lwZXIudXBkYXRlKCk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVN3aXBlciB9OyIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnO1xuXG5mdW5jdGlvbiByZW5kZXJWaXJ0dWFsKHN3aXBlclJlZiwgc2xpZGVzLCB2aXJ0dWFsRGF0YSkge1xuICBpZiAoIXZpcnR1YWxEYXRhKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc3R5bGUgPSBzd2lwZXJSZWYudmFsdWUuaXNIb3Jpem9udGFsKCkgPyB7XG4gICAgW3N3aXBlclJlZi52YWx1ZS5ydGxUcmFuc2xhdGUgPyAncmlnaHQnIDogJ2xlZnQnXTogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YFxuICB9IDoge1xuICAgIHRvcDogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YFxuICB9O1xuICByZXR1cm4gc2xpZGVzLmZpbHRlcigoc2xpZGUsIGluZGV4KSA9PiBpbmRleCA+PSB2aXJ0dWFsRGF0YS5mcm9tICYmIGluZGV4IDw9IHZpcnR1YWxEYXRhLnRvKS5tYXAoc2xpZGUgPT4ge1xuICAgIGlmICghc2xpZGUucHJvcHMpIHNsaWRlLnByb3BzID0ge307XG4gICAgaWYgKCFzbGlkZS5wcm9wcy5zdHlsZSkgc2xpZGUucHJvcHMuc3R5bGUgPSB7fTtcbiAgICBzbGlkZS5wcm9wcy5zd2lwZXJSZWYgPSBzd2lwZXJSZWY7XG4gICAgc2xpZGUucHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICByZXR1cm4gaChzbGlkZS50eXBlLCB7IC4uLnNsaWRlLnByb3BzXG4gICAgfSwgc2xpZGUuY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyVmlydHVhbCB9OyIsImV4cG9ydCBjb25zdCB1cGRhdGVPblZpcnR1YWxEYXRhID0gc3dpcGVyID0+IHtcbiAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLnBhcmFtcy52aXJ0dWFsIHx8IHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiAhc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICBpZiAoc3dpcGVyLmxhenkgJiYgc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gIH1cblxuICBpZiAoc3dpcGVyLnBhcmFsbGF4ICYmIHN3aXBlci5wYXJhbXMucGFyYWxsYXggJiYgc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSB7XG4gICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpO1xuICB9XG59OyIsImltcG9ydCB7IGgsIHJlZiwgb25Nb3VudGVkLCBvblVwZGF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgd2F0Y2gsIG5leHRUaWNrLCBwcm92aWRlIH0gZnJvbSAndnVlJztcbmltcG9ydCBTd2lwZXJDb3JlIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBnZXRQYXJhbXMgfSBmcm9tICcuLi9jb21wb25lbnRzLXNoYXJlZC9nZXQtcGFyYW1zLmpzJztcbmltcG9ydCB7IG1vdW50U3dpcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy1zaGFyZWQvbW91bnQtc3dpcGVyLmpzJztcbmltcG9ydCB7IG5lZWRzU2Nyb2xsYmFyLCBuZWVkc05hdmlnYXRpb24sIG5lZWRzUGFnaW5hdGlvbiwgdW5pcXVlQ2xhc3NlcywgZXh0ZW5kIH0gZnJvbSAnLi4vY29tcG9uZW50cy1zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyTG9vcCwgY2FsY0xvb3BlZFNsaWRlcyB9IGZyb20gJy4vbG9vcC5qcyc7XG5pbXBvcnQgeyBnZXRDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vY29tcG9uZW50cy1zaGFyZWQvZ2V0LWNoYW5nZWQtcGFyYW1zLmpzJztcbmltcG9ydCB7IGdldENoaWxkcmVuIH0gZnJvbSAnLi9nZXQtY2hpbGRyZW4uanMnO1xuaW1wb3J0IHsgdXBkYXRlU3dpcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy1zaGFyZWQvdXBkYXRlLXN3aXBlci5qcyc7XG5pbXBvcnQgeyByZW5kZXJWaXJ0dWFsIH0gZnJvbSAnLi92aXJ0dWFsLmpzJztcbmltcG9ydCB7IHVwZGF0ZU9uVmlydHVhbERhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzLXNoYXJlZC91cGRhdGUtb24tdmlydHVhbC1kYXRhLmpzJztcbmNvbnN0IFN3aXBlciA9IHtcbiAgbmFtZTogJ1N3aXBlcicsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH0sXG4gICAgd3JhcHBlclRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuICAgIG1vZHVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBpbml0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdG91Y2hFdmVudHNUYXJnZXQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaW5pdGlhbFNsaWRlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNwZWVkOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGNzc01vZGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHVwZGF0ZU9uV2luZG93UmVzaXplOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICByZXNpemVPYnNlcnZlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgbmVzdGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBmb2N1c2FibGVFbGVtZW50czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB1c2VyQWdlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGVkZ2VTd2lwZURldGVjdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGVkZ2VTd2lwZVRocmVzaG9sZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBhdXRvSGVpZ2h0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzZXRXcmFwcGVyU2l6ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdmlydHVhbFRyYW5zbGF0ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZWZmZWN0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNwYWNlQmV0d2Vlbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZXNQZXJWaWV3OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBtYXhCYWNrZmFjZUhpZGRlblNsaWRlczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZXNQZXJHcm91cDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZXNQZXJHcm91cFNraXA6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2xpZGVzUGVyR3JvdXBBdXRvOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBjZW50ZXJlZFNsaWRlczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlc09mZnNldEJlZm9yZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZXNPZmZzZXRBZnRlcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBub3JtYWxpemVTbGlkZUluZGV4OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHdhdGNoT3ZlcmZsb3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHJvdW5kTGVuZ3Roczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdG91Y2hSYXRpbzoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB0b3VjaEFuZ2xlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNpbXVsYXRlVG91Y2g6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNob3J0U3dpcGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb25nU3dpcGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb25nU3dpcGVzUmF0aW86IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgbG9uZ1N3aXBlc01zOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGZvbGxvd0Zpbmdlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgYWxsb3dUb3VjaE1vdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHRocmVzaG9sZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHRvdWNoUmVsZWFzZU9uRWRnZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHVuaXF1ZU5hdkVsZW1lbnRzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICByZXNpc3RhbmNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICByZXNpc3RhbmNlUmF0aW86IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgd2F0Y2hTbGlkZXNQcm9ncmVzczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZ3JhYkN1cnNvcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcHJldmVudENsaWNrczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBwcmVsb2FkSW1hZ2VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB1cGRhdGVPbkltYWdlc1JlYWR5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb29wOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb29wQWRkaXRpb25hbFNsaWRlczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb29wZWRTbGlkZXM6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgbG9vcGVkU2xpZGVzTGltaXQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBsb29wUHJldmVudHNTbGlkZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcmV3aW5kOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBhbGxvd1NsaWRlUHJldjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgYWxsb3dTbGlkZU5leHQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHN3aXBlSGFuZGxlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgbm9Td2lwaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBub1N3aXBpbmdDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBub1N3aXBpbmdTZWxlY3Rvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBwYXNzaXZlTGlzdGVuZXJzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2xpZGVCbGFua0NsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlQWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZVZpc2libGVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlTmV4dENsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlUHJldkNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBydW5DYWxsYmFja3NPbkluaXQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIG9ic2VydmVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBvYnNlcnZlUGFyZW50czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBhdXRvcGxheToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGN1YmVFZmZlY3Q6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBmbGlwRWZmZWN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGNyZWF0aXZlRWZmZWN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGNhcmRzRWZmZWN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGhhc2hOYXZpZ2F0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGtleWJvYXJkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgbGF6eToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIG1vdXNld2hlZWw6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHBhcmFsbGF4OiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdGh1bWJzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZpcnR1YWw6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB6b29tOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgdHlwZTogW09iamVjdF0sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGZyZWVNb2RlOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZW5hYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnX2JlZm9yZUJyZWFrcG9pbnQnLCAnX2NvbnRhaW5lckNsYXNzZXMnLCAnX3NsaWRlQ2xhc3MnLCAnX3NsaWRlQ2xhc3NlcycsICdfc3dpcGVyJywgJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJywgJ2FjdGl2ZUluZGV4Q2hhbmdlJywgJ2FmdGVySW5pdCcsICdhdXRvcGxheScsICdhdXRvcGxheVN0YXJ0JywgJ2F1dG9wbGF5U3RvcCcsICdhdXRvcGxheVBhdXNlJywgJ2F1dG9wbGF5UmVzdW1lJywgJ2JlZm9yZURlc3Ryb3knLCAnYmVmb3JlSW5pdCcsICdiZWZvcmVMb29wRml4JywgJ2JlZm9yZVJlc2l6ZScsICdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0JywgJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsICdicmVha3BvaW50JywgJ2NoYW5nZURpcmVjdGlvbicsICdjbGljaycsICdkaXNhYmxlJywgJ2RvdWJsZVRhcCcsICdkb3VibGVDbGljaycsICdkZXN0cm95JywgJ2VuYWJsZScsICdmcm9tRWRnZScsICdoYXNoQ2hhbmdlJywgJ2hhc2hTZXQnLCAnaW1hZ2VzUmVhZHknLCAnaW5pdCcsICdrZXlQcmVzcycsICdsYXp5SW1hZ2VMb2FkJywgJ2xhenlJbWFnZVJlYWR5JywgJ2xvY2snLCAnbG9vcEZpeCcsICdtb21lbnR1bUJvdW5jZScsICduYXZpZ2F0aW9uSGlkZScsICduYXZpZ2F0aW9uU2hvdycsICduYXZpZ2F0aW9uUHJldicsICduYXZpZ2F0aW9uTmV4dCcsICdvYnNlcnZlclVwZGF0ZScsICdvcmllbnRhdGlvbmNoYW5nZScsICdwYWdpbmF0aW9uSGlkZScsICdwYWdpbmF0aW9uUmVuZGVyJywgJ3BhZ2luYXRpb25TaG93JywgJ3BhZ2luYXRpb25VcGRhdGUnLCAncHJvZ3Jlc3MnLCAncmVhY2hCZWdpbm5pbmcnLCAncmVhY2hFbmQnLCAncmVhbEluZGV4Q2hhbmdlJywgJ3Jlc2l6ZScsICdzY3JvbGwnLCAnc2Nyb2xsYmFyRHJhZ0VuZCcsICdzY3JvbGxiYXJEcmFnTW92ZScsICdzY3JvbGxiYXJEcmFnU3RhcnQnLCAnc2V0VHJhbnNpdGlvbicsICdzZXRUcmFuc2xhdGUnLCAnc2xpZGVDaGFuZ2UnLCAnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJywgJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JywgJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnLCAnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0JywgJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnLCAnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0JywgJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnLCAnc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnLCAnc2xpZGVyTW92ZScsICdzbGlkZXJGaXJzdE1vdmUnLCAnc2xpZGVzTGVuZ3RoQ2hhbmdlJywgJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnLCAnc25hcEdyaWRMZW5ndGhDaGFuZ2UnLCAnc25hcEluZGV4Q2hhbmdlJywgJ3N3aXBlcicsICd0YXAnLCAndG9FZGdlJywgJ3RvdWNoRW5kJywgJ3RvdWNoTW92ZScsICd0b3VjaE1vdmVPcHBvc2l0ZScsICd0b3VjaFN0YXJ0JywgJ3RyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvblN0YXJ0JywgJ3VubG9jaycsICd1cGRhdGUnLCAndmlydHVhbFVwZGF0ZScsICd6b29tQ2hhbmdlJ10sXG5cbiAgc2V0dXAocHJvcHMsIF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgc2xvdHM6IG9yaWdpbmFsU2xvdHMsXG4gICAgICBlbWl0XG4gICAgfSA9IF9yZWY7XG4gICAgY29uc3Qge1xuICAgICAgdGFnOiBUYWcsXG4gICAgICB3cmFwcGVyVGFnOiBXcmFwcGVyVGFnXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSByZWYoJ3N3aXBlcicpO1xuICAgIGNvbnN0IHZpcnR1YWxEYXRhID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IGJyZWFrcG9pbnRDaGFuZ2VkID0gcmVmKGZhbHNlKTtcbiAgICBjb25zdCBpbml0aWFsaXplZFJlZiA9IHJlZihmYWxzZSk7XG4gICAgY29uc3Qgc3dpcGVyRWxSZWYgPSByZWYobnVsbCk7XG4gICAgY29uc3Qgc3dpcGVyUmVmID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IG9sZFBhc3NlZFBhcmFtc1JlZiA9IHJlZihudWxsKTtcbiAgICBjb25zdCBzbGlkZXNSZWYgPSB7XG4gICAgICB2YWx1ZTogW11cbiAgICB9O1xuICAgIGNvbnN0IG9sZFNsaWRlc1JlZiA9IHtcbiAgICAgIHZhbHVlOiBbXVxuICAgIH07XG4gICAgY29uc3QgbmV4dEVsUmVmID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IHByZXZFbFJlZiA9IHJlZihudWxsKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uRWxSZWYgPSByZWYobnVsbCk7XG4gICAgY29uc3Qgc2Nyb2xsYmFyRWxSZWYgPSByZWYobnVsbCk7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zOiBzd2lwZXJQYXJhbXMsXG4gICAgICBwYXNzZWRQYXJhbXNcbiAgICB9ID0gZ2V0UGFyYW1zKHByb3BzLCBmYWxzZSk7XG4gICAgZ2V0Q2hpbGRyZW4ob3JpZ2luYWxTbG90cywgc2xpZGVzUmVmLCBvbGRTbGlkZXNSZWYpO1xuICAgIG9sZFBhc3NlZFBhcmFtc1JlZi52YWx1ZSA9IHBhc3NlZFBhcmFtcztcbiAgICBvbGRTbGlkZXNSZWYudmFsdWUgPSBzbGlkZXNSZWYudmFsdWU7XG5cbiAgICBjb25zdCBvbkJlZm9yZUJyZWFrcG9pbnQgPSAoKSA9PiB7XG4gICAgICBnZXRDaGlsZHJlbihvcmlnaW5hbFNsb3RzLCBzbGlkZXNSZWYsIG9sZFNsaWRlc1JlZik7XG4gICAgICBicmVha3BvaW50Q2hhbmdlZC52YWx1ZSA9IHRydWU7XG4gICAgfTtcblxuICAgIHN3aXBlclBhcmFtcy5vbkFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgZW1pdChldmVudCwgLi4uYXJncyk7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyUGFyYW1zLm9uLCB7XG4gICAgICBfYmVmb3JlQnJlYWtwb2ludDogb25CZWZvcmVCcmVha3BvaW50LFxuXG4gICAgICBfY29udGFpbmVyQ2xhc3Nlcyhzd2lwZXIsIGNsYXNzZXMpIHtcbiAgICAgICAgY29udGFpbmVyQ2xhc3Nlcy52YWx1ZSA9IGNsYXNzZXM7XG4gICAgICB9XG5cbiAgICB9KTsgLy8gaW5pdCBTd2lwZXJcblxuICAgIHN3aXBlclJlZi52YWx1ZSA9IG5ldyBTd2lwZXJDb3JlKHN3aXBlclBhcmFtcyk7XG5cbiAgICBzd2lwZXJSZWYudmFsdWUubG9vcENyZWF0ZSA9ICgpID0+IHt9O1xuXG4gICAgc3dpcGVyUmVmLnZhbHVlLmxvb3BEZXN0cm95ID0gKCkgPT4ge307XG5cbiAgICBpZiAoc3dpcGVyUGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlclJlZi52YWx1ZS5sb29wZWRTbGlkZXMgPSBjYWxjTG9vcGVkU2xpZGVzKHNsaWRlc1JlZi52YWx1ZSwgc3dpcGVyUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyUmVmLnZhbHVlLnZpcnR1YWwgJiYgc3dpcGVyUmVmLnZhbHVlLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlclJlZi52YWx1ZS52aXJ0dWFsLnNsaWRlcyA9IHNsaWRlc1JlZi52YWx1ZTtcbiAgICAgIGNvbnN0IGV4dGVuZFdpdGggPSB7XG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgc2xpZGVzOiBzbGlkZXNSZWYudmFsdWUsXG4gICAgICAgIHJlbmRlckV4dGVybmFsOiBkYXRhID0+IHtcbiAgICAgICAgICB2aXJ0dWFsRGF0YS52YWx1ZSA9IGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlckV4dGVybmFsVXBkYXRlOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIGV4dGVuZChzd2lwZXJSZWYudmFsdWUucGFyYW1zLnZpcnR1YWwsIGV4dGVuZFdpdGgpO1xuICAgICAgZXh0ZW5kKHN3aXBlclJlZi52YWx1ZS5vcmlnaW5hbFBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZWQoKCkgPT4ge1xuICAgICAgLy8gc2V0IGluaXRpYWxpemVkIGZsYWdcbiAgICAgIGlmICghaW5pdGlhbGl6ZWRSZWYudmFsdWUgJiYgc3dpcGVyUmVmLnZhbHVlKSB7XG4gICAgICAgIHN3aXBlclJlZi52YWx1ZS5lbWl0U2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICBpbml0aWFsaXplZFJlZi52YWx1ZSA9IHRydWU7XG4gICAgICB9IC8vIHdhdGNoIGZvciBwYXJhbXMgY2hhbmdlXG5cblxuICAgICAgY29uc3Qge1xuICAgICAgICBwYXNzZWRQYXJhbXM6IG5ld1Bhc3NlZFBhcmFtc1xuICAgICAgfSA9IGdldFBhcmFtcyhwcm9wcywgZmFsc2UpO1xuICAgICAgY29uc3QgY2hhbmdlZFBhcmFtcyA9IGdldENoYW5nZWRQYXJhbXMobmV3UGFzc2VkUGFyYW1zLCBvbGRQYXNzZWRQYXJhbXNSZWYudmFsdWUsIHNsaWRlc1JlZi52YWx1ZSwgb2xkU2xpZGVzUmVmLnZhbHVlLCBjID0+IGMucHJvcHMgJiYgYy5wcm9wcy5rZXkpO1xuICAgICAgb2xkUGFzc2VkUGFyYW1zUmVmLnZhbHVlID0gbmV3UGFzc2VkUGFyYW1zO1xuXG4gICAgICBpZiAoKGNoYW5nZWRQYXJhbXMubGVuZ3RoIHx8IGJyZWFrcG9pbnRDaGFuZ2VkLnZhbHVlKSAmJiBzd2lwZXJSZWYudmFsdWUgJiYgIXN3aXBlclJlZi52YWx1ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgdXBkYXRlU3dpcGVyKHtcbiAgICAgICAgICBzd2lwZXI6IHN3aXBlclJlZi52YWx1ZSxcbiAgICAgICAgICBzbGlkZXM6IHNsaWRlc1JlZi52YWx1ZSxcbiAgICAgICAgICBwYXNzZWRQYXJhbXM6IG5ld1Bhc3NlZFBhcmFtcyxcbiAgICAgICAgICBjaGFuZ2VkUGFyYW1zLFxuICAgICAgICAgIG5leHRFbDogbmV4dEVsUmVmLnZhbHVlLFxuICAgICAgICAgIHByZXZFbDogcHJldkVsUmVmLnZhbHVlLFxuICAgICAgICAgIHNjcm9sbGJhckVsOiBzY3JvbGxiYXJFbFJlZi52YWx1ZSxcbiAgICAgICAgICBwYWdpbmF0aW9uRWw6IHBhZ2luYXRpb25FbFJlZi52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWtwb2ludENoYW5nZWQudmFsdWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBwcm92aWRlKCdzd2lwZXInLCBzd2lwZXJSZWYpOyAvLyB1cGRhdGUgb24gdmlydHVhbCB1cGRhdGVcblxuICAgIHdhdGNoKHZpcnR1YWxEYXRhLCAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHVwZGF0ZU9uVmlydHVhbERhdGEoc3dpcGVyUmVmLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pOyAvLyBtb3VudCBzd2lwZXJcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpZiAoIXN3aXBlckVsUmVmLnZhbHVlKSByZXR1cm47XG4gICAgICBtb3VudFN3aXBlcih7XG4gICAgICAgIGVsOiBzd2lwZXJFbFJlZi52YWx1ZSxcbiAgICAgICAgbmV4dEVsOiBuZXh0RWxSZWYudmFsdWUsXG4gICAgICAgIHByZXZFbDogcHJldkVsUmVmLnZhbHVlLFxuICAgICAgICBwYWdpbmF0aW9uRWw6IHBhZ2luYXRpb25FbFJlZi52YWx1ZSxcbiAgICAgICAgc2Nyb2xsYmFyRWw6IHNjcm9sbGJhckVsUmVmLnZhbHVlLFxuICAgICAgICBzd2lwZXI6IHN3aXBlclJlZi52YWx1ZVxuICAgICAgfSwgc3dpcGVyUGFyYW1zKTtcbiAgICAgIGVtaXQoJ3N3aXBlcicsIHN3aXBlclJlZi52YWx1ZSk7XG4gICAgfSk7XG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmIChzd2lwZXJSZWYudmFsdWUgJiYgIXN3aXBlclJlZi52YWx1ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgc3dpcGVyUmVmLnZhbHVlLmRlc3Ryb3kodHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pOyAvLyBieXBhc3Mgc3dpcGVyIGluc3RhbmNlIHRvIHNsaWRlc1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2xpZGVzKHNsaWRlcykge1xuICAgICAgaWYgKHN3aXBlclBhcmFtcy52aXJ0dWFsKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJWaXJ0dWFsKHN3aXBlclJlZiwgc2xpZGVzLCB2aXJ0dWFsRGF0YS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3dpcGVyUGFyYW1zLmxvb3AgfHwgc3dpcGVyUmVmLnZhbHVlICYmIHN3aXBlclJlZi52YWx1ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGUgPT4ge1xuICAgICAgICAgIGlmICghc2xpZGUucHJvcHMpIHNsaWRlLnByb3BzID0ge307XG4gICAgICAgICAgc2xpZGUucHJvcHMuc3dpcGVyUmVmID0gc3dpcGVyUmVmO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNsaWRlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlckxvb3Aoc3dpcGVyUmVmLCBzbGlkZXMsIHN3aXBlclBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2xpZGVzLFxuICAgICAgICBzbG90c1xuICAgICAgfSA9IGdldENoaWxkcmVuKG9yaWdpbmFsU2xvdHMsIHNsaWRlc1JlZiwgb2xkU2xpZGVzUmVmKTtcbiAgICAgIHJldHVybiBoKFRhZywge1xuICAgICAgICByZWY6IHN3aXBlckVsUmVmLFxuICAgICAgICBjbGFzczogdW5pcXVlQ2xhc3Nlcyhjb250YWluZXJDbGFzc2VzLnZhbHVlKVxuICAgICAgfSwgW3Nsb3RzWydjb250YWluZXItc3RhcnQnXSwgaChXcmFwcGVyVGFnLCB7XG4gICAgICAgIGNsYXNzOiAnc3dpcGVyLXdyYXBwZXInXG4gICAgICB9LCBbc2xvdHNbJ3dyYXBwZXItc3RhcnQnXSwgcmVuZGVyU2xpZGVzKHNsaWRlcyksIHNsb3RzWyd3cmFwcGVyLWVuZCddXSksIG5lZWRzTmF2aWdhdGlvbihwcm9wcykgJiYgW2goJ2RpdicsIHtcbiAgICAgICAgcmVmOiBwcmV2RWxSZWYsXG4gICAgICAgIGNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgfSksIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiBuZXh0RWxSZWYsXG4gICAgICAgIGNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1uZXh0J1xuICAgICAgfSldLCBuZWVkc1Njcm9sbGJhcihwcm9wcykgJiYgaCgnZGl2Jywge1xuICAgICAgICByZWY6IHNjcm9sbGJhckVsUmVmLFxuICAgICAgICBjbGFzczogJ3N3aXBlci1zY3JvbGxiYXInXG4gICAgICB9KSwgbmVlZHNQYWdpbmF0aW9uKHByb3BzKSAmJiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcGFnaW5hdGlvbkVsUmVmLFxuICAgICAgICBjbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uJ1xuICAgICAgfSksIHNsb3RzWydjb250YWluZXItZW5kJ11dKTtcbiAgICB9O1xuICB9XG5cbn07XG5leHBvcnQgeyBTd2lwZXIgfTsiLCJpbXBvcnQgeyBoLCByZWYsIG9uTW91bnRlZCwgb25VcGRhdGVkLCBvbkJlZm9yZVVwZGF0ZSwgY29tcHV0ZWQsIG9uQmVmb3JlVW5tb3VudCwgcHJvdmlkZSB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1bmlxdWVDbGFzc2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy1zaGFyZWQvdXRpbHMuanMnO1xuY29uc3QgU3dpcGVyU2xpZGUgPSB7XG4gIG5hbWU6ICdTd2lwZXJTbGlkZScsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH0sXG4gICAgc3dpcGVyUmVmOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuICAgIHpvb206IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZpcnR1YWxJbmRleDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSxcblxuICBzZXR1cChwcm9wcywgX3JlZikge1xuICAgIGxldCB7XG4gICAgICBzbG90c1xuICAgIH0gPSBfcmVmO1xuICAgIGxldCBldmVudEF0dGFjaGVkID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgc3dpcGVyUmVmXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNsaWRlRWxSZWYgPSByZWYobnVsbCk7XG4gICAgY29uc3Qgc2xpZGVDbGFzc2VzID0gcmVmKCdzd2lwZXItc2xpZGUnKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMoc3dpcGVyLCBlbCwgY2xhc3NOYW1lcykge1xuICAgICAgaWYgKGVsID09PSBzbGlkZUVsUmVmLnZhbHVlKSB7XG4gICAgICAgIHNsaWRlQ2xhc3Nlcy52YWx1ZSA9IGNsYXNzTmFtZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGlmICghc3dpcGVyUmVmIHx8ICFzd2lwZXJSZWYudmFsdWUpIHJldHVybjtcbiAgICAgIHN3aXBlclJlZi52YWx1ZS5vbignX3NsaWRlQ2xhc3MnLCB1cGRhdGVDbGFzc2VzKTtcbiAgICAgIGV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIG9uQmVmb3JlVXBkYXRlKCgpID0+IHtcbiAgICAgIGlmIChldmVudEF0dGFjaGVkIHx8ICFzd2lwZXJSZWYgfHwgIXN3aXBlclJlZi52YWx1ZSkgcmV0dXJuO1xuICAgICAgc3dpcGVyUmVmLnZhbHVlLm9uKCdfc2xpZGVDbGFzcycsIHVwZGF0ZUNsYXNzZXMpO1xuICAgICAgZXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgb25VcGRhdGVkKCgpID0+IHtcbiAgICAgIGlmICghc2xpZGVFbFJlZi52YWx1ZSB8fCAhc3dpcGVyUmVmIHx8ICFzd2lwZXJSZWYudmFsdWUpIHJldHVybjtcblxuICAgICAgaWYgKHN3aXBlclJlZi52YWx1ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgaWYgKHNsaWRlQ2xhc3Nlcy52YWx1ZSAhPT0gJ3N3aXBlci1zbGlkZScpIHtcbiAgICAgICAgICBzbGlkZUNsYXNzZXMudmFsdWUgPSAnc3dpcGVyLXNsaWRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoIXN3aXBlclJlZiB8fCAhc3dpcGVyUmVmLnZhbHVlKSByZXR1cm47XG4gICAgICBzd2lwZXJSZWYudmFsdWUub2ZmKCdfc2xpZGVDbGFzcycsIHVwZGF0ZUNsYXNzZXMpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNsaWRlRGF0YSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBpc0FjdGl2ZTogc2xpZGVDbGFzc2VzLnZhbHVlLmluZGV4T2YoJ3N3aXBlci1zbGlkZS1hY3RpdmUnKSA+PSAwIHx8IHNsaWRlQ2xhc3Nlcy52YWx1ZS5pbmRleE9mKCdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZScpID49IDAsXG4gICAgICBpc1Zpc2libGU6IHNsaWRlQ2xhc3Nlcy52YWx1ZS5pbmRleE9mKCdzd2lwZXItc2xpZGUtdmlzaWJsZScpID49IDAsXG4gICAgICBpc0R1cGxpY2F0ZTogc2xpZGVDbGFzc2VzLnZhbHVlLmluZGV4T2YoJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnKSA+PSAwLFxuICAgICAgaXNQcmV2OiBzbGlkZUNsYXNzZXMudmFsdWUuaW5kZXhPZignc3dpcGVyLXNsaWRlLXByZXYnKSA+PSAwIHx8IHNsaWRlQ2xhc3Nlcy52YWx1ZS5pbmRleE9mKCdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnKSA+PSAwLFxuICAgICAgaXNOZXh0OiBzbGlkZUNsYXNzZXMudmFsdWUuaW5kZXhPZignc3dpcGVyLXNsaWRlLW5leHQnKSA+PSAwIHx8IHNsaWRlQ2xhc3Nlcy52YWx1ZS5pbmRleE9mKCdzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHQnKSA+PSAwXG4gICAgfSkpO1xuICAgIHByb3ZpZGUoJ3N3aXBlclNsaWRlJywgc2xpZGVEYXRhKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuIGgocHJvcHMudGFnLCB7XG4gICAgICAgIGNsYXNzOiB1bmlxdWVDbGFzc2VzKGAke3NsaWRlQ2xhc3Nlcy52YWx1ZX1gKSxcbiAgICAgICAgcmVmOiBzbGlkZUVsUmVmLFxuICAgICAgICAnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnOiBwcm9wcy52aXJ0dWFsSW5kZXhcbiAgICAgIH0sIHByb3BzLnpvb20gPyBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcbiAgICAgICAgJ2RhdGEtc3dpcGVyLXpvb20nOiB0eXBlb2YgcHJvcHMuem9vbSA9PT0gJ251bWJlcicgPyBwcm9wcy56b29tIDogdW5kZWZpbmVkXG4gICAgICB9LCBzbG90cy5kZWZhdWx0ICYmIHNsb3RzLmRlZmF1bHQoc2xpZGVEYXRhLnZhbHVlKSkgOiBzbG90cy5kZWZhdWx0ICYmIHNsb3RzLmRlZmF1bHQoc2xpZGVEYXRhLnZhbHVlKSk7XG4gICAgfTtcbiAgfVxuXG59O1xuZXhwb3J0IHsgU3dpcGVyU2xpZGUgfTsiXSwibmFtZXMiOlsiaXNPYmplY3QiLCJleHRlbmQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImh0bWwiLCJjbGFzc2VzIiwiYXR0ciIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJwYXJlbnRzIiwiZXZlbnRzIiwidHJhbnNpdGlvbkVuZCIsInN0eWxlcyIsImluZGV4IiwidGV4dCIsIm5leHQiLCJwcmV2IiwicGFyZW50IiwiY2xvc2VzdCIsImNoaWxkcmVuIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN1cHBvcnQiLCJvbiIsIm9ic2VydmVyVXBkYXRlIiwic2xpZGUiLCJ0cmFuc2xhdGUiLCJtaW5UcmFuc2xhdGUiLCJtYXhUcmFuc2xhdGUiLCJnZXRUcmFuc2xhdGUiLCJpbmNyZW1lbnQiLCJicmVha3BvaW50cyIsImNoZWNrT3ZlcmZsb3ciLCJTd2lwZXIiLCJzZXRUcmFuc2xhdGUiLCJTd2lwZXJDb3JlIiwibmV4dFRpY2siXSwibWFwcGluZ3MiOiI7QUFZQSxTQUFTQSxXQUFTLEtBQUs7QUFDbkIsU0FBUSxRQUFRLFFBQ1osT0FBTyxRQUFRLFlBQ2YsaUJBQWlCLE9BQ2pCLElBQUksZ0JBQWdCO0FBQzVCO0FBQ0EsU0FBU0MsU0FBTyxTQUFTLElBQUksTUFBTSxDQUFBLEdBQUk7QUFDbkMsU0FBTyxLQUFLLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUTtBQUM5QixRQUFJLE9BQU8sT0FBTyxTQUFTO0FBQ3ZCLGFBQU8sT0FBTyxJQUFJO0FBQUEsYUFDYkQsV0FBUyxJQUFJLElBQUksS0FDdEJBLFdBQVMsT0FBTyxJQUFJLEtBQ3BCLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRSxTQUFTLEdBQUc7QUFDbENDLGVBQU8sT0FBTyxNQUFNLElBQUksSUFBSTtBQUFBLElBQy9CO0FBQUEsRUFDVCxDQUFLO0FBQ0w7QUFFQSxNQUFNLGNBQWM7QUFBQSxFQUNoQixNQUFNLENBQUU7QUFBQSxFQUNSLG1CQUFtQjtBQUFBLEVBQUc7QUFBQSxFQUN0QixzQkFBc0I7QUFBQSxFQUFHO0FBQUEsRUFDekIsZUFBZTtBQUFBLElBQ1gsT0FBTztBQUFBLElBQUc7QUFBQSxJQUNWLFVBQVU7QUFBQSxFQUNiO0FBQUEsRUFDRCxnQkFBZ0I7QUFDWixXQUFPO0FBQUEsRUFDVjtBQUFBLEVBQ0QsbUJBQW1CO0FBQ2YsV0FBTztFQUNWO0FBQUEsRUFDRCxpQkFBaUI7QUFDYixXQUFPO0FBQUEsRUFDVjtBQUFBLEVBQ0QsY0FBYztBQUNWLFdBQU87QUFBQSxNQUNILFlBQVk7QUFBQSxNQUFHO0FBQUEsSUFDM0I7QUFBQSxFQUNLO0FBQUEsRUFDRCxnQkFBZ0I7QUFDWixXQUFPO0FBQUEsTUFDSCxVQUFVLENBQUU7QUFBQSxNQUNaLFlBQVksQ0FBRTtBQUFBLE1BQ2Qs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
