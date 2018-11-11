---
layout: tags
title: if/else判断的优雅写法
categories: code-snippet
---

```javascript
const actions = new Map([
  ['admin_1', ()=>{/*do sth*/}],
  ['admin_2', ()=>{/*do sth*/}],
  ['admin_3', ()=>{/*do sth*/}],
  ['user_1', ()=>{/*do sth*/}],
  ['user_2', ()=>{/*do sth*/}],
  ['user_3', ()=>{/*do sth*/}],
  ['default', ()=>{/*do sth*/}],
])

/**
 * 按钮点击事件
 * @param {string} condOne 条件一
 * @param {number} condTwo 条件二
 */
const onButtonClick = (condOne, condTwo)=>{
  let action = actions.get(`${condOne}_${condTwo}`) || actions.get('default')
  action.call(this)
}

```


```javascript
const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  const functionC = ()=>{/*send log*/}
  return new Map([
    [/^admin_[1-4]$/,functionA],
    [/^admin_5$/,functionB],
    [/^admin_.*$/,functionC],
    //...
  ])
}

const onButtonClick = (condOne, condTwo)=>{
  let action = [...actions()].filter(([key,value])=>(key.test(`${condOne}_${condTwo}`)))
  action.forEach(([key,value])=>value.call(this))
}

```
