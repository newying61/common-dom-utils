# common-dom-utils
Common DOM util functions for modern browsers, with shadow DOM support.

Supporting types and tree shaking with webpack.

No polyfill. Rely on your project polyfill (Only Promise needed for older browsers).

Hope this can help to make front end development easier.

## install
Use `npm install common-dom-utils` or `yarn add common-dom-utils`

## Methods
1. [load js script in to container](#load-js-script-into-DOM-container)
1. [load css file into DOM container](#load-css-file-into-DOM-container)
1. [load script with SRI](#load-script-with-SRI)
1. [load js scripts series into DOM container](#load-js-scripts-series-into-DOM-container)
1. [get activeElement with shadow DOM support](#get-activeElement-with-shadow-DOM-support)
1. [load css string into DOM container](#load-css-string-into-DOM-container)
1. [set element focus](#set-element-focus)
1. [get Event target with shadow DOM support](#get-Event-target)
1. [get ancestor parent](#get-ancestor-node)
1. [get host element](#get-host-element)
1. [get window width and height](#get-window-width-and-height)
1. [get element offset and element top](#get-element-offset-and-element-top)
1. [scroll to anchor or position](#scroll-to-anchor-or-position)
1. [querySelector and querySelectorAll inside container](#queryselector-and-queryselectorall-inside-container)

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
Get element offset
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

querySelector and querySelectorAll methods are getting root node from setRootNode function.

The root node can be shadowRoot.
```
import { setRootNode, querySelector, querySelectorAll } from 'common-dom-utils';

// Only need to setRootNode once.
setRootNode(shadowRoot);

querySelector('.element-className');
querySelectorAll('.element-className');
```

If not calling setRootNode(), by default root node will be document.
