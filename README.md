# common-dom-utils
Common DOM util functions for modern browsers, with shadow DOM support.

Supporting types and tree shaking with webpack.

No polyfill. Rely on your project polyfill (Only Promise needed for older browsers).

All functions are checking whether target element is null or not.

Hope this can help to make front end development easier.

## install
Use `npm install common-dom-utils` or `yarn add common-dom-utils`

## Methods
### Load js or css files
1. [load js script in to container](#load-js-script-into-dom-container)
1. [load css file into DOM container](#load-css-file-into-dom-container)
1. [load script with SRI](#load-script-with-SRI)
1. [load js scripts series into DOM container](#load-js-scripts-series-into-dom-container)
1. [load css string into DOM container](#load-css-string-into-dom-container)

### DOM operations
1. [append/prepend element or html string to container or shadowRoot](#appendprepend-element-or-html-string-to-container-or-shadowroot)
1. [get activeElement with shadow DOM support](#get-activeElement-with-shadow-dom-support)
1. [set element focus](#set-element-focus)
1. [get Event target with shadow DOM support](#get-Event-target)
1. [get ancestor parent](#get-ancestor-node)
1. [querySelector and querySelectorAll inside container](#queryselector-and-queryselectorall-inside-container)
1. [check contains node](#check-contains-node)
1. [attribute related operations (set, get, remove, has)](#attribute-related-operations)
1. [get or set html string](#get-or-set-html-string)

### Dimension related
1. [get window width and height](#get-window-width-and-height)
1. [get element offset and element top](#get-element-offset-and-element-top)
1. [get element width, actual width, height, actual height](#get-element-width,-actual-width,-height,-actual-height)
1. [check whether elment is visible/hidden](#check-whether-elment-is-visiblehidden)
1. [set or clear element max-height](#set-or-clear-element-max-height)

### Class related
1. [Class related operations (addClass, removeClass, toggleClass etc)](#class-related-operations)

### Cookie related
1. [Cookie related operations (getCookie, setCookie, deleteCookie)](#cookie-related-operations)

### shadow DOM related
1. [get host element](#get-host-element)
1. [get shadowRoot](#get-shadowRoot)
1. [create dom utils for shadowRoot](#create-dom-utils-for-shadowroot)

### Other utils
1. [scroll to anchor or position](#scroll-to-anchor-or-position)
1. [canUseDOM](#can-use-dom-flag)
1. [get camel case property name](#get-camel-case-property-name)
1. [check document ready](#check-document-ready)

### load js script into DOM container
Load js script file into DOM.
```
import { loadScript } from 'common-dom-utils';

loadScript('https://script-url.com/script.js').then(
  () => { console.log('Script loaded') },
  (e) => { conole.log(e) }
);
```

parameters:
- src: string. javascript file url
- container: DOM element that \<script\> tag is inserted into, default: document.head
- attributes: object. Extra attributes added to the script tag.

### load css file into DOM container
Load css file into DOM.
```
import { loadCssFile } from 'common-dom-utils';

loadCssFile('https://css-file-url/file.css');
```

parameters:
- cssFileUrl: string. css file url
- container: DOM element that \<link\> tag is inserted into, default: document.head

### load js scripts series into DOM container
Load js script file into DOM.
```
import { loadScriptsSeries } from 'common-dom-utils';

loadScriptsSeries([
  'https://script-url.com/script1.js',
  'https://script-url.com/script2.js'
]).then(
  () => { console.log('Scripts loaded') },
  (e) => { conole.log(e) }
);
```

parameters:
- src: javascript file url
- container: DOM element that \<script\> tag is inserted into, default: document.head

### load script with SRI
SRI means Subresource Integrity (SRI) checking, it's recommended when using CDN for scripts.
```
import { loadScriptWithSRI } from 'common-dom-utils';

loadScriptWithSRI(
  {
    src: 'https://code.jquery.com/jquery-3.4.1.js',
    integrity: 'sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=',
    crossorigin: 'anonymous'
  }).then(
  () => { console.log('Script loaded') },
  (e) => { conole.log(e) }
);
```

### append/prepend element or html string to container or shadowRoot
Append or prepend child (html string) to container or shadowRoot.
```
import {
  appendChild,
  appendHtmlString,
  prependChild,
  prependHtmlString,
  appendHtmlStringToShadowRoot,
  prependHtmlStringToShadowRoot,
} from 'common-dom-utils';

// append / prepend child to container and shadowRoot
appendChild(document.createElement('span'), document.body);
prependChild(document.createElement('span'), document.body);

// append / prepend html string to container
appendHtmlString('<span>hello world</span>', document.body);
prependHtmlString('<span>hello world</span>', document.body);

// append / prepend html string to shadowRoot
// - shadowRoot does not support insertAdjacentHTML, so need to use HTML <template>
appendHtmlStringToShadowRoot('<span>hello world</span>', this.shadowRoot);
prependHtmlStringToShadowRoot('<span>hello world</span>', this.shadowRoot);
```

### replace old child with new child
Replace old DOM elment with new child.
```
import { replaceChild } from 'common-dom-utils';

replaceChild(document.createElement('span'), oldChild);
```

### get activeElement with shadow DOM support
Return document.activeElement by default.

If passing true as a parameter, it will look into shadowRoot until finding the real active element.

For example in the following structure:
+host-element
  +shadowRoot
    +button
If button get focus:
```
import { getActiveElement } from 'common-dom-utils';

// This will return host-element.
const hostEl = getActiveElement();

// This will look into shadowRoot and return button
const activeElement = getActiveElement(true);
```

parameters:
- withShadowRoot: boolean. default: false.

### get Event target
Getting event target element by event.target.

If the event is triggered inside shadow DOM, passing true as the second parameter, it will get the real event target by using composedPath().

For example in the following structure:
+host-element
  +shadowRoot
    +button
If button is clicked:
```
import { getEventTarget } from 'common-dom-utils';

// This will return host-element.
const targetHostEl = getEventTarget(evt);

// This will look into shadowRoot and return button
const target = getEventTarget(evt, true);
```

parameters:
- event: DOM Event object.
- withShadowRoot: boolean. default: false.

### load css string into DOM container
Load css string into DOM.
```
import { addCssString } from 'common-dom-utils';

addCssString('*, *:before, *:after { box-sizing: border-box;}');
```

parameters:
- cssString: css string
- container: DOM element that \<style\> tag is inserted into, default: document.head
- before: insert \<style\> tag before all other children, default: false

### set element focus
Set focus for element. If element is null or undefined, do nothing.
```
import { setFocus } from 'common-dom-utils';

setFocus(ref.current);
```
### get ancestor node
Get ancestor node by condition. This function will cross shadowRoot until it find the parent node that matches the condition.
```
import { getAncestorNode } from 'common-dom-utils';

const parent = getAncestorNode(ref.current, (node) => { node.className === 'container'});
```

Parameters:
- node: HTMLElement. Starting node.
- isNodeFound: Condition function called to check current node. Return true or false.

### get host element
Get host element of a HTMLElement node. If node is not inside shadow DOM, null will be returned.

```
import { getHostElement } from 'common-dom-utils';

const host = getHostElement(ref.current);
```

### get shadowRoot
Get the shadowRoot instance of a HTMLElement node.

If node is not inside shadow DOM, null will be returned.

```
import { getShadowRoot } from 'common-dom-utils';

const shadowRoot = getShadowRoot(ref.current);
```

### get window width and height
Get window width.
```
import { getWindowWidth, getWindowHeight } from 'common-dom-utils';

const width = getWindowWidth();
const height = getWindowHeight();
```

### get element offset and element top
Get element offset.
```
import { getElementOffset, getElementTop } from 'common-dom-utils';

const elBox = getElementOffset(el);
const top = getElementTop(el);
```

Offset object
```
{
  top: element top with scroll top
  left: element left with scroll left,
  width: element offset width,
  height: element offset height
}
```

If element is null or undefined, offset will be null.

### get element width, actual width, height, actual height
Get element width, actual width (scrollWidth), height, actual height(scrollHeight).
```
import {
  getElementWidth,
  getElementHeight,
  getElementActualWidth,
  getElementActualHeight
} from 'common-dom-utils';

  const width = getElementWidth(el);
  const height = getElementHeight(el);
  const actualWidth = getElementActualWidth(el);
  const actualHeight = getElementActualHeight(el);
```

If elment is null or undefined, return value will be 0.

### set or clear element max-height
Set or clear element max-height
```
import { setElementMaxHeight, clearElementMaxHeight } from 'common-dom-utils';

setElementMaxHeight(ref.current, '100px');
clearElementMaxHeight(ref.current);
```

### check whether elment is visible/hidden
Check whether elment is visible/hidden.
```
import { isElementVisible } from 'common-dom-utils';

const isHidden = !isElementVisible(ref.current);
```

### Class related operations
addClass, removeClass, toggleClass, hasClass, replaceClass.
```
import { addClass, removeClass, toggleClass, hasClass, replaceClass } from 'common-dom-utils';

addClass(document.body, 'modal-open');
hasClass(document.body, 'modal-open'); // true

removeClass(document.body, 'modal-open');
hasClass(document.body, 'modal-open'); // false

// return value:
// - true : class added
// - false: class removed
toggleClass(document.body, 'modal-open');

replaceClass(document.body, 'modal-open', 'modal-closed');
```

### Cookie related operations
getCookie, setCookie, deleteCookie.
```
import { getCookie, setCookie, deleteCookie } from 'common-dom-utils';

// Cookie name, expire days
setCookie('cookieName', 'cookieValue', 1);
getCookie('cookieName');

deleteCookie('cookieName');
```

setCookie params:
- cookieName: string. Cookie name.
- cookieValue: string. Cookie value.
- expireDays: number. Expiring in days.

### get or set html string
Get inner html string from target. Return empty string if el is null.
If passing string as the second parameter, the string will be set as innerHTML of target.
```
import { html } from 'common-dom-utils';

// Get innerHTML string
const str = html(el);

// Set innterHTML as the second param
html(el, '<span>test</span>');
```

### scroll to anchor or position
Scroll body to anchor element or a postion. (Vertical direction)
```
import { scrollToPosition, scrollTo } from 'common-dom-utils';

scrollTo(ref.current, 300);
scrollToPosition(0, 300);
```

scrollTo parameters:
- anchor: HTMLElement, element to scroll to
- duration: animating time. default: 0 (no scroll animation)

scrollToPosition parameters:
- position: number.
- duration: animating time. default: 0 (no scroll animation)

### querySelector and querySelectorAll inside container
document.querySelector and document.querySelectorAll doesn't go into shadow DOM.

You have to call shadowRoot.querySelector and shadowRoot.querySelectorAll instead.
```
import { querySelector, querySelectorAll } from 'common-dom-utils';

querySelector('.element-className', shadowRoot);
querySelectorAll('.element-className', shadowRoot);
```

### check contains node
Check whether container contains node or not.
```
import { contains } from 'common-dom-utils';

contains(document.body, el);
contains(this.renderRoot, el);
```

### attribute related operations
set, get, remove, has attribute methods.
```
import { setAttribute, getAttribute, hasAttribute, removeAttribute } from 'common-dom-utils';

setAttribute(target, 'attrName', 'value');
getAttribute(target, 'attrName'); // Return attribute value (string).
hasAttribute(target, 'attrName'); // Return true. false if attribute does not exist.
removeAttribute(target, 'attrName');
```

### create dom utils for shadowRoot
Create a Dom Utils object for shadowRoot.

```
import { createDomUtilsForShadowRoot } from 'common-dom-utils';

const domUtils = createDomUtilsForShadowRoot(this.shadowRoot);

domUtils.querySelector('.element-className');
domUtils.querySelectorAll('.element-className');
```

parameters:
- shadowRoot: ShadowRoot or HTMLElement.

Return:
- Dom Utils Object exposing functions with shadowRoot support
```
{
  querySelector,
  querySelectorAll,
  getActiveElement,
  setFocus,
  getEventTarget
}
```

### canUseDOM
true if can use DOM.
```
import { canUseDOM } from 'common-dom-utils';

canUseDOM; // true if can use DOM
```

### get camel case property name
Change snake-case to camelCase.
```
import { getCamelCase } from 'common-dom-utils';

getCamelCase('property-name'); // return propertyName
```

### check document ready
Check whether document is ready.
```
import { isDocumentReady } from 'common-dom-utils';

isDocumentReady(); // return true if document.readyState is 'complete'
```
