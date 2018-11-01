---
layout: tags
title: event preventDefault浏览器默认行为
categories: code-snippet
---

```javascript
  document.addEventListener('touchstart', function(event) {
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
    }
  }, false);
```
