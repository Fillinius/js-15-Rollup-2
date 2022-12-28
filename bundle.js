
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "h1 {\r\n  font-size: 16px;\r\n  color: red;\r\n  margin: auto;\r\n}\r\n\r\nimg {\r\n  width: 200px;\r\n  border-radius: 30px;\r\n  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 25);\r\n}";
n(css,{});

var imgJS = "data:image/png;base64,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";

var textH1 = document.createElement('h1');
textH1.textContent = 'I love JavaScript too';
var imgHTML = document.createElement('img');
imgHTML.src = imgJS;
imgHTML.alt = 'Тут должно быть фото';
document.body.append(textH1, imgHTML);
console.log('Hello World');
