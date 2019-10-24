(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),s=a.n(r);var c=function(){return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"float-left"},l.a.createElement("a",{className:"link",href:"/"},l.a.createElement("h2",null,"Learn",l.a.createElement("img",{src:"https://i.stack.imgur.com/zHFFO.png",width:"110",style:{pointerEvents:"none"},alt:"logo"})))),l.a.createElement("div",{className:"git-link float-right"},l.a.createElement("a",{className:"link",href:"https://github.com/benchaplin/learn_latex_site"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/25/25231.svg",width:"30",alt:"git"}))),l.a.createElement("div",{className:"clearfix"}))},o=a(8);var m=function(){return l.a.createElement("p",null,l.a.createElement(o.b,{style:{color:"black"},to:"/"},"How'd you end up here?"))};var i=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav flex-column"},l.a.createElement("p",{className:"nav-topic"},l.a.createElement("b",null,l.a.createElement("u",null,"Basic Commands"))),l.a.createElement("ol",{type:"I"},l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/exps"},"Exponents")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/subs"},"Subscripts")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/sqrts"},"Square Roots")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/fracs"},"Fractions")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/binoms"},"Binomial Coefficients")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/sums"},"Sums")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",style:{color:"black"},href:"/ints"},"Integrals")))))},u=a(5),p=a(13);a(16);var h=function(e){return l.a.createElement("textarea",{className:"form-control",id:"comment",rows:"3",spellCheck:"false",value:e.text,onChange:e.handleChange})},E=a(9);a(17);var d=function(e){return l.a.createElement("p",{className:"tex"},l.a.createElement(E.BlockMath,{math:e.text,renderError:function(e){return null}}))},f=[{title:"Exponents",path:"/exps",explanation1:"To write an exponent in TeX, use the ^ character.",explanation2:"If the exponent has more than one character, wrap it in curly brackets.",prompt:"n^2 + n + 41",test:"x^{a + b + c} = (x^a)(x^b)(x^c)",hint:"Wrap multiple-character exponents in {}."},{title:"Subscripts",path:"/subs",explanation1:"To write a subscript in TeX, use the _ character.",explanation2:"If the subscript has more than one character, wrap it in curly brackets.",prompt:"X_1 + X_2 + ... + X_n",test:"a^nx^n + a^{n - 1}x^{n - 1} + ... + a_1x + a_0 = 0",hint:"Wrap multiple-character subscripts in {}."},{title:"Square Roots",path:"/sqrts",explanation1:"To write a square root in TeX, use the \\sqrt command.",explanation2:"Always wrap square root expressions in curly brackets.",prompt:"\\sqrt{2}",test:"z = x + \\sqrt{-1}y",hint:"Wrap multiple-character expressions in {}."},{title:"Fractions",path:"/fracs",explanation1:"To write a fraction in TeX, use the \\frac command.",explanation2:"Always input the numerator and denominator in curly brackets.",prompt:"-\\frac{1}{12}",test:"f(a) + \\frac{f'(a)}{1!}(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + ...",hint:"Wrap multiple-character numerators/denominators in {}."},{title:"Binomial Coefficients",path:"/binoms",explanation1:"To write a binomial coefficient in TeX, use the \\binom command.",explanation2:"Always input the top and bottom numbers/expressions in curly brackets.",prompt:"\\binom{52}{4}",test:"\\binom{n + 1}{k + 1} = \\frac{n!}{(n - k)!k!} + \\frac{n!}{(n - k - 1)!(k + 1)!}",hint:"Recall \\frac."},{title:"Sums",path:"/sums",explanation1:"To use summation notation in TeX, use the \\sum command. Input expressions below or above the summation using the _ and ^ characters respectively.",explanation2:"If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",prompt:"\\sum_{k = 0}^n",test:"(x + y)^n = \\sum_{k = 0}^n \\binom{n}{k}x^{k}y^{n - k}",hint:"Recall \\frac and \\binom."},{title:"Integrals",path:"/ints",explanation1:"To write an integral in TeX, use the \\int command. Input expressions below or above the integral analogously to sums, using the _ and ^ characters.",explanation2:"If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",prompt:"\\int_0^1 x^2",test:"\\int_0^\\infty \\sqrt{x} e^{-x} dx = \\frac{1}{2} \\sqrt{\\pi}",hint:"Recall \\frac and \\sqrt, use \\pi."}],v=function(){return f};function b(e){for(var t=e.replace(/ /g,""),a=0;a<t.length;)"}"===t.charAt(a)&&"{"===t.charAt(a-2)&&(t=t.slice(0,a-2)+t.slice(a-1,a)+t.slice(a+1)),a+=1;return t}var x=function(e){var t=Object(n.useState)(e.prompt),a=Object(p.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),o=Object(p.a)(c,2),m=o[0],i=o[1],u=v().indexOf(e.lesson)<v().length-1?v()[v().indexOf(e.lesson)+1].path:"/";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row",style:{marginTop:"15px"}},l.a.createElement("div",{className:"container-fluid col-sm-7",style:{marginBottom:10}},l.a.createElement(h,{text:r,handleChange:function(t){e.comparable&&b(t.target.value)===b(e.lesson.test)&&i(!0),s(t.target.value)},setText:s})),l.a.createElement("div",{className:"col-sm-5"},l.a.createElement(d,{text:r}))),l.a.createElement("div",null,m?l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("a",{href:u,style:{color:"white"}},"Next")):l.a.createElement(l.a.Fragment,null)))},g={prompt:"\\sum_{n = 0}^\\infty q(n)x^n = \\prod_{k = 1}^\\infty (1 + x^k)"};var y=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,"What is",l.a.createElement("img",{src:"https://i.stack.imgur.com/zHFFO.png",width:"90",style:{pointerEvents:"none"},alt:"logo"}),"?")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("p",null,l.a.createElement("img",{src:"https://i.stack.imgur.com/zHFFO.png",width:"50",style:{pointerEvents:"none"},alt:"logo"}),"is a typesetting system used in technical academic fields. The system takes your input and formats it to display equations, graphics and document layouts."),l.a.createElement("p",null,"With the"," ",l.a.createElement("a",{href:"http://texdoc.net/texmf-dist/doc/latex/amsmath/amsldoc.pdf",style:{color:"black"}},l.a.createElement("b",null,"amsmath"))," ","package,",l.a.createElement("img",{src:"https://i.stack.imgur.com/zHFFO.png",width:"50",style:{pointerEvents:"none"},alt:"logo"}),"allows users to type up mathematics for a professional presentation.")),l.a.createElement("div",{className:"col-sm-2"})),l.a.createElement("div",{className:"row"},l.a.createElement("h3",{style:{paddingTop:"20px"}},"How do I use it?")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("p",null,"This website offers a basic TeX compiler to help you get started learning basic mathematical formatting. To work in a full document environment, try"," ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.overleaf.com/",style:{color:"black"}},"Overleaf.com")),", an easy-to-use TeX editor with great templates for beginners."),l.a.createElement("p",null,"Use this website to aid your",l.a.createElement("img",{src:"https://i.stack.imgur.com/zHFFO.png",width:"50",style:{pointerEvents:"none"},alt:"logo"}),"learning curve. Completing all of the lessons will give you an excellent foundation on which to build your capabilities writing up math in TeX.")),l.a.createElement("div",{className:"col-sm-2"})),l.a.createElement("div",{className:"row"},l.a.createElement("h3",{style:{paddingTop:"20px"}},"Try it Out!")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(x,{prompt:g.prompt,test:g.prompt}))),l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("a",{href:"\\exps",style:{color:"white"}},"Begin")))};var k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,e.lesson.explanation1),l.a.createElement("p",null,e.lesson.explanation2))},w=a(22),N=a.n(w);var T=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"subcontainer"},l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,l.a.createElement("u",null,e.lesson.title))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(k,{lesson:e.lesson})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("p",null,l.a.createElement("b",null,"Try it out!")),l.a.createElement(x,{prompt:e.lesson.prompt,lesson:e.lesson,comparable:!1})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"subcontainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("p",null,"TeX up the following to move on: \xa0")),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement(E.BlockMath,{math:e.lesson.test})),l.a.createElement("div",{className:"col-sm-3"}),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn btn-outline-dark","data-tip":e.lesson.hint,style:{marginBottom:10}},"Hint")),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn btn-outline-dark","data-tip":e.lesson.test,style:{marginBottom:10}},"Answer")),l.a.createElement(N.a,{place:"left",type:"dark",effect:"solid"})),l.a.createElement(x,{prompt:" ",lesson:e.lesson,comparable:!0})))};var _=function(e){var t=e.lessonList.map((function(e){return l.a.createElement(u.a,{path:e.path},l.a.createElement(T,{lesson:e}))}));return l.a.createElement("div",{className:"general"},l.a.createElement(c,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement(i,null)),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0},l.a.createElement(y,{isAuthed:!0})),t,l.a.createElement(u.a,null,l.a.createElement(m,null))))))};s.a.render(l.a.createElement(o.a,null,l.a.createElement(_,{lessonList:v()})),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b94901b3.chunk.js.map