(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{345:function(t,a,s){"use strict";s.r(a);var n=s(33),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据存取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据存取"}},[t._v("#")]),t._v(" 数据存取")]),t._v(" "),s("h2",{attrs:{id:"存储位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储位置"}},[t._v("#")]),t._v(" 存储位置")]),t._v(" "),s("p",[t._v("在javaScript中有下面4中基本的数据存储位置")]),t._v(" "),s("p",[t._v("1、字面量：只代表自身，不存储在特定位置。包括字符串、数字、布尔、对象、数组、函数、正则表达式、以及null和undefined")]),t._v(" "),s("p",[t._v("2、本地变量：用var、let、const定义的数据存储单元")]),t._v(" "),s("p",[t._v("3、数组元素：存储在js数组对象内部，以数字为索引")]),t._v(" "),s("p",[t._v("4、对象成员：存储在js对象内部，以字符串为索引")]),t._v(" "),s("p",[t._v("从一个字面量和一个局部变量中存取数据的性能差异是微不足道的。访问数组元素和对象成员的代价则稍微会高一些。具体差异取决于浏览器。如果在乎运行速度，应该尽量使用字面量和局部变量，减少数组项和对象成员的引用。")]),t._v(" "),s("h2",{attrs:{id:"作用域与作用域链和标识解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域与作用域链和标识解析"}},[t._v("#")]),t._v(" 作用域与作用域链和标识解析")]),t._v(" "),s("p",[t._v("js作用域是影响js性能的一个元素。理解作用域和性能的关系得先理解作用域的工作原理")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("add创建了一个函数作用域,add是Function的一个实例")]),t._v(" "),s("p",[t._v("Funtion中有一个属性[[Scopes]],这是一个无法被编码访问到的属性。这个属性中包含了一个集合，而这个集合就是作用域链，它决定了哪些数据可以被add访问。add创建后，其作用域链中首先会插入一个对象，这个对象里包含了所有在全局范围中定义的变量如 window、navigator、document和函数所在定义域中定义的所有变量")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://picture.cybqd.com/images/2020/04/23/chap2-1.png",alt:"avatar"}})]),t._v(" "),s("p",[t._v("当add函数被执行时(var total=add(5, 10))会创建一个称之为执行环境(执行上下文)的对象。而且每次执行都会创建、每当函数执行完毕该执行环境就会被销毁(闭包除外)。")]),t._v(" "),s("p",[t._v("执行环境也有自己的作用域链。当执行环境被创建时其作用域链首先被初始化为被执行函数的作用域链(即add)。然后会创建一个活动对象这个活动对象内包含了add函数中出现过的局部变量、以及this、arguements等自带的一些对象。然后将这个活动对象放到作用域链的最前端")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://picture.cybqd.com/images/2020/04/23/chap2-2.png",alt:""}})]),t._v(" "),s("p",[t._v("函数执行时需要查找变量其顺序便是其作用域链的顺序一样，首先从第一个对象（即活动对象）开始，然后依次往后，正是这种查找过程导致作用域影响了性能。")]),t._v(" "),s("p",[t._v("在执行环境中一个变量所在的位置越深，其读者速度也就越慢。最快的当然就是函数内部中直接定义的变量，因为它就在作用域链的头部。而全局变量往往是最慢的因为全局对象总是在作用域链的尾部。")]),t._v(" "),s("p",[t._v("作用域链一般不会改变。除非是with语句和try/catch")]),t._v(" "),s("p",[t._v("with语句执行时会创建一个新的变量对象。这个对象包含了所有参数指定对象的属性，然后把这个对象推到作用域链的头部。这样确实访问这个对象的属性性能会搞一些。但同时一会导致函数中定义的局部变量被处于作用域链的第二个位置，然后你再想访问这些局部变量的代价会更大")]),t._v(" "),s("p",[t._v("catch语句同样如此。catch语句会把异常对象推到作用域链的首部。其结果和with语法是差不多的。")]),t._v(" "),s("h2",{attrs:{id:"闭包、作用域、内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包、作用域、内存"}},[t._v("#")]),t._v(" 闭包、作用域、内存")]),t._v(" "),s("p",[t._v("闭包在js中是一个难以捉摸的东西、而且这个东西可能会带来一些性能问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assignEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xdi9592"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"save-btn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面的代码就会创建一个闭包。正如前面所说的当一个函数执行完后其执行环境会被销毁，然后闭包会阻止这件事情发生")]),t._v(" "),s("p",[t._v("assignEvents函数运行时作用域链被创建，本来执行完毕后其执行环境会被销毁(作用域链当然也就没了)。但是闭包被创建了，闭包被创建时，其[[Scopes]]属性会包含assignEvent执行对象中的作用域链的引用。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://picture.cybqd.com/images/2020/04/23/chap2-3.png",alt:""}})]),t._v(" "),s("p",[t._v("就像这样。")]),t._v(" "),s("p",[t._v("因为其执行环境一直存在所以会需要更多的内存开销。")]),t._v(" "),s("h2",{attrs:{id:"对象成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象成员"}},[t._v("#")]),t._v(" 对象成员")]),t._v(" "),s("p",[t._v("js在查找对象中的属性或方法时会先在该对象中查找，如果没找到则沿着原型链一直查找。")]),t._v(" "),s("p",[t._v("这种查找方式往往也会影响js代码的性能，当所需要查找的属性或方法在原型链的位置越深，其所需时间也会越长。")]),t._v(" "),s("p",[t._v("另外嵌套成员也会影响性能")]),t._v(" "),s("p",[t._v("比如 window.location.href查找的时间会比 location.href要长")])])}),[],!1,null,null,null);a.default=r.exports}}]);