!function(e){function t(t){for(var r,l,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;a.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(312)},308:function(e,t,n){},309:function(e,t){var n=document.querySelector(".mini-clock");n.addEventListener("click",(function(e){var t=e.target.closest(".mini-clock");if(t){var n=e.clientX-t.getBoundingClientRect().left,r=e.clientY-t.getBoundingClientRect().top,o=document.createElement("span");o.style.left=n+"px",o.style.top=r+"px",o.classList.add("mini-clock__wave"),e.currentTarget.append(o),setTimeout((function(){o.remove()}),1e3)}})),n.addEventListener("mousedown",(function(e){e.preventDefault()}))},310:function(e,t){var n=document.querySelector(".calendar");n.addEventListener("click",(function(e){for(var t=n.querySelectorAll("td"),r=0;r<t.length;r++)t[r].classList.contains("active")&&t[r].classList.remove("active");e.target.classList.add("active")}))},311:function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelector(".todo__input"),a=document.querySelector(".todo__button"),l=document.querySelector(".todo__list"),c=document.querySelector(".todo__filter");document.addEventListener("DOMContentLoaded",(function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));e.forEach((function(e){var t=document.createElement("div");t.classList.add("todo__block");var n=document.createElement("li");n.innerText=e,n.classList.add("todo__item"),t.append(n);var r=document.createElement("button");r.innerHTML='<i class="fas fa-check"></i>',r.classList.add("todo__complete"),t.append(r);var o=document.createElement("button");o.innerHTML='<i class="fas fa-trash"></i>',o.classList.add("todo__trash"),t.append(o),l.append(t)}))})),a.addEventListener("click",(function(e){e.preventDefault();var t=document.createElement("div");t.classList.add("todo__block");var n=document.createElement("li");n.innerText=o.value,n.classList.add("todo__item"),t.append(n),function(e){var t;t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));t.push(e),localStorage.setItem("todos",JSON.stringify(t))}(o.value);var r=document.createElement("button");r.innerHTML='<i class="fas fa-check"></i>',r.classList.add("todo__complete"),t.append(r);var a=document.createElement("button");a.innerHTML='<i class="fas fa-trash"></i>',a.classList.add("todo__trash"),t.append(a),l.append(t),o.value=""})),l.addEventListener("click",(function(e){var t=e.target;if(t.closest(".todo__trash")){var n=t.closest(".todo__block");n.classList.add("todo__fall"),n.setAttribute("data-remove",!0);for(var r,o=l.querySelectorAll(".todo__block"),a=0;a<o.length;a++)o[a].dataset.remove&&(r=a);!function(e,t){var n;n=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));n.splice(t,1),localStorage.setItem("todos",JSON.stringify(n))}(0,r),n.addEventListener("transitionend",(function(){n.remove()}))}if(t.closest(".todo__complete")){t.closest(".todo__block").classList.toggle("completed")}})),c.addEventListener("click",(function(e){var t=l.children;if(!t.length)return;console.log(t);var r,o=n(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;switch(e.target.value){case"all":a.style.display="flex";break;case"completed":a.classList.contains("todo__completed")?a.style.display="flex":a.style.display="none";break;case"uncompleted":a.classList.contains("todo__completed")?a.style.display="none":a.style.display="flex"}}}catch(e){o.e(e)}finally{o.f()}}))},312:function(e,t,n){"use strict";n.r(t);n(308),n(309);var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];var o={};function a(){var e=document.body.querySelectorAll("span"),t=new Date,n=t.getHours();o.hours=n;var a=t.getSeconds();a<10&&(a="0"+a),o.seconds=a;var l=t.getMinutes();l<10&&(l="0"+l),o.minutes=l;var c=t.getDate();o.day=c;var i=t.getMonth()+1;i<10&&(i="0"+i),o.month=i,Object.assign(o,function(e){return{MonthBigClock:r[e.getMonth()]}}(t));var s=t.getFullYear();o.year=s;for(var u=0;u<e.length;u++)e[u].dataset.clock&&(e[u].innerHTML=o[e[u].dataset.clock])}a(),setInterval((function(){a()}),1e3);var l=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],c=document.querySelectorAll(".calendar-main__date span");var i=document.querySelector(".calendar"),s=null,u=null;function d(e,t,n){(function(e,t){var n=document.createElement("tbody");t.append(n),e.append(t)})(e,u=document.createElement("table")),f(u);var r=new Date(t,n-1);s=r;var o=(new Date).getDate(),a=(new Date).getMonth(),d=(new Date).getFullYear();!function(e){var t=l[e.getMonth()],n=e.getFullYear();c[0].innerHTML=t,c[1].innerHTML=n}(s);var v=new Date(t,n,0).getDate(),p=r.getDay();if(0==p&&(p=7),1!=p)for(var m=7-(8-p),y=u.querySelectorAll("td"),g=new Date(t,n-1,0).getDate(),_=m;_>0;_--)y[_-1].innerHTML=g,y[_-1].style.color="grey",g--;for(var h=i.querySelector("tr:last-child").querySelectorAll("td"),S=1;S<=v;S++)h[p-1].innerHTML=S,S===o&&a===r.getMonth()&&d===r.getFullYear()&&(h[p-1].className="active duble-active"),(p+=1)>7&&S+1<=v&&(f(),h=i.querySelector("tr:last-child").querySelectorAll("td"),p=1);var b=6-u.querySelectorAll("tr").length;if(7!=p||b>0){var L=7-(p-1)+7*b;p>7&&(f(),h=i.querySelector("tr:last-child").querySelectorAll("td"),p=1);for(var w=1;w<=L;w++)h[p-1].innerHTML=w,h[p-1].style.color="grey",(p+=1)>7&&w+1<=L&&(f(),h=i.querySelector("tr:last-child").querySelectorAll("td"),p=1)}}function f(e){for(var t=i.querySelector("tr:last-child"),n=document.createElement("tr"),r=0;r<7;r++){var o=document.createElement("td");n.append(o)}t?t.after(n):e.tBodies[0].append(n)}d(i,(new Date).getFullYear(),(new Date).getMonth()+1),document.querySelector(".calendar-main__arrows").addEventListener("click",(function(e){if(e.target.classList.contains("calendar-main__arrow--top")){var t=s.getMonth()+1,n=s.getFullYear();t-1<=0&&(t=13,n-=1),u&&u.remove(),d(i,n,t-1)}else if(e.target.classList.contains("calendar-main__arrow--bottom")){var r=s.getMonth()+1,o=s.getFullYear();r-1>13&&(r=1,o+=1),u&&u.remove(),d(i,o,r+1)}})),document.querySelector(".big-clock__date").addEventListener("click",(function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,o=document.querySelector(".calendar table"),a=document.querySelector(".calendar");o&&o.remove(),d(a,n,r)}));n(310),n(311)}});