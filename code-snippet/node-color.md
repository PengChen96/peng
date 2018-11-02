---
layout: tags
title: node 控制台输出颜色
categories: code-snippet
---

```javascript
 const styles = {
   'bold'          : ['\x1B[1m',  '\x1B[22m'],
   'italic'        : ['\x1B[3m',  '\x1B[23m'],
   'underline'     : ['\x1B[4m',  '\x1B[24m'],
   'inverse'       : ['\x1B[7m',  '\x1B[27m'],
   'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
   'white'         : ['\x1B[37m', '\x1B[39m'],
   'grey'          : ['\x1B[90m', '\x1B[39m'],
   'black'         : ['\x1B[30m', '\x1B[39m'],
   'blue'          : ['\x1B[34m', '\x1B[39m'],
   'cyan'          : ['\x1B[36m', '\x1B[39m'],
   'green'         : ['\x1B[32m', '\x1B[39m'],
   'magenta'       : ['\x1B[35m', '\x1B[39m'],
   'red'           : ['\x1B[31m', '\x1B[39m'],
   'yellow'        : ['\x1B[33m', '\x1B[39m'],
   'whiteBG'       : ['\x1B[47m', '\x1B[49m'],
   'greyBG'        : ['\x1B[49;5;8m', '\x1B[49m'],
   'blackBG'       : ['\x1B[40m', '\x1B[49m'],
   'blueBG'        : ['\x1B[44m', '\x1B[49m'],
   'cyanBG'        : ['\x1B[46m', '\x1B[49m'],
   'greenBG'       : ['\x1B[42m', '\x1B[49m'],
   'magentaBG'     : ['\x1B[45m', '\x1B[49m'],
   'redBG'         : ['\x1B[41m', '\x1B[49m'],
   'yellowBG'      : ['\x1B[43m', '\x1B[49m']
 };
```

```javascript
const colorize = (...args) => ({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});
console.log(colorize('foo').red);
console.log(colorize('foo', 'bar').bgBlue);
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite);
```
