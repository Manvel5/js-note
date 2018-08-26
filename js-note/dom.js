					DOM

var htmlCollection = document.images;//document.images возвращает коллекцию изображений в текущем HTML документе.

document.URL  //Возвращает строку URL документа HTML.

//Возвращает текущий сфокусированный элемент, то есть элемент, на котором будут вызываться события клавиатуры
var curElement = document.activeElement; //Часто возвращается <input> или <textarea> объект

document.head;//Возвращает узел <head>
document.body;
//Возвращает узел <body> или <frameset> текущей страницы, или null если таких элементов не существует.

//document.designMode переключает режим редактирования для всего документа. Допустимые значения: "on" и "off".
var mode = document.designMode;
document.designMode = "on";
document.designMode = "off";

document.domain ;//returned domain
var badDomain = "www.example.xxx";
if (document.domain == badDomain)
   window.close(); // Just an example - window.close() sometimes has no effect.


collection = document.forms;//forms returns a collection (an HTMLCollection) of the <form> elements within the current document.

document.body.clientWidth;
document.body.clientHeight; //document.height depricated
document.body.clientLeft;
document.body.clientTop;


document.lastModified;//Возвращает строку, содержащую дату и время последнего изменения текущего документа.

document.readyState;//Свойство Document.readyState объекта document описывает состояние загрузки страницы.

var scripts = document.scripts;//Returns a list of the <script> 

document.styleSheets;// Document.styleSheets read-only property returns a StyleSheetList of CSSStyleSheet 

var docTitle = document.title;// return doc title

document.characterSet; //UTF-8 // The Document.characterSet read-only

document.documentElement; // return DOM elements

document.getElementById('para-01').firstChild;
document.links
var text = element.textContent;
element.textContent = "this is some sample text";

		Methods

document.getElementsByClassName('test');// return NodeList or HTMLCollection
document.getElementsByName('name');// return NodeList or HTMLCollection
document.getElementById(id);
document.getElementsByTagName(name);// return NodeList or HTMLCollection
document.getElementsByTagNameNS(namespace, name);//document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");
document.querySelector("div.user-panel.main input[name='login']");
document.querySelectorAll("div.note, div.alert");// return NodeList or HTMLCollection

var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"

var fragment = document.createDocumentFragment();
DocumentFragments являются DOM нодами. Они, при этом, не являются частями основного дерева DOM. 
Обычно используются для создания фрагмента документа, добавления в него новых элементов/нод,
а затем присоединения этого фрагмента к основному дереву. В основном дереве фрагмент буден 
заменён собственными дочерними элементами.
var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);

var element = document.createElement(tagName[, options]);
var newDiv = document.createElement("div");
newDiv.innerHTML = "<h1>Привет!</h1>";// добавляем только что созданый элемент в дерево DOM
my_div = document.getElementById("org_div1");
document.body.insertBefore(newDiv, my_div);

document.createElementNS("http://www.w3.org/1999/xhtml","div");//Creates an element with the specified namespace URI and qualified name.

var newtext = document.createTextNode(text),
p1 = document.getElementById("p1");
p1.appendChild(newtext);

document.hasFocus();
var oldNode = document.getElementById("myNode");
document.importNode(oldNode, true);//Creates a copy of a node from an external document that can be inserted into the current document.

The document.open() method opens a document for writing.
document.writeln("<p>enter password:</p>");//new line
document.write("<p>enter password:</p>");

			Element

document.getElementById('test').attributes;
document.body.childElementCount;
document.body.children;

var ul = document.getElementById('ul');
ul.firstElementChild.textContent; // return first li text
ul.lastElementChild.textContent; // return first li text
document.body.classList; //return list of class
div.classList.remove("foo");
div.classList.add("anotherclass");
div.classList.contains("foo");//true if exist

document.body.className;
document.body.id
document.getElementById("innerHTMLtxt").textContent = document.getElementById("txt").innerHTML;
document.body.localName;//return "body"
document.querySelectorAll('.input')[0].name; //return attribute name value

document.head.nextElementSibling; //return body
document.body.previousElementSibling;// return head
//<x:div onclick="console.log(this.prefix)"/>
element.prefix;//x
document.body.outerHTML;// included body
document.body.innerHTML;// not included body

document.getElementById('id').scrollHeight;
//Значение scrollHeight  равно минимальному clientHeight, которое потребуется элементу для того, чтобы поместить всё содержимое в видимую область

document.getElementById('id').scrollLeft;
document.getElementById('id').scrollLeft = 10;
//Свойство scrollLeft получает или устанавливает количество пикселей, на которое контент элемента прокручен влево.

//Свойство scrollTop считывает или устанавлиет количество пикселей, прокрученных от верха элемента;
document.getElementById('id').scrollTop;

document.body.tagName.toLowerCase();//return "body"

												Methods

var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");
div1.attributes('id'); //return booblean if the current element has id attribute
div1.attributes();//returns Boolean value, indicating if the current element has any attributes or not.
var d1 = document.getElementById('one'); 
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// foo
// <!-- beforeend -->
// </p>
// <!-- afterend -->
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
div1.removeAttribute('name');
var b = document.querySelector("button"); 
b.setAttribute("name", "helloButton");


												EventTarget

var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false); 
//if thurth param true События, восходящие вверх по дереву, не будут вызывать. умолчанию равно false.	

  onclick2 = function(event) {
    console.log(this.name); // 'Something Good', так как в this передано значение объекта Something
  };
  element.addEventListener('click', onclick2.bind(this), false);
  element.addEventListener('error', function(){});
  element.removeEventListener('click', this, false);	

  //Интерфейс Event представляет собой любое событие, которое происходит в DOM; 									
event.bubbles; //Логическое значение, указывающее, вспыло ли событие вверх по DOM или нет.
Event.cancelBubble;//Если установить знаение в true до возврата из обработчика события (Event Handler), то событие не будет распространяться дальше 
Event.cancelable ;//Логическое значение, показывающее возможность отмены события.
Event.defaultPrevented ;//Показывает, была ли для события вызвана функция event.preventDefault().
Event.target; //Ссылка на целевой объект, на котором произошло событие.
Event.type;//Название события (без учета регистра символов).

Event.preventDefault(); //Отменяет событие (если его возможно отменить).
Event.stopPropagation();//Остановка распространения события далее по DOM.