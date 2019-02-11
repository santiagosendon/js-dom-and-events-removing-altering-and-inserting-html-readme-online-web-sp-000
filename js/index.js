//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
// function createElement(element){
// let element = document.createElement('div')
//
// element.innerHTML = 'hi guys i just created this div son'
//
// return element
// }
// createElement()
let element = document.createElement('div')
element.innerHTML = 'Hello, DOM this is my new DIV!'
element.style.backgroundColor = '#f8f9f9';

document.body.appendChild(element)
element.style.textAlign = 'center'

var ul = document.createElement('ul')

for (let i = 0; i < 4; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)
ul.style.textAlign = 'left'
