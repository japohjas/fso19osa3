(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),l=t.n(r),u=t(2),c=function(e){return o.a.createElement("form",null,o.a.createElement("p",null,e.name," ",e.number," ",o.a.createElement("button",{value:e.id,onClick:e.removeClick},"delete")))},i=function(e){return o.a.createElement("div",null,e.personsToShow.map(function(n){return o.a.createElement(c,{key:n.name,name:n.name,number:n.number,id:n.id,removeClick:e.removeClick})}))},m=function(e){return o.a.createElement("form",null,"rajaa n\xe4ytett\xe4vi\xe4: ",o.a.createElement("input",{value:e.chars,onChange:e.handleToShow}))},d=function(e){return o.a.createElement("form",{onSubmit:e.addPerson},o.a.createElement("p",null,"nimi: ",o.a.createElement("input",{value:e.newName,onChange:e.handleName})),o.a.createElement("p",null,"numero: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumber})),o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))},s=t(3),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then(function(e){return e.data})},v=function(e){return f.a.post(h,e).then(function(e){return e.data})},g=function(e){return f.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},p=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},w=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),c=Object(u.a)(l,2),s=c[0],f=c[1],h=Object(a.useState)(""),E=Object(u.a)(h,2),j=E[0],C=E[1],S=Object(a.useState)(""),O=Object(u.a)(S,2),k=O[0],y=O[1],N=Object(a.useState)(null),T=Object(u.a)(N,2),L=T[0],P=T[1];Object(a.useEffect)(function(){console.log("effect"),b().then(function(e){console.log("promise fulfilled"),r(e)})},[]),console.log("render",t.length,"persons");var D=function(e){P(e),setTimeout(function(){P(null)},5e3)},B=t.filter(function(e){return e.name.toLowerCase().includes(k.toLowerCase())});return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(w,{message:L}),o.a.createElement(m,{chars:k,handleToShow:function(e){console.log("handle to show: ",e.target.value),y(e.target.value)}}),o.a.createElement("h3",null,"lis\xe4\xe4 uusi"),o.a.createElement(d,{addPerson:function(e){e.preventDefault();var n={name:s,number:j},a=t.find(function(e){return e.name.toLowerCase()===s.toLowerCase()});if(console.log("ePerson",a),a&&window.confirm("".concat(s," is already added to phonbook, replace the old number with a new one?"))&&p(a.id,n).then(function(e){r(t.map(function(n){return n.id===a.id?e:n})),D("".concat(s," new number ").concat(j))}).catch(function(e){alert("Information of '".concat(a.name,"' has already been removed from server")),r(t.filter(function(e){return e.id!==a.id}))}),a)return f(""),void C("");v(n).then(function(e){r(t.concat(e)),console.log("lis\xe4tty: ",s,j),D("Added ".concat(s)),f(""),C("")})},newName:s,handleName:function(e){console.log("handle name: ",e.target.value),f(e.target.value)},newNumber:j,handleNumber:function(e){console.log("handle number: ",e.target.value),C(e.target.value)}}),o.a.createElement("h3",null,"Numerot"),o.a.createElement(i,{personsToShow:B,removeClick:function(e){e.preventDefault();var n=t.find(function(n){return n.id===e.target.value});if(window.confirm("Delete ".concat(n.name))){var a=n.id;g(a),r(t.filter(function(e){return e.id!==a})),console.log("removed persons: ",n)}}}))};l.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.267042d7.chunk.js.map