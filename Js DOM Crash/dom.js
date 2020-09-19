/*
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.images);
*/

//GET ELEMENT BY ID
/*
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('main-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';

//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);

//headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000'; 
*/


//GET ELEMENT BY CLASS NAME
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Last Name';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor='yellow';

//items.style.backgroundColor = '#f4f4f4';//Get Error

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
*/

//GET ELEMENT BY TAG NAME
/*
var items = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Last Name';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor='yellow';

//items.style.backgroundColor = '#f4f4f4';//Get Error

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
*/

//QUERY SELECTOR
/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="Send";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';
*/

//QUERY SELECTOR ALL
/*
var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent='Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
*/

/*
var itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
//console.log(itemList.firstChild);

//First Element Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';
*/

/*
//Next Sibling
var itemList = document.querySelector('#items');
console.log(itemList.nextSibling);

//Next Element Sibling
console.log(itemList.nextElementSibling);

//Create a Div
var newDiv = document.createElement('div');
newDiv.className = 'Hello';//add class
newDiv.id= 'Hello';
newDiv.setAttribute('title','Hello world');//Add attribute
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);
var container= document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);
*/

var button = document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(e){
   // console.log('123');
  // document.getElementById('header-title').textContent = 'Changed';
   //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
   //console.log(e);
   console.log(e.target);
   console.log(e.target.className);
}


