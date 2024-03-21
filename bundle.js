(()=>{"use strict";var e={190:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),c=n.n(s),l=new URL(n(140),n.b),d=a()(o()),u=c()(l);d.push([e.id,"* {\n  box-sizing: border-box !important;\n}\n\nbody {\n  font-size: 14px;\n  background-color: #222222;\n  color: #fff;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#app {\n  padding-bottom: 48px;\n}\n\n*:focus {\n  outline: none;\n}\n.item-view,\n.item-test {\n  width: 100%;\n}\n\n.item-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.item-view h2 {\n  font-size: 2rem;\n  font-weight: bold;\n  user-select: none;\n}\n\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\n\n.item-list {\n  display: grid;\n  margin: 48px 0;\n  grid-template-columns: repeat(4, 180px);\n  grid-column-gap: 160px;\n  grid-row-gap: 48px;\n}\n\n.item-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-thumbnail {\n  border-radius: 8px;\n  width: 180px;\n  height: 270px;\n  background-size: contain;\n}\n\n.item-title {\n  margin-top: 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.item-score {\n  margin-top: 16px;\n  font-size: 1.2rem;\n}\n\n.item-score::after {\n  margin-left: 8px;\n}\n\n.item-title.skeleton::after,\n.item-score.skeleton::after {\n  font-size: 0;\n  content: 'loading';\n}\n\n.full-width {\n  width: 100%;\n}\n\n.last-item {\n  margin-top: 48px;\n}\n\nbutton.btn {\n  border: 0;\n  border-radius: 8px;\n  height: 30px;\n  color: #fff;\n}\n\nbutton.primary {\n  background: #f33f3f;\n}\n\n.item-card .skeleton {\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n  background-size: 400%;\n  animation: skeleton-animation 5s infinite ease-out;\n  border-radius: 8px;\n}\n\n@keyframes skeleton-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\nheader {\n  width: 100%;\n  min-width: 1200px;\n  height: 72px;\n  background-color: #222;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid white;\n  margin-bottom: 48px;\n}\n\nheader h1 {\n  cursor: pointer;\n  user-select: none;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: -0.1rem;\n  color: #f33f3f;\n}\n\nheader > img.logo:hover {\n  cursor: pointer;\n}\n\nheader > .search-box {\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n\nheader .search-box > input {\n  border: 0;\n}\n\nheader .search-box > .search-button {\n  width: 14px;\n  border: 0;\n  text-indent: -1000rem;\n  background: url("+u+") transparent no-repeat 0 1px;\n  background-size: contain;\n}\n",""]);const p=d},834:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const s=a},285:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".toast {\n  position: fixed;\n  min-width: 300px;\n  width: fit-content;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: white;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);\n  padding: 20px 30px;\n  border-radius: 8px;\n  animation: toastAnimation 3s forwards;\n  color: #851414;\n}\n\n@keyframes toastAnimation {\n  0% {\n    bottom: -100px;\n    opacity: 0.5;\n  }\n  30% {\n    bottom: 40px;\n    opacity: 1;\n  }\n  70% {\n    bottom: 40px;\n    opacity: 1;\n  }\n  100% {\n    bottom: -100px;\n    opacity: 0.5;\n  }\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},140:(e,t,n)=>{e.exports=n.p+"f1bd4269f4446ceae306.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"2e162b4fefb34cd7ed8d.png";n(140),n.p;const t=n.p+"6328741810b732410eec.png",r=n.p+"7c061b3e7d50bb1cc072.svg",o=n.p+"00322dfc14e1f18aabed.jpg";var i=n(379),a=n.n(i),s=n(795),c=n.n(s),l=n(569),d=n.n(l),u=n(565),p=n.n(u),h=n(216),f=n.n(h),m=n(589),v=n.n(m),b=n(285),g={};g.styleTagTransform=v(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),a()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var y=n(834),w={};w.styleTagTransform=v(),w.setAttributes=p(),w.insert=d().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=f(),a()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var x=n(190),k={};k.styleTagTransform=v(),k.setAttributes=p(),k.insert=d().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=f(),a()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;const E=e=>document.querySelector(e);const M=new Event("retryButtonClickEvent");var L,S,P,T,C,N=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},j=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};L=new WeakMap,S=new WeakMap,P=new WeakMap,T=new WeakMap,C=new WeakMap;const I="https://api.themoviedb.org/3",R=`${I}/movie/popular`,Z=`${I}/search/movie`;function z(e,t){return n=this,r=void 0,i=function*(){const n=function(e){const t=Object.entries(e).map((([e,t])=>[e.toString(),t.toString()]));return new URLSearchParams(t)}(t),r=e+"?"+new URLSearchParams(n),o=yield fetch(r);if(!o.ok){const e=(yield o.json()).message||"알 수 없는 에러 발생";throw new Error(`${e} 다시 요청해주세요.`)}const{total_pages:i,results:a}=yield o.json();return{total_pages:i,results:a}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((i=i.apply(n,r||[])).next())}));var n,r,o,i}function A({relativePath:e,width:t}){return e?`https://image.tmdb.org/t/p/w${t}${e}`:o}class B{constructor(e){this.movie=Object.assign(Object.assign({},e),{posterPath:A({relativePath:e.posterPath,width:200})})}get data(){return Object.assign({},this.movie)}}const _={API_KEY:"60d461e00b8fa585a34bb8f4f78ff6c8",ACCESS_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQ0NjFlMDBiOGZhNTg1YTM0YmI4ZjRmNzhmZjZjOCIsInN1YiI6IjY1ZjQyMTU4MWZhMWM4MDE3ZDViODY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3VRmOOhnzzlftGzeWF6_B7Gdrg2Ea8SRWM3EEHcbfxk"},q=function(e){var t;const n=null!==(t=_[e])&&void 0!==t?t:"";if(void 0===n)throw new Error(`${e}에 대한 환경 변수를 찾을 수 없습니다.`);return n};var O=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const W=new Event("clickSearchButton"),D=new Event("logoClickEvent"),J=function(e){const t=document.createElement("div");t.classList.add("toast"),t.textContent=e,t.setAttribute("aria-live","assertive"),document.body.appendChild(t),setTimeout((()=>t.remove()),2500)};class Y extends Error{constructor(){super("더 이상 요청할 수 없습니다.")}}var $,K,U,V,G=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},H=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},Q=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};$=new WeakMap,K=new WeakMap,U=new WeakMap,V=new WeakMap,(new class{constructor(){$.set(this,void 0),K.set(this,void 0),U.set(this,void 0),V.set(this,void 0),H(this,$,"","f"),H(this,K,new class{constructor(){this.pageNumberList=new Map}add(e){var t;const n=null!==(t=this.pageNumberList.get(e))&&void 0!==t?t:0;this.pageNumberList.set(e,n+1)}clear(e){this.pageNumberList.has(e)&&this.pageNumberList.set(e,1)}get(e){if(this.pageNumberList.has(e))return this.pageNumberList.get(e)}init(e){this.pageNumberList.set(e,1)}},"f"),Q(this,K,"f").init("popular"),Q(this,K,"f").init("search"),H(this,U,new class{fetchPopularMovieList(e){return O(this,void 0,void 0,(function*(){const{total_pages:t,results:n}=yield z(R,{api_key:q("API_KEY"),language:"ko-KR",page:e});return this.createMoviePageData({total_pages:t,results:n,pageNumber:e})}))}fetchSearchResult({query:e,pageNumber:t}){return O(this,void 0,void 0,(function*(){const{total_pages:n,results:r}=yield z(Z,{api_key:q("API_KEY"),language:"ko-KR",query:e,page:t});return this.createMoviePageData({total_pages:n,results:r,pageNumber:t})}))}createMoviePageData({total_pages:e,results:t,pageNumber:n}){return{hasNextPage:e>n,movieList:t.map((e=>new B({id:e.id,title:e.title,posterPath:e.poster_path,voteAverage:e.vote_average})))}}},"f"),H(this,V,new class{constructor({title:e,handleMoreButton:t}){L.set(this,void 0),S.set(this,void 0),P.set(this,void 0),T.set(this,void 0),C.set(this,void 0),N(this,L,E("ul.item-list"),"f"),N(this,S,E(".item-view > h2"),"f"),j(this,S,"f").textContent=e,N(this,C,t,"f"),N(this,T,function({type:e,size:t,variant:n,name:r}){const o=document.createElement("button");return o.classList.add("btn",t,n),o.textContent=r,o.type=e,o}({size:"full-width",variant:"primary",name:"더 보기 ",type:"button"}),"f"),this.toggleMoreButtonVisibility(),j(this,T,"f").addEventListener("click",(()=>this.initHandleClickMoreButton())),E("section").append(j(this,T,"f"))}pushMoreSkeletonList(){const e=new Array(20).fill().map((()=>{const e=function(){const e=document.createElement("a");e.href="#";const t=document.createElement("div");t.classList.add("item-card");const n=document.createElement("img");n.classList.add("item-thumbnail","skeleton");const r=document.createElement("p");r.classList.add("item-title","skeleton");const o=document.createElement("p");return o.classList.add("item-score","skeleton"),t.append(n,r,o),e.append(t),e}(),t=document.createElement("li");return t.append(e),t}));e.forEach((e=>{j(this,L,"f").appendChild(e)})),N(this,P,e,"f"),this.toggleMoreButtonVisibility()}createEmptySearchResult(){const e=document.createElement("h3");return e.classList.add("empty-search-result"),e.textContent="검색 결과가 없습니다.",e}removeSkeleton(){j(this,P,"f").forEach((e=>{e.remove()}))}setEmptySearchResult(e){var t;0!==e&&(null===(t=E("h3.empty-search-result"))||void 0===t||t.remove()),0!==e||E("h3.empty-search-result")||E(".item-view").insertBefore(this.createEmptySearchResult(),j(this,L,"f"))}replaceSkeletonListToData({movieList:e,hasNextPage:n}){this.setEmptySearchResult(e.length),j(this,P,"f").forEach(((n,r)=>{if(r>=e.length)return n.remove();!function({item:e,movie:n}){const r=e.querySelector(".item-thumbnail"),o=e.querySelector(".item-title"),i=e.querySelector(".item-score");r.onload=()=>{r.classList.remove("skeleton"),o.classList.remove("skeleton"),i.classList.remove("skeleton"),r.loading="lazy",r.alt=n.title,o.textContent=n.title;const e=document.createElement("img");e.src=t,e.alt="별점",i.append(e,n.voteAverage)},r.src=n.posterPath}({item:n,movie:e[r].data})})),this.toggleMoreButtonVisibility(n),N(this,P,[],"f")}toggleMoreButtonVisibility(e){j(this,T,"f").style.visibility=e?"visible":"hidden"}clearMovieList(){j(this,L,"f").replaceChildren()}createRetryButton(e){const t=function(){const e=function(){const e=document.createElement("button");return e.className="retry-button",e.style.background=`no-repeat url(${r})`,e.style.backgroundSize="cover",e.style.backgroundColor="white",e.style.backgroundPosition="4px 3px",e.style.borderRadius="50%",e.style.width="50px",e.style.height="50px",e.style.cursor="pointer",e.style.border="none",e}();return e.addEventListener("click",(()=>e.dispatchEvent(M))),e}();E(".item-view").insertBefore(t,E("ul.item-list")),t.addEventListener("retryButtonClickEvent",e)}removeRetryButton(){const e=E(".retry-button");null==e||e.remove()}initHandleClickMoreButton(){return e=this,t=void 0,r=function*(){yield j(this,C,"f").call(this)},new((n=void 0)||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}setTitle(e){j(this,S,"f").textContent=e}}({title:"지금 인기 있는 영화",handleMoreButton:()=>this.addMovieList(1)}),"f")}init(){return G(this,void 0,void 0,(function*(){(function(){const t=function(){const t=document.createElement("header"),n=document.createElement("img");n.classList.add("logo"),n.alt="MovieList 로고",n.src=e;const r=function(){const e=document.createElement("form"),t=document.createElement("input");t.placeholder="검색",t.type="text";const n=document.createElement("button");return n.classList.add("search-button"),n.type="submit",n.innerText="검색",e.append(t,n),e}();return r.classList.add("search-box"),t.append(n,r),t}();E("#app").prepend(t),t.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),e.target.dispatchEvent(W)})),t.querySelector(".logo").addEventListener("click",(e=>{e.target.dispatchEvent(D)}))})(),E("form.search-box").addEventListener("clickSearchButton",(()=>this.makeSearchPage())),E("header > img.logo").addEventListener("logoClickEvent",(()=>{Q(this,V,"f").clearMovieList(),Q(this,V,"f").setTitle("지금 인기 있는 영화"),Q(this,K,"f").clear("popular"),H(this,$,"","f"),E("form.search-box").reset(),this.addMovieList(1)})),yield this.addMovieList(1)}))}addMovieList(e){return G(this,void 0,void 0,(function*(){try{!function(e){if(e>5)throw new Y}(e),Q(this,V,"f").pushMoreSkeletonList(),Q(this,V,"f").removeRetryButton();const t=yield this.fetchMoviePageData();Q(this,V,"f").replaceSkeletonListToData(t)}catch(t){this.handleRetryAddMovieList(t,e)}}))}handleRetryAddMovieList(e,t){if(e instanceof Y)return J(e);Q(this,V,"f").removeSkeleton(),Q(this,V,"f").createRetryButton((()=>{this.addMovieList(t+1)})),J(e)}fetchMoviePageData(){return G(this,void 0,void 0,(function*(){const e=""!==Q(this,$,"f"),t=e?"search":"popular",n=e?"popular":"search",r=Q(this,K,"f").get(t),o=yield e?Q(this,U,"f").fetchSearchResult({pageNumber:r,query:Q(this,$,"f")}):Q(this,U,"f").fetchPopularMovieList(r);return Q(this,K,"f").add(t),Q(this,K,"f").clear(n),o}))}setSearchKeyword(){H(this,$,E("form.search-box > input").value,"f")}makeSearchPage(){if(Q(this,K,"f").clear("search"),this.setSearchKeyword(),""===Q(this,$,"f"))return J("검색어를 입력해주세요.");Q(this,V,"f").clearMovieList(),Q(this,V,"f").setTitle(`"${Q(this,$,"f")}" 검색 결과`),this.addMovieList(1)}}).init()})()})();