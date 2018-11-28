---
layout: tags
title: 格式化json数据
categories: code-snippet
---

```javascript
  // 格式化json数据
  const formatJson = (json) => {
    let formatted = '';     // 转换后的json字符串
    let padIdx = 0;         // 换行后是否增减PADDING的标识
    let PADDING = '    ';   // 4个空格符
    // 将对象转化为string
    if (typeof json !== 'string') {
      json = JSON.stringify(json);
    }
    json = json.replace(/([\{\}])/g, '\r\n$1\r\n')
      .replace(/([\[\]])/g, '\r\n$1\r\n')
      .replace(/(\,)/g, '$1\r\n')
      .replace(/(\r\n\r\n)/g, '\r\n')
      .replace(/\r\n\,/g, ',');
    //
    (json.split('\r\n')).forEach((node, index) => {
      let indent = 0;
      let padding = '';
      if (node.match(/\{$/) || node.match(/\[$/)) {
        indent = 1;
      }
      else if (node.match(/\}/) || node.match(/\]/)) {
        padIdx = padIdx !== 0 ? --padIdx : padIdx;
      }
      else {
        indent = 0;
      }
      for (let i = 0; i < padIdx; i++) {
        padding += PADDING;
      }
      formatted += padding + node + '\r\n';
      padIdx += indent;
    });
    return formatted;
  };
```
