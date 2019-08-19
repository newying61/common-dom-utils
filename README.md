# js-utils
Common javascript utils function

## load js script in to container
Load js script file into DOM dynamicly
```
import { loadScript } from 'js-utils';

loadScript('https://script-url.com/script.js').then(
  () => { console.log('Script loaded') },
  (e) => { conole.log(e) }
);
```

parameters:
- src: javascript file url
- container: DOM element that \<script\> tag is inserted into, default: document.head
