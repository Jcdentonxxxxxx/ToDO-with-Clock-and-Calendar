!function(e){function t(t){for(var n,l,c=t[0],i=t[1],d=t[2],s=0,f=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=i;a.push([121,1]),r()}({121:function(e,t,r){r(122),e.exports=r(313)},308:function(e,t,r){},309:function(e,t){var r=document.querySelector(".mini-clock");r.addEventListener("click",(function(e){var t=e.target.closest(".mini-clock");if(t){var r=e.clientX-t.getBoundingClientRect().left,n=e.clientY-t.getBoundingClientRect().top,o=document.createElement("span");o.style.left=r+"px",o.style.top=n+"px",o.classList.add("mini-clock__wave"),e.currentTarget.append(o),setTimeout((function(){o.remove()}),1e3)}})),r.addEventListener("mousedown",(function(e){e.preventDefault()}))},310:function(e,t){var r=document.querySelector(".calendar");r.addEventListener("click",(function(e){if("TD"===e.target.tagName&&!e.target.hasAttribute("anothermonth")){for(var t=r.querySelectorAll("td"),n=0;n<t.length;n++)t[n].classList.contains("active")&&t[n].classList.remove("active");e.target.classList.add("active")}}))},311:function(e,t){function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=document.querySelector(".todo"),a=document.querySelector(".todo__input"),l=document.querySelector(".todo__button"),c=document.querySelector(".todo__list"),i=document.querySelector(".todo__filter"),d=document.querySelector(".calendar"),u=document.querySelector(".calendar-main__date"),s=document.querySelector(".todo__header"),f=document.querySelector(".modal"),m=f.querySelector(".modal__close"),v=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];function p(e){var t,n=r(document.querySelectorAll(".todo__list .todo__block"));try{for(n.s();!(t=n.n()).done;){t.value.remove()}}catch(e){n.e(e)}finally{n.f()}var o=u.getAttribute("data-monthAndYear").split(","),a=d.querySelector(".calendar .active").innerHTML;(null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"))).filter((function(e){if(e.day==a&&e.month==o[1]&&e.year==o[0])return!0})).forEach((function(e){var t=document.createElement("div");t.classList.add("todo__block"),!0===e.completed&&(t.classList.add("completed"),t.setAttribute("data-complete",!0));var r=document.createElement("li");r.innerText=e.todoText,r.classList.add("todo__item"),t.append(r);var n=document.createElement("button");n.innerHTML='<i class="fas fa-check"></i>',n.classList.add("todo__complete"),t.append(n);var o=document.createElement("button");o.innerHTML='<i class="fas fa-trash"></i>',o.classList.add("todo__trash"),t.append(o),c.append(t)}))}function y(e){var t;if("TD"!==e.target.tagName){if(e.currentTarget!==document)return;t=d.querySelector(".active").parentElement}if(!t){if(e.target.hasAttribute("anothermonth"))return;t=e.target.parentElement}for(var r,n,a=t.querySelectorAll("td"),l=0;l<a.length;l++)a[l].classList.contains("active")&&(r=v[l],n=a[l]);var c=o.querySelector(".todo__header");n.classList.contains("duble-active")&&(r="Сегодня"),c.children[0].innerHTML=r,c.children[1].innerHTML=n.innerHTML}document.addEventListener("DOMContentLoaded",p),document.addEventListener("DOMContentLoaded",y),l.addEventListener("click",(function(e){e.preventDefault();var t=u.getAttribute("data-monthAndYear").split(","),r=d.querySelector(".calendar .active").innerHTML,n=new Date("".concat(t[0],"-").concat(+t[1]+1,"-").concat(r)),o=document.createElement("div");o.classList.add("todo__block");var l=document.createElement("li");l.innerText=a.value,l.classList.add("todo__item"),o.append(l),function(e,t){var r;r=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));r.push({todoText:e,completed:!1,day:t.getDate(),month:t.getMonth(),year:t.getFullYear()}),localStorage.setItem("todos",JSON.stringify(r))}(a.value,n);var i=document.createElement("button");i.innerHTML='<i class="fas fa-check"></i>',i.classList.add("todo__complete"),o.append(i);var s=document.createElement("button");s.innerHTML='<i class="fas fa-trash"></i>',s.classList.add("todo__trash"),o.append(s),c.append(o),a.value=""})),c.addEventListener("click",(function(e){var t=e.target;if(t.closest(".todo__trash")){var r=t.closest(".todo__block");r.classList.add("todo__fall"),r.setAttribute("data-remove",!0);for(var n,o=c.querySelectorAll(".todo__block"),a=0;a<o.length;a++)o[a].dataset.remove&&(n=a);var l=u.getAttribute("data-monthAndYear").split(","),i=d.querySelector(".calendar .active").innerHTML;r.addEventListener("transitionend",(function(){r.remove()})),function(e,t,r,n){var o;o=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var a=0,l=[];o=o.map((function(e){if(e.day==n&&e.month==r[1]&&e.year==r[0]){if(a==t)return void++a;++a}return e}));for(var c=0;c<o.length;c++)o[c]&&l.push(o[c]);localStorage.setItem("todos",JSON.stringify(l))}(0,n,l,i)}if(t.closest(".todo__complete")){var s=t.closest(".todo__block");s.classList.toggle("completed"),"true"==s.dataset.complete?(s.setAttribute("data-complete",!1),s.setAttribute("data-find","findMe"),!1):(s.setAttribute("data-complete",!0),!0,s.setAttribute("data-find","findMe"));for(var f,m=c.querySelectorAll(".todo__block"),v=0;v<m.length;v++)m[v].dataset.find&&(f=v);var p=u.getAttribute("data-monthAndYear").split(","),y=d.querySelector(".calendar .active").innerHTML;!function(e,t,r,n,o){var a;a=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var l=0;a=a.map((function(e){return e.day==o&&e.month==n[1]&&e.year==n[0]&&(l==t&&(e.completed=!e.completed),++l),e})),localStorage.setItem("todos",JSON.stringify(a))}(0,f,0,p,y),s.removeAttribute("data-find")}})),i.addEventListener("click",(function(e){var t=c.children;if(!t.length)return;var n,o=r(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;switch(e.target.value){case"all":a.style.display="flex";break;case"completed":a.classList.contains("completed")?a.style.display="flex":a.style.display="none";break;case"uncompleted":a.classList.contains("completed")?a.style.display="none":a.style.display="flex"}}}catch(e){o.e(e)}finally{o.f()}})),d.addEventListener("click",p),d.addEventListener("click",y),s.addEventListener("click",(function(e){f.classList.toggle("show");var t=f.querySelector(".modal__content");setTimeout((function(){t.style.transform="rotateX(0deg)"}),200)})),m.addEventListener("click",(function(e){f.classList.remove("show"),f.querySelector(".modal__content").style.transform="rotateX(90deg)"}))},312:function(e,t){var r=document.querySelector(".todo-date");document.querySelector(".mini-clock").addEventListener("click",(function(e){r.classList.toggle("show")}))},313:function(e,t,r){"use strict";r.r(t);r(308),r(309);var n=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];var o={};function a(){var e=document.body.querySelectorAll("span"),t=new Date,r=t.getHours();o.hours=r;var a=t.getSeconds();a<10&&(a="0"+a),o.seconds=a;var l=t.getMinutes();l<10&&(l="0"+l),o.minutes=l;var c=t.getDate();o.day=c;var i=t.getMonth()+1;i<10&&(i="0"+i),o.month=i,Object.assign(o,function(e){return{MonthBigClock:n[e.getMonth()]}}(t));var d=t.getFullYear();o.year=d;for(var u=0;u<e.length;u++)e[u].dataset.clock&&(e[u].innerHTML=o[e[u].dataset.clock])}a(),setInterval((function(){a()}),1e3);var l=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],c=document.querySelector(".calendar-main__date"),i=document.querySelectorAll(".calendar-main__date span");var d=document.querySelector(".calendar"),u=null,s=null;function f(e,t,r){(function(e,t){var r=document.createElement("tbody");t.append(r),e.append(t)})(e,s=document.createElement("table")),m(s);var n=new Date(t,r-1);u=n;var o=(new Date).getDate(),a=(new Date).getMonth(),f=(new Date).getFullYear();!function(e){var t=l[e.getMonth()],r=e.getFullYear(),n=e.getMonth()+1;i[0].innerHTML=t,i[1].innerHTML=r,c.setAttribute("data-monthAndYear","".concat(r,",").concat(n))}(u);var v=new Date(t,r,0).getDate(),p=n.getDay();if(0==p&&(p=7),1!=p)for(var y=7-(8-p),g=s.querySelectorAll("td"),h=new Date(t,r-1,0).getDate(),S=y;S>0;S--)g[S-1].innerHTML=h,g[S-1].style.color="grey",g[S-1].setAttribute("anothermonth","previous"),h--;for(var _=d.querySelector("tr:last-child").querySelectorAll("td"),b=1;b<=v;b++)_[p-1].innerHTML=b,b===o&&a===n.getMonth()&&f===n.getFullYear()&&(_[p-1].className="active duble-active"),(p+=1)>7&&b+1<=v&&(m(),_=d.querySelector("tr:last-child").querySelectorAll("td"),p=1);var L=6-s.querySelectorAll("tr").length;if(7!=p||L>0){var q=7-(p-1)+7*L;p>7&&(m(),_=d.querySelector("tr:last-child").querySelectorAll("td"),p=1);for(var A=1;A<=q;A++)_[p-1].innerHTML=A,_[p-1].style.color="grey",_[p-1].setAttribute("anothermonth","next"),(p+=1)>7&&A+1<=q&&(m(),_=d.querySelector("tr:last-child").querySelectorAll("td"),p=1)}}function m(e){for(var t=d.querySelector("tr:last-child"),r=document.createElement("tr"),n=0;n<7;n++){var o=document.createElement("td");r.append(o)}t?t.after(r):e.tBodies[0].append(r)}f(d,(new Date).getFullYear(),(new Date).getMonth()+1),document.querySelector(".calendar-main__arrows").addEventListener("click",(function(e){if(e.target.classList.contains("calendar-main__arrow--top")){var t=u.getMonth()+1,r=u.getFullYear();t-1<=0&&(t=13,r-=1),s&&s.remove(),f(d,r,t-1)}else if(e.target.classList.contains("calendar-main__arrow--bottom")){var n=u.getMonth()+1,o=u.getFullYear();n-1>13&&(n=1,o+=1),s&&s.remove(),f(d,o,n+1)}})),document.querySelector(".big-clock__date").addEventListener("click",(function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,o=document.querySelector(".calendar table"),a=document.querySelector(".calendar");o&&o.remove(),f(a,r,n)}));r(310),r(311),r(312)}});