(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{351:function(a,t,s){"use strict";s.r(t);var e=s(3),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"actf2020-新生赛exec-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actf2020-新生赛exec-1"}},[a._v("#")]),a._v(" ACTF2020 新生赛Exec 1")]),a._v(" "),t("h2",{attrs:{id:"解题思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[a._v("#")]),a._v(" 解题思路")]),a._v(" "),t("h3",{attrs:{id:"打开题目的靶机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开题目的靶机"}},[a._v("#")]),a._v(" 打开题目的靶机")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/image-20220707194601241.png",alt:"image-20220707194601241"}})]),a._v(" "),t("h3",{attrs:{id:"题目分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目分析"}},[a._v("#")]),a._v(" 题目分析：")]),a._v(" "),t("blockquote",[t("p",[a._v("通过题目，以及这里执行的是ping命令")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/image-20220707195109336.png",alt:"image-20220707195109336"}})]),a._v(" "),t("blockquote",[t("p",[a._v("从而知道了这是运用了php函数中的exec函数来模拟常用的doc命令。")])]),a._v(" "),t("h2",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1.使用exec函数必须需要服务器支持调用系统内置函数才行。另外也可以使用system等php内置函数来实现这个功能\nexec执行一个外部程序\n2.执行给予的命令command，不过它并不会输出任何东西，它简单的从命令的结果中传回最后一行，如果你需要去执行一个命令，并且从命令去取得所有资料时，可以使用passthru()这个函数。\n3.system---执行外部程式并且显示输出\n4.system()执行给予的命令command，并且输出结果。如果有给予参数return_var，则执行命令的状态码将会写到这个变量。\n5.如果你允许来自使用者输入的资料，可以传递到此函数，那么你应该使用escapeshellcmd()来确定此使用者无法哄骗(trick)系统来执行武断的(arbitrary)命令。\n6.如果你使用此函数来启动一个程式，而且希望在背景里(background)执行的时候离开它，你必须确定此程式的输出是转向(redirected)到一个文件或是一些输出的资料流，否则PHP将会悬挂(hang)直到程式执行结束。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"可行的解题方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可行的解题方法"}},[a._v("#")]),a._v(" 可行的解题方法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(";前面和后面的命令都要执行，无论前面真还是假\n|直接执行后面的语句\n||如果前面的命令是错的那么就执行后面的，否则只执行前面的语句\n&前面和后面都一起执行\n&&前面为假后面不执行，前面为真同时执行前后俩条命令\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h5",{attrs:{id:"此处我选的是"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#此处我选的是"}},[a._v("#")]),a._v(" 此处我选的是|")]),a._v(" "),t("blockquote",[t("p",[a._v("直接ls查看以下本目录有啥文件")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/image-20220707200028020.png",alt:"image-20220707200028020"}})]),a._v(" "),t("blockquote",[t("p",[a._v("这里只有一个index.php 应该就是现在这个页面，再去看一下上一级页面有什么")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/image-20220707200540657.png",alt:"image-20220707200540657"}})]),a._v(" "),t("blockquote",[t("p",[a._v("发现了flag,那么就直接cat /flag 就好了")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/image-20220707200818484.png",alt:"image-20220707200818484"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);